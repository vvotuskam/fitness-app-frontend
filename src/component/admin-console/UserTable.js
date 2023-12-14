import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row, Table} from "react-bootstrap";
import UserItem from "./UserItem";
import {AdminService} from "../../service/AdminService";
import {Link} from "react-router-dom";

const UserTable = () => {

    const [users, setUsers] = useState(null)
    const [flag, setFlag] = useState(null)

    useEffect(() => {
        AdminService.getUsers().then(data => setUsers(data))
    }, []);

    const deleteUser = async (id) => {
        await AdminService.deleteUser(id)
        const data = await AdminService.getUsers()
        setUsers(data)
    }

    if (users === null || users === undefined) {
        return (
            <Container>
                <Row>
                    <Col>
                        No users yet
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <>
            <div style={{float: "right", marginBottom: 10}}>
                <Button>
                    <Link key='form' to={'/user-form'} style={{textDecoration: "none", color: "white"}}>Create</Link>
                </Button>
            </div>
            <Table striped bordered hover variant={'light'}>
                <thead>
                <tr>
                    <th>Email</th>
                    <th>First name</th>
                    <th>Last name</th>
                    {/*<th>Roles</th>*/}
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user => (
                        <UserItem user={user} key={user.id} refresh={deleteUser}/>
                    ))
                }
                </tbody>

            </Table>
        </>
    );
};

export default UserTable;
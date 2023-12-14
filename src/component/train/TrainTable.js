import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row, Table} from "react-bootstrap";
import TrainItem from "./TrainItem";
import TrainService from "../../service/TrainService";
import KeycloakService from "../../service/KeycloakService";
import {Link, useParams} from "react-router-dom";
import RenderOnRole from "../render/RenderOnRole";
import {Roles} from "../../service/Roles";

const TrainTable = () => {

    const [trains, setTrains] = useState(null)

    useEffect(() => {
        TrainService.getAll().then(t => setTrains(t))
    }, []);

    if (trains === null) {
        return (
            <Container>
                <Row>
                    <Col>
                        No trains yet
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <>
            {KeycloakService.getToken()}
            <br/>
            {KeycloakService.getRoles()}
            <RenderOnRole role={Roles.INSTRUCTOR} alt={null} children={
                <div style={{float: "right"}}>
                    <Button>
                        <Link key='form' to={'/form'} style={{textDecoration: "none", color: "white"}}>Create</Link>
                    </Button>
                </div>
            }/>
            <br/>
            <br/>
            <Table striped bordered hover variant={'light'}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Instructor</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    trains.map(train => (
                        <TrainItem train={train} key={train.id}/>
                    ))
                }
                </tbody>
            </Table>
        </>
    );
};

export default TrainTable;
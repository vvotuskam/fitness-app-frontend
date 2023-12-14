import React from 'react';
import {Badge, Button} from "react-bootstrap";
import {Roles} from "../../service/Roles";
import {AdminService} from "../../service/AdminService";

const UserItem = ({user, refresh}) => {

    const badges = () => {
        const badges = []
        for (const role of user.roles) {
            if (role.toLowerCase() === Roles.USER.toLowerCase()) {
                badges.push(
                    <Badge key={'user'} className="ml-2" style={{marginRight: 10}}>
                        USER
                    </Badge>
                )
            }

            if (role.toLowerCase() === Roles.ADMIN.toLowerCase()) {
                badges.push(
                    <Badge key={'ADMIN'} bg="danger" className="ml-2" style={{marginRight: 10}}>
                        ADMIN
                    </Badge>
                )
            }

            if (role.toLowerCase() === Roles.INSTRUCTOR.toLowerCase()) {
                badges.push(
                    <Badge key={'INSTRUCTOR'} bg="warning" className="ml-2" style={{marginRight: 10}}>
                        INSTRUCTOR
                    </Badge>
                )
            }
        }
        return badges
    }

    return (
        <tr>
            <td>{user.email}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            {/*<td>*/}
            {/*    <div className='d-flex justify-content-center align-items-center'>*/}
            {/*        {badges()}*/}
            {/*    </div>*/}
            {/*</td>*/}
            <td className='d-flex justify-content-center'>
                {/*<Button variant={"outline-info"} style={{marginRight: 10}}>Edit</Button>*/}
                <Button variant={"outline-danger"}
                onClick={() => refresh(user.id)}
                >Delete</Button>
            </td>
        </tr>
    );
};

export default UserItem;
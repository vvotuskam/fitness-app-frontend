import React, {useState} from 'react';
import {Container, Row, Col, Card, Badge} from 'react-bootstrap';
import KeycloakService from "../../service/KeycloakService";
import {Roles} from "../../service/Roles";

const Profile = () => {

    const [profile, setProfile] = useState({
        email: KeycloakService.getUsername(),
        firstName: KeycloakService.getFirstName(),
        lastName: KeycloakService.getLastName(),
        roles: KeycloakService.getRoles()
    })

    const badges = () => {
        const badges = []
        for (const role of profile.roles) {
            if (role.toLowerCase() === Roles.USER.toLowerCase()) {
                badges.push(
                    <Badge key={'user'} className="ml-2" style={{marginRight: 10}}>
                        USER
                    </Badge>
                )
            }

            if (role.toLowerCase() === Roles.ADMIN.toLowerCase()) {
                badges.push(
                    <Badge key={'admin'} bg="danger" className="ml-2" style={{marginRight: 10}}>
                        ADMIN
                    </Badge>
                )
            }

            if (role.toLowerCase() === Roles.INSTRUCTOR.toLowerCase()) {
                badges.push(
                    <Badge key={'instructor'} bg="warning" className="ml-2" style={{marginRight: 10}}>
                        INSTRUCTOR
                    </Badge>
                )
            }
        }
        return badges
    }

    return (
        <Container>
            <Row className="mt-4">
                <Col md={{ span: 6, offset: 3 }}>
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center mb-4">User Profile</Card.Title>

                            <div className="mt-3 d-flex justify-content-center">
                                {badges()}
                            </div>

                            <br/>

                            <Card.Text>
                                <strong>Email:</strong> {profile.email}<br />
                                <strong>First Name:</strong> {profile.firstName}<br />
                                <strong>Last Name:</strong> {profile.lastName}<br />
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;

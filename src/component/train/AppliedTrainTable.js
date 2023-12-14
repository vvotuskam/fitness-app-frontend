import React, {useEffect, useState} from 'react';
import TrainService from "../../service/TrainService";
import {Button, Col, Container, Row, Table} from "react-bootstrap";
import KeycloakService from "../../service/KeycloakService";
import {Link} from "react-router-dom";
import TrainItem from "./TrainItem";

const AppliedTrainTable = () => {
    const [trains, setTrains] = useState(null)

    useEffect(() => {
        TrainService.getAllApplied().then(t => setTrains(t))
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
            <br/>
            {KeycloakService.getProfile()}
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

export default AppliedTrainTable;
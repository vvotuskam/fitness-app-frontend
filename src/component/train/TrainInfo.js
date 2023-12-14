import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Button, Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import TrainService from "../../service/TrainService";

const TrainInfo = () => {

    const params = useParams()

    const [train, setTrain] = useState(null)

    useEffect(() => {
        TrainService.getById(params.id)
            .then(t => setTrain(t))
    }, []);

    if (train === null || train === undefined) {
        return (
            <Container>
                <Row>
                    <Col>
                        No such train
                    </Col>
                </Row>
            </Container>
        )
    }

    const apply = () => {
        TrainService.apply(params.id).then(() => setTrain({
            ...train,
            applied: true
        }))
    }

    const cancel = () => {
        TrainService.cancel(params.id).then(() => setTrain({
            ...train,
            applied: false
        }))
    }

    const button = () => {
        if (train.applied) {
            return (
                <Button
                    variant='outline-danger'
                    onClick={cancel}
                >
                    Unapply
                </Button>
            )
        }

        return (
            <Button
                variant='outline-primary'
                onClick={apply}
            >
                Apply
            </Button>
        )
    }

    return (
        <Container className="my-4">
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className="mb-4">{train.name}</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>
                                    <strong>Description:</strong> {train.description}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Instructor:</strong> {train.instructorName}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Date:</strong> {train.date}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <strong>Time:</strong> {train.time}
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                    <br/>
                    <div style={{float: "right"}}>
                        {button()}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TrainInfo;
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import KeycloakService from "../../service/KeycloakService";
import TrainService from "../../service/TrainService";

const TrainForm = ({update}) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        date: '',
        time: '',
    });
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to the server)
        console.log('Form submitted:', formData);
        // You can reset the form or perform other actions after submission
        TrainService.create(formData).then(() => setFormData({
            name: '',
            description: '',
            date: '',
            time: '',
        }))
        update(Date.now())
        navigate('/')
    };

    const handleCancel = () => {
        setFormData({
            name: '',
            description: '',
            date: '',
            time: '',
        })
        navigate('/')
    }

    return (
        <Container className="my-4" >
            <b className='d-flex justify-content-center'>
                {KeycloakService.getFullName()}
            </b>
            <Row xs={2} className='d-flex justify-content-center'>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter training name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <br/>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter training description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <br/>
                        <Form.Group controlId="formDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                placeholder="Select date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <br/>
                        <Form.Group controlId="formTime">
                            <Form.Label>Time</Form.Label>
                            <Form.Control
                                type="time"
                                placeholder="Select time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <br/>
                        <Form.Group style={{float: 'right'}}>
                            <Button
                                variant="outline-primary"
                                type='submit'
                                style={{marginRight: 5}}
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>

                            <Button variant="outline-danger"
                            onClick={handleCancel}>
                                Cancel
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default TrainForm;

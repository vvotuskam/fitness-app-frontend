import React, {useState} from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import {AdminService} from "../../service/AdminService";

const UserForm = ({update}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
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
        AdminService.createUser(formData).then(() => setFormData({
            email: '',
            password: '',
            firstName: '',
            lastName: '',
        }))
        update(Date.now())
        navigate('/users')
    };

    const handleCancel = () => {
        setFormData({
            name: '',
            description: '',
            date: '',
            time: '',
        })
        navigate('/users')
    }

    return (
        <Container className='my-4'>
            <b className='d-flex justify-content-center'>
                Create new user
            </b>
            <Row xs={2} className='d-flex justify-content-center'>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <br/>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <br/>

                        <Form.Group controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter first name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <br/>

                        <Form.Group controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter last name"
                                name="lastName"
                                value={formData.lastName}
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

export default UserForm;

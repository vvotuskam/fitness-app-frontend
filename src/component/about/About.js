import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2 className="mt-3">About Us</h2>
                    <p>
                        Welcome to our fitness club! We are dedicated to helping our members
                        achieve their fitness goals and lead a healthy lifestyle.
                    </p>
                    <p>
                        Our team of experienced instructors is committed to providing
                        high-quality training programs tailored to meet individual needs.
                    </p>
                    <p>
                        Whether you're a beginner or an experienced fitness enthusiast, our
                        club offers a variety of classes and training sessions to suit your
                        preferences and schedule.
                    </p>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h3>Our Instructors</h3>
                    <Card>
                        <Card.Body>
                            <Card.Title>John Fitness</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Certified Fitness Trainer</Card.Subtitle>
                            <Card.Text>
                                With over 10 years of experience in the fitness industry, John Fitness is a certified
                                fitness trainer dedicated to helping individuals achieve their health and wellness goals.
                                John specializes in strength training, high-intensity interval training (HIIT), and
                                personalized workout plans.
                            </Card.Text>
                            <Card.Text>
                                John is passionate about promoting a balanced lifestyle that combines effective
                                workouts with proper nutrition. He believes in tailoring fitness programs to each
                                individual's needs, ensuring a fun and challenging experience for all fitness levels.
                            </Card.Text>
                            <Card.Text>
                                Join one of John's classes today and embark on a journey to a healthier and more
                                active lifestyle!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default About;

import React from "react"
import { Container, Row, Col } from 'react-bootstrap';
import Layout from "../components/layout";

export default function AboutPage() {
    return (
        <Layout>
            <Container style={{marginTop: '80px'}}>
                <h1 align="center">About Us</h1>
            </Container>
            <Container style={{marginTop: '80px', marginBottom: '80px'}}>
                <h2>Faculty of Computer Science</h2>
                <Row>
                    <Col sm>
                        <img alt="Faculty of Computer Science" style={{width: '100%', height: 'auto' }} src="/img/faculty.png" />
                    </Col>
                    <Col sm>
                        <p>Computer Science is the theoritical study and practical application of computation, including topics such as: design and maintenance of software systems, distributed systems, human-computer interaction, computational modeling, artificial intelligence, mobile computing, programming languages, image processing, and computer graphics. With the rapidly growing technology industry, the use of information technology in almost every corner of human activity continue to create opportunities for our graduates.</p>
                        <p>Computing (Computer Science Faculty in President University) consists of 3 majors: Information Technology, Information System, and Visual Communication Design. These three faculties hold activities and events with the help of the student organization called PUMA (President University Major Association), which represents each major or faculty.</p>
                    </Col>
                </Row>
            </Container>
            <Container style={{marginTop: '80px', marginBottom: '80px'}}>
                <h2>Computing Dean and Head Study Program</h2>
                <Row>
                    <Col sm>
                        <img alt="Mr. Nur" style={{width: '100%', height: 'auto' }} src="/img/lecturer/nur-min.jpg" />
                        <h5 style={{textAlign: "center"}}>Drs. Nur Hadisukmana, M.Sc.</h5>
                        <h5 style={{textAlign: "center"}}>Head of Bachelor of Information and Technology Study Program</h5>
                    </Col>
                    <Col sm>
                        <img alt="Mr. Rila" style={{width: '100%', height: 'auto' }} src="/img/lecturer/rila-min.jpg" />
                        <h5 style={{textAlign: "center"}}>Rila Mandala, Ph.D.</h5>
                        <h5 style={{textAlign: "center"}}>Dean of Faculty of Computer Science</h5>
                    </Col>
                    <Col sm>
                        <img alt="Mr. Rikip" style={{width: '100%', height: 'auto' }} src="/img/lecturer/rikip-min.jpg" />
                        <h5 style={{textAlign: "center"}}>Rikip Ginanjar, M.Sc.</h5>
                        <h5 style={{textAlign: "center"}}>Head of Bachelor of Information System Study Program</h5>
                    </Col>
                </Row>
            </Container>
            <Container style={{marginTop: '80px', marginBottom: '80px'}}>
                <h2>About PUMA Computing</h2>
                <Row>
                    <Col sm>
                        <img alt="PUMA Computing logo black" style={{width: '100%', height: 'auto' }} src="/img/logo/horizontal-black-complete.png" />
                    </Col>
                    <Col sm>
                        <p>Computer Science is the theoritical study and practical application of computation, including topics such as: design and maintenance of software systems, distributed systems, human-computer interaction, computational modeling, artificial intelligence, mobile computing, programming languages, image processing, and computer graphics. With the rapidly growing technology industry, the use of information technology in almost every corner of human activity continue to create opportunities for our graduates.</p>
                        <p>Computing (Computer Science Faculty in President University) consists of 3 majors: Information Technology, Information System, and Visual Communication Design. These three faculties hold activities and events with the help of the student organization called PUMA (President University Major Association), which represents each major or faculty.</p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}

import React from "react"
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import Layout from "../components/layout";
import Database from "../helpers/database";
import SEO from "../components/seo";

export default class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            formState: 'ready',
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeMessage = this.handleChangeMessage.bind(this);
    }

    handleChangeName(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleChangeEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    handleChangeMessage(event) {
        this.setState({
            message: event.target.value
        });
    }

    sendMessage(event) {
        let objectToURLEncode = (obj) => {
            var str = [];
            for (var p in obj)
              if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
              }
            return str.join("&");
        }

        event.preventDefault();

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
        };

        Database.ref("/messages/").push().set(data)
        .then(_ => {
            this.setState({
                formState: 'success',
            });
        })
        .catch(_ => {
            this.setState({
                formState: 'error',
            });
        });
    }

    render() {
        return (
            <Layout>
                <SEO
                    title="Contact"
                />
                <Container style={{marginTop: '80px'}}>
                    <h1 align="center">Contact Us</h1>
                </Container>
                <Container style={{marginTop: '80px', marginBottom: '80px'}}>
                    <Row>
                        <Col sm>
                            <iframe title="PUMA Computing location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9230.264183649064!2d107.16520145765367!3d-6.286398010081312!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6984caf54df305%3A0xb7156354ad963e4d!2sPresident+University!5e0!3m2!1sid!2sid!4v1552969377683" style={{width: '100%', height: '100%', border: '0'}} allowFullScreen></iframe>
                        </Col>
                        <Col sm>
                            {
                                this.state.formState === "ready" ?
                                    (
                                        <div>
                                            <small>Feel free to fill the form below if you have any message to PUMA Computing</small>
                                            <Form onSubmit={this.sendMessage.bind(this)}>
                                                <Form.Group controlId="formName">
                                                    <Form.Control type="text" placeholder="Enter name" value={this.state.name} onChange={this.handleChangeName} />
                                                </Form.Group>
                                                <Form.Group controlId="formEmail">
                                                    <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChangeEmail} />
                                                </Form.Group>
                                                <Form.Group controlId="formMessage">
                                                    <Form.Control as="textarea" placeholder="Enter message" rows={5} value={this.state.message} onChange={this.handleChangeMessage} />
                                                </Form.Group>
                                                <Button variant="primary" type="submit">
                                                    Send
                                                </Button>
                                            </Form>
                                        </div>
                                    ) : (
                                        this.state.formState === "error" ?
                                        (
                                            <div>
                                                <Alert variant="danger">
                                                    An error has occured.
                                                </Alert>
                                            </div>
                                        ):(
                                            <div>
                                                <Alert variant="success">
                                                    Your message has been sent! We will reply it shortly.
                                                </Alert>
                                            </div>
                                        )
                                    )
                            }
                        </Col>
                    </Row>
                </Container>
            </Layout>
        );
    }
}

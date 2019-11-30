import React from "react";
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => (
  <Container>
        <Row>
            <Col sm>
                <img alt="PUMA Computing logo black" style={{width: '100%', height: '100%'}} src="/img/logo/horizontal-black-complete.png" />
            </Col>
            <Col sm>
                <h4>{ 'Information' }</h4>
                <p>{ 'President University Campus' }</p>
                <p>{ 'Jl. Ki Hajar Dewantara, Kota Jababeka, Cikarang Baru, Bekasi 17550 - Indonesia' }</p>
                <p>{ 'Email: puma.computing [at] president.ac.id' }</p>
            </Col>
            <Col>
            </Col>
        </Row>
    </Container>
);

export default Footer;
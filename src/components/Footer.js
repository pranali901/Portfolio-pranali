import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer =()=>{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo"/>
                    </Col>
                    <Col sm={6} className="align-item-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/pranali-ausarmal511"><img src={navIcon1}/></a>
                            <a href="https://github.com/pranali901"><img src={navIcon2}/></a>
                            <a href="https://www.instagram.com/pranu_5116/"><img src={navIcon3}/></a>

                        </div>
                        <p>CopyRight 2024. All rights reserved Pranali Ausarmal. </p>

                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
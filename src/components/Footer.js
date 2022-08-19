import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} className="text-center text-sm-end">
                        <p>Lorem ipsum dolor sit amet</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;

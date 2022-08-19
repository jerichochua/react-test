import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
    return (
        <section className="home" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>Hi 👋</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum bibendum.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home;

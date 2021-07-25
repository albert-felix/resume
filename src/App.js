import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Projects from "./components/Projects";
import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";

export default function App() {
  return (
    <div className="container">
      <AboutMe />
      <Container>
        <Row>
          <Col>
            <Education />
          </Col>
          <Col>
            <Projects />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

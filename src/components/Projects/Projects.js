import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import tenhinh from "../../Assets/Projects/hinh.png"; // import ảnh cho project

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""} // thay dấu "" thành tên hình
              title="" // tên project
              description="" // mô tả cho project
              ghLink="" //source code
              demoLink="" //link demo
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bookingcare from "../../Assets/Projects/bookingcare.jpg"; // import ảnh cho project
import foodDelivery from "../../Assets/Projects/foodDelivery.png";
import weatherApp from "../../Assets/Projects/weatherApp.png";

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
              imgPath={bookingcare} // thay dấu "" thành tên hình
              title="BOOKING CARE" // tên project
              description="Mobile application to resgister medical appointments" // mô tả cho project
              ghLink="https://github.com/DoVuMinhOanh1982/doanchuyennganh.git" //source code
              demoLink="https://drive.google.com/file/d/1ec7lc7J9iooeylT-ch23G_ycl5M_38HY/view?usp=sharing" //link demo
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodDelivery} // thay dấu "" thành tên hình
              title="FOOD DELIVERY" // tên project
              description="Mobile application that allows users to order food online" // mô tả cho project
              ghLink="https://github.com/DoVuMinhOanh1982/Food-Delivery.git" //source code
            />
            
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherApp} // thay dấu "" thành tên hình
              title="WEATHER APP" // tên project
              description="Mobile application to search the weather in cities" // mô tả cho project
              ghLink="https://github.com/DoVuMinhOanh1982/weather_app.git" //source code
            />
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

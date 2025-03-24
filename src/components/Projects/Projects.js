import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";

import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Modern Alcohol detector"
              description="This detector is used to check weather the person has consumed the alcohol or not, especially this detector used for college students.This detector will be placed on college gate , every student have to feed infront of that sensor ,if the threshold value is more means then his data will be saved and given to concern members ."
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Emotrack"
              description="EmoTrack is an innovative project designed to help users monitor and understand their emotional well-being. It utilizes interactive questionnaires, AI-based analysis, and visual representations to provide insights into a person's emotional state ."
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Ring alarm"
              description="This is made for college students ,its like a alarm if the period ends means then that will be notified foo all students, without expecting a college alarm,This will comes under SMARTCITY"
                         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Farm to market"
              description="This project is for farmers to sell their products to direct customers without any intermediators, this saves money for them and also there having a lots of strategies like bidding and cold storage options."
            
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

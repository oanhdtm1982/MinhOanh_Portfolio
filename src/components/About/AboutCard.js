import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Do Vu Minh Oanh </span>
            from <span className="purple"> Ho Chi Minh, Viet Nam.</span>
            <br />I am a senior of Faculty of Computer networks and Communications at the University of Information Technology (VNU-HCM) 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              👉 Watching TV 
            </li>
            <li className="about-activity">
              👉 Listening to music
            </li>
            <li className="about-activity">
              👉 Researching new technologies
            </li>
            <li className="about-activity">
              👉 Travelling with my family
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If You Are Born Poor It's Not Your Mistake, But If You Die Poor It's Your Mistake"{" "}
          </p>
          <footer className="blockquote-footer">Bill Gates</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

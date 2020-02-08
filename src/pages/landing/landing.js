import React from "react";
import kbWarriorsLogo from "../../resources/keyboardWarriors.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./landing.css";
export const Landing = () => {
  return (
    <Container>
      <img style={{display: 'block', margin:'auto'}} src={kbWarriorsLogo} alt={"A black and orange helmet"} />
      <h1 style={{textAlign: 'center'}}>Keyboard Warriors</h1>
      <Row className="justify-content-md-center button-row">
        <Col xs={3} lg={2}>
          <Button className={"fight-button landing-button"} variant={"primary"}>
            Fight!
          </Button>
        </Col>
        <Col xs={{span: 3, offset: 1}} lg={{span: 2, offset: 1}}>
          <Button className={"leaderboard-button landing-button"} variant={"primary"}>
            Leaderboard
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

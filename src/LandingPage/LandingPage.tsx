import React from "react";
import kbWarriorsLogo from "../resources/keyboardWarriors.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from 'react-router-dom';
import { subscribeToTimer } from '../scripts/socket';
import "./index.css";

export class LandingPage extends React.Component {

  componentDidMount() {
    document.title = "Keyboard Warriors";
    subscribeToTimer((err: any, timestamp: any) => console.log(timestamp));
  }

  render() {
    return (
      <Container className="landing-container">
        <img className="logo" src={kbWarriorsLogo} alt="A black and orange helmet"/>
        <h1 className="title">Keyboard Warriors</h1>
        <Row className="justify-content-md-center button-row">
          <Col xs={3} lg={2}>
            <Link to="/fight">
              <Button className="fight-button landing-button" variant="primary">
                Fight!
              </Button>
            </Link>
          </Col>
          <Col xs={{span: 3, offset: 1}} lg={{span: 2, offset: 1}}>
            <Link to="/leaderboard">
              <Button className="leaderboard-button landing-button" variant="primary">
                Leaderboard
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

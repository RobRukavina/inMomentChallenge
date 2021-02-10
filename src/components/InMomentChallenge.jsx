import React from "react";
import { Accordion, Card, Col, Row } from "react-bootstrap";

import "./inMomentChallenge.css";
import inMomentScreenShot from "../assets/inMomentScreenShot.jpg";
import arrow from "../assets/Arrow.png";

class InMomentChallenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
    };
  }
  handleClick1 = () => {
    console.log("handleClick Firing", this.state.isOpen1);
    this.setState({
      isOpen1: !this.state.isOpen1,
    });
  };

  handleClick2 = () => {
    console.log("handleClick Firing", this.state.isOpen2);
    this.setState({
      isOpen2: !this.state.isOpen2,
    });
  };

  handleClick3 = () => {
    console.log("handleClick Firing", this.state.isOpen3);
    this.setState({
      isOpen3: !this.state.isOpen3,
    });
  };

  render() {
    const imgClass = this.state.isOpen1 ? "downArrow" : "upArrow";
    const imgClass2 = this.state.isOpen2 ? "downArrow" : "upArrow";
    const imgClass3 = this.state.isOpen3 ? "downArrow" : "upArrow";
    return (
      <React.Fragment>
        <div className="page-wrapper flex">
          <Col className="col-md-5 textFlex">
            <Row>
              <h5 className="pageHeader">Employee Experience</h5>
            </Row>
            <div className="textSectionWrapper">
              <Row>
                <h3 className="sectionOneHeader">
                  Increase Your Wealth of Employee Knowledge
                </h3>
              </Row>
              <p className="sectionOnePTag">
                Happy employees equal trustworthy and proactive employees.
                However, trust takes time and in order to build relationships
                with your employees, you must make them feel valued. Employee
                intelligence will allow you to see what is most important to
                them and your business.
              </p>
              <Accordion>
                <Card className="accordionCardStyle">
                  <Accordion.Toggle
                    as={Card}
                    eventKey="0"
                    className="accordionToggleStyle"
                  >
                    <Card.Header
                      onClick={this.handleClick1}
                      className={`accordionHeaderStyle ${imgClass}`}
                    >
                      Feedback Lifecycle Management
                    </Card.Header>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Lorem Ipsum over and over and over again :)
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <Accordion>
                <Card className="accordionCardStyle">
                  <Accordion.Toggle
                    as={Card}
                    eventKey="1"
                    className="accordionToggleStyle"
                  >
                    <Card.Header
                      onClick={this.handleClick2}
                      className={`accordionHeaderStyle ${imgClass2}`}
                    >
                      Integrations
                    </Card.Header>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      Lorem Ipsum over and over and over again :)
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <Accordion>
                <Card className="accordionCardStyle">
                  <Accordion.Toggle
                    as={Card}
                    eventKey="0"
                    className="accordionToggleStyle"
                  >
                    <Card.Header
                      onClick={this.handleClick3}
                      className={`accordionHeaderStyle ${imgClass3}`}
                    >
                      Multimedia Feedback
                    </Card.Header>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <h3 className="multimediaHeader">
                        Collect and Ingest Richer Employee Feedback
                      </h3>
                      <p className="multimediaPTag">
                        Deliver better business outcomes through richer sourced
                        data, stronger relationships with employees, and
                        compelling stories that increase internal engagement and
                        success.
                      </p>
                      <a
                        type="button"
                        disabled={false}
                        href="https://www.figma.com/file/Vg9iuOYWGNy7lwL5pbmZkn/Developer-Challenge?node-id=1%3A37"
                        className="arrow learnMoreButton"
                      >
                        <img src={arrow} />
                        Learn More
                      </a>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <hr />
            </div>
          </Col>
          <Col className="imageContainer col-md-5">
            <img
              style={{ height: "100%", width: "100%" }}
              src={inMomentScreenShot}
            />
          </Col>
        </div>
      </React.Fragment>
    );
  }
}

export default InMomentChallenge;

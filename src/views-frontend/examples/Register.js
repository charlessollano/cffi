/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import "../../assets/vendor/nucleo/css/nucleo.css";
import "../../assets/vendor/font-awesome/css/font-awesome.min.css";
import "../../assets/scss/argon-design-system-react.scss?v1.1.0";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  CardTitle,
  ListGroup,
  ListGroupItem,
  CardHeader
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

const Beneficiaries = (beneficiary) => {
  return (<ListGroupItem>
            <Card
              color="primary"
              outline
              style={{flex: 1}}
            >
              <CardBody>
                <CardTitle>
                  {beneficiary}
                </CardTitle>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-circle-08" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Fist Name" type="text" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-active-40" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Middle Name" type="text" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Last Name" type="text" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-world-2" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Full Address" type="text" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-calendar-grid-58" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Birthdate" type="text" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-satisfied" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Gender" type="text" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-mobile-button" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Contact Number" type="text" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" />
                  </InputGroup>
                </FormGroup>
              </CardBody>
            </Card>
          </ListGroupItem>
          );
}

class Register extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  setBeneficiaries(cnt){
    let cntbfs = [];
    for (let i = 0; i < cnt; i++) {      
      cntbfs[i] = Beneficiaries(`Beneficiary ${i+1}`);
    }

    return cntbfs;
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="12">
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <h5>Please provide valid necessary details for Registration</h5>
                      </div>
                      <Form role="form">
                        <Row>
                        <Col>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-circle-08" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Fist Name" type="text" />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-active-40" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Middle Name" type="text" />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-hat-3" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Last Name" type="text" />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-world-2" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Full Address" type="text" />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-calendar-grid-58" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Birthdate" type="text" />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-satisfied" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Gender" type="text" />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-badge" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Position" type="text" />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-mobile-button" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Contact Number" type="text" />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input placeholder="Email" type="email" />
                            </InputGroup>
                          </FormGroup>
                          <Card
                            style={{
                              height: '18rem',
                              overflow: 'auto'
                            }}
                          > 
                            <CardHeader>
                              Provide the list of your qualified beneficiaries
                            </CardHeader>
                            <ListGroup flush>
                            {
                              this.setBeneficiaries(3).map(item => item)
                            }         
                            </ListGroup>
                          </Card>        
                        </Col>
                      </Row>
                      <Row>
                        <Col>                          
                        </Col>
                      </Row>
                      <Row className="my-4">
                        <Col xs="12">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id="customCheckRegister"
                              type="checkbox"
                              defaultChecked
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheckRegister"
                            >
                              <span>
                                I agree with the{" "}
                                <a
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  Privacy Policy
                                </a>
                              </span>
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <div className="text-center">
                        <Button
                          className="mt-4"
                          color="primary"
                          type="button"
                        >
                          Register
                        </Button>
                      </div>                      
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Register;

import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { MemberContext } from "../../../context/MemberState";
import DemoNavbar from "components/Navbars/DemoNavbar";
import ReactDatetime from "react-datetime";
import { Button, ButtonGroup, Card, CardBody, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from "reactstrap";
import SimpleFooter from "components/Footers/SimpleFooter";

const AddMembers = () => {
  const [empId, setEmpId] = useState();
  const [firstName, setFirstname] = useState("");
  const [middleName, setMiddlename] = useState("");
  const [lastName, setLastname] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [position, setPosition] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [gender, setGender] = useState(1);

  const { state, dispatch } = useContext(MemberContext);
  const formSubmit = e => {
    e.preventDefault();
    const newMember = {
      id: !editMode ? Date.now() : empId,
      firstName,
      middleName,
      lastName,
      fullAddress,
      position
    };
    if (!editMode) {
      dispatch({
        type: "ADD_MEMBER",
        payload: newMember
      });
    } else {
      dispatch({
        type: "EDIT_MEMBER",
        payload: newMember
      });
    }
    setFirstname("");
    setMiddlename("");
    setLastname("");
    setFullAddress("");
    setPosition("");
    setEditMode(false);
  };

  const cancel = () => {
    setFirstname("");
    setMiddlename("");
    setLastname("");
    setFullAddress("");
    setPosition("");
    setEditMode(false);
  };
  const editMember = member => {
    setEmpId(member.id);
    setFirstname(member.firstName);
    setMiddlename(member.middleName);
    setLastname(member.lastName);
    setFullAddress(member.fullAddress);
    setPosition(member.position);
    setEditMode(true);
  };
  const deleteMem = id => {
    dispatch({
      type: "DELETE_MEMBER",
      payload: id
    })
  };
  
  return (
    <>
      <DemoNavbar />
      <main>
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
          <Container className="pt-lg-7" fluid="lg">
            <Row className="justify-content-center">
              <Col>
                <Card className="bg-secondary shadow border-0">
                  <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                      <h5>Please provide valid necessary details for Registration</h5>
                    </div>
                    <Form role="form">
                      <Row>
                      <Col md="6">
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-circle-08" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input id="firstName" placeholder="Fist Name" type="text" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-active-40" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input id="middleName" placeholder="Middle Name" type="text" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input id="lastName" placeholder="Last Name" type="text" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-world-2" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input id="fullAddress" placeholder="Full Address" type="text" />
                          </InputGroup>
                        </FormGroup>
                        <Row>
                        <Col md="6">
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-badge" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input id="position" placeholder="Position" type="text" />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-badge" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input id="occupation" placeholder="Job Title" type="text" />
                            </InputGroup>
                          </FormGroup>
                        </Col>
                        </Row>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-mobile-button" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input id="contactNum" placeholder="Contact Number" type="text" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input id="email" placeholder="Email" type="email" />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-calendar-grid-58" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <ReactDatetime
                              inputProps={{
                                placeholder: "Date Picker Here"
                              }}
                              timeFormat={false}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>                            
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-satisfied" />
                                  <span style={{paddingLeft: "10px"}}>Gender</span>
                                </InputGroupText>
                              </InputGroupAddon>
                              <ButtonGroup>
                                <Button
                                  color="primary"
                                  outline
                                  onClick={() => setGender(1)}
                                  active={gender === 1}
                                >
                                  Male
                                </Button>
                                <Button
                                  color="primary"
                                  outline
                                  onClick={() => setGender(2)}
                                  active={gender === 2}
                                >
                                  Female
                                </Button>
                                <Button
                                  color="primary"
                                  outline
                                  onClick={() => setGender(3)}
                                  active={gender === 3}
                                >
                                  Others
                                </Button>
                              </ButtonGroup>
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-circle-08" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Beneficiary (Legal Heir)" type="text" />
                          </InputGroup>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row className="my-4">
                      <Col md="12">
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
                              I agree with Philippine British Assurance Inc. agent Charles Sollano. 
                              That this data will be keep for insurance requirements for quotation purposes{" "}
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
};

export default AddMembers;

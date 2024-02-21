import React from 'react';
import { Row, Col, Dropdown, Card, Button, Form } from 'react-bootstrap';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const SupportTicketsDetail = () => {
  const title = 'Ticket Detail';
  const description = 'Service Provider Ticket Detail';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Col>
        {/* Title Start */}
        <div className="page-title-container mb-3">
          <Row>
            <Col className="mb-2">
              <h1 className="mb-2 pb-0 display-4">{title}</h1>
              <div className="text-muted font-heading text-small">Bear claw ice cream candy canes dragée cotton candy toffee wafer.</div>
            </Col>
            <Col xs="12" sm="auto" className="d-flex align-items-center justify-content-end">
              <Dropdown className="ms-1 w-100 w-md-auto" align="end">
                <Dropdown.Toggle className="end w-100 w-md-auto" variant="outline-primary">
                  Status: Solved
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Status: Solved</Dropdown.Item>
                  <Dropdown.Item>Status: Active</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="ms-1" align="end">
                <Dropdown.Toggle className="btn-icon btn-icon-only dropdown-toggle-no-arrow" variant="outline-primary">
                  <CsLineIcons icon="more-horizontal" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>User</Dropdown.Item>
                  <Dropdown.Item>History</Dropdown.Item>
                  <Dropdown.Item>Last Message</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>

          <Row>
            <Col xxl="8" className="mb-5 mb-xxl-0">
              {/* Ticket Details Start */}
              <h2 className="small-title">Can’t find error logs</h2>
              <Card className="mb-2">
                <Card.Body>
                  <div className="mb-4 pb-4 border-bottom border-separator-light">
                    <Row className="g-0 sh-sm-5 h-auto">
                      <Col xs="auto">
                        <img src="/img/profile/profile-9.webp" className="card-img rounded-xl sh-5 sw-5" alt="thumb" />
                      </Col>
                      <Col className="ps-3">
                        <Row className="h-100 g-2">
                          <Col className="h-sm-100 d-flex flex-column justify-content-sm-center mb-1 mb-sm-0">
                            <div>Lisa Jackson</div>
                            <div className="text-small text-muted">lisajackson@gmail.com</div>
                          </Col>
                          <Col
                            xs="12"
                            className="order-3 order-sm-0 col-sm-auto sw-sm-11 sw-sm-11 lh-1-5 text-small text-muted text-sm-end d-flex flex-column justify-content-sm-center"
                          >
                            12 Feb 2021 19:25
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <div>
                      <div className="mt-4">
                        <p>Hello,</p>
                        <p>
                          Cake chocolate bar biscuit sweet roll liquorice jelly jujubes. Gingerbread icing macaroon bear claw jelly toffee. Chocolate cake
                          marshmallow muffin wafer. Pastry cake tart apple pie bear claw sweet. Apple pie macaroon sesame snaps cotton candy jelly
                          <u>pudding lollipop caramels</u>
                          marshmallow. Powder halvah dessert ice cream. Carrot cake gingerbread chocolate cake tootsie roll. Oat cake jujubes jelly-o jelly
                          chupa chups lollipop jelly wafer soufflé.
                        </p>
                        <p>
                          Jelly-o jelly oat cake cheesecake halvah. Cupcake sweet roll donut. Sesame snaps lollipop macaroon. oat cake chocolate cake marzipan
                          pudding danish gummies. Dragée liquorice jelly beans jelly jelly sesame snaps brownie. Cheesecake chocolate cake sweet roll cupcake
                          dragée croissant muffin. Lemon drops cupcake croissant liquorice donut cookie cake. Gingerbread biscuit bear claw marzipan tiramisu
                          topping. Jelly-o croissant chocolate bar gummi bears dessert lemon drops gingerbread croissant. Donut candy jelly.
                        </p>
                        <p className="mb-0">
                          Help would be appreciated!
                          <br />
                          Lisa Jackson
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 pb-4 border-bottom border-separator-light">
                    <Row className="g-0 sh-sm-5 h-auto">
                      <Col xs="auto">
                        <img src="/img/profile/profile-8.webp" className="card-img rounded-xl sh-5 sw-5" alt="thumb" />
                      </Col>
                      <Col className="ps-3">
                        <Row className="h-100 g-2">
                          <Col className="h-sm-100 d-flex flex-column justify-content-sm-center mb-1 mb-sm-0">
                            <div>Blaine Cottrell</div>
                            <div className="text-small text-muted">blainecottrell@msn.com</div>
                          </Col>
                          <Col
                            xs="12"
                            className="order-3 order-sm-0 col-sm-auto sw-sm-11 sw-sm-11 lh-1-5 text-small text-muted text-sm-end d-flex flex-column justify-content-sm-center"
                          >
                            12 Feb 2021 21:40
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <div>
                      <div className="mt-4">
                        <p>Hi Lisa,</p>
                        <p>
                          Jelly-o jelly oat cake cheesecake halvah. Cupcake sweet roll donut. Sesame snaps lollipop macaroon. oat cake chocolate cake marzipan
                          pudding danish gummies. Dragée liquorice jelly beans jelly jelly sesame snaps brownie. Pastry cake tart apple pie bear claw sweet.
                          Apple pie macaroon sesame snaps cotton candy jelly
                          <u>pudding lollipop caramels</u>
                          marshmallow. Powder halvah dessert ice cream. Carrot cake gingerbread chocolate cake tootsie roll. Oat cake jujubes jelly-o jelly
                          chupa chups lollipop jelly wafer soufflé.
                        </p>
                        <p className="mb-0">Blaine Cottrell</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Row className="g-0 sh-sm-5 h-auto">
                      <Col xs="auto">
                        <img src="/img/profile/profile-9.webp" className="card-img rounded-xl sh-5 sw-5" alt="thumb" />
                      </Col>
                      <Col className="ps-3">
                        <Row className="h-100 g-2">
                          <Col className="h-sm-100 d-flex flex-column justify-content-sm-center mb-1 mb-sm-0">
                            <div>Lisa Jackson</div>
                            <div className="text-small text-muted">lisajackson@gmail.com</div>
                          </Col>
                          <Col
                            xs="12"
                            className="order-3 order-sm-0 col-sm-auto sw-sm-11 sw-sm-11 lh-1-5 text-small text-muted text-sm-end d-flex flex-column justify-content-sm-center"
                          >
                            13 Feb 2021 09:20
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <div>
                      <div className="mt-4">
                        <p>Hi,</p>
                        <p>
                          Cake chocolate bar biscuit sweet roll liquorice jelly jujubes. Gingerbread icing macaroon bear claw jelly toffee. Chocolate cake
                          marshmallow muffin wafer. Pastry cake tart apple pie bear claw sweet. Apple pie macaroon sesame snaps cotton candy jelly
                          <u>pudding lollipop caramels</u>
                          marshmallow.
                        </p>

                        <p>
                          Powder halvah dessert ice cream. Carrot cake gingerbread chocolate cake tootsie roll. Oat cake jujubes jelly-o jelly chupa chups
                          lollipop jelly wafer soufflé. Chocolate cake marshmallow muffin wafer. Pastry cake tart apple pie bear claw sweet. Apple pie macaroon
                          sesame snaps cotton candy jelly.
                        </p>
                        <p className="mb-0">Lisa</p>
                      </div>
                      <div className="mt-4 d-flex flex-row flex-wrap">
                        <div className="sw-30 me-2 mb-2">
                          <Row className="g-0 rounded-sm sh-8 border">
                            <Col xs="auto">
                              <div className="sw-10 d-flex justify-content-center align-items-center h-100">
                                <CsLineIcons icon="file-text" className="text-primary" />
                              </div>
                            </Col>
                            <Col className="rounded-sm-end d-flex flex-column justify-content-center pe-3">
                              <div className="d-flex justify-content-between">
                                <p className="mb-0 clamp-line" data-line="1">
                                  nice_recipe.doc
                                </p>
                                <NavLink to="#">
                                  <CsLineIcons icon="download" size="17" className="alternate-link" />
                                </NavLink>
                              </div>
                              <div className="text-small text-primary">521 KB</div>
                            </Col>
                          </Row>
                        </div>
                        <div className="sw-30 me-2 mb-2">
                          <Row className="g-0 rounded-sm sh-8 border">
                            <Col xs="auto">
                              <div className="sw-10 d-flex justify-content-center align-items-center h-100">
                                <CsLineIcons icon="file-text" className="text-primary" />
                              </div>
                            </Col>
                            <Col className="rounded-sm-end d-flex flex-column justify-content-center pe-3">
                              <div className="d-flex justify-content-between">
                                <p className="mb-0 clamp-line" data-line="1">
                                  bread_making.doc
                                </p>
                                <NavLink to="#">
                                  <CsLineIcons icon="download" size="17" className="alternate-link" />
                                </NavLink>
                              </div>
                              <div className="text-small text-primary">521 KB</div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              {/* Ticket Details End */}

              {/* Ticket Answer Start */}
              <Card>
                <Card.Body>
                  <div className="mb-3 filled">
                    <CsLineIcons icon="notebook-1" />
                    <Form.Control as="textarea" rows={5} placeholder="Answer" />
                  </div>
                  <Button variant="outline-primary" className="btn-icon btn-icon-end">
                    <span>Send</span> <CsLineIcons icon="send" />
                  </Button>
                  <Button variant="outline-primary" className=" btn-icon btn-icon-only ms-1">
                    <CsLineIcons icon="attachment" />
                  </Button>
                </Card.Body>
              </Card>
              {/* Ticket Answer End */}
            </Col>

            <Col xxl="4">
              {/* Activity Start */}
              <h2 className="small-title">Activity</h2>
              <Card className="mb-5">
                <Card.Body>
                  <Row className="g-0">
                    <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                      <div className="w-100 d-flex sh-1" />
                      <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                        <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                      </div>
                      <div className="w-100 d-flex h-100 justify-content-center position-relative">
                        <div className="line-w-1 bg-separator h-100 position-absolute" />
                      </div>
                    </Col>
                    <Col className="mb-4">
                      <div className="h-100">
                        <div className="d-flex flex-column justify-content-start">
                          <div className="d-flex flex-column">
                            <Button variant="link" className="p-0 pt-1 heading text-start">
                              Ticket Created
                            </Button>
                            <div className="text-alternate">16.02.2021</div>
                            <div className="text-muted mt-1">Biscuit donut powder sugar plum pastry. Chupa chups topping pastry halvah.</div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="g-0">
                    <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                      <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                        <div className="line-w-1 bg-separator h-100 position-absolute" />
                      </div>
                      <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                        <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                      </div>
                      <div className="w-100 d-flex h-100 justify-content-center position-relative">
                        <div className="line-w-1 bg-separator h-100 position-absolute" />
                      </div>
                    </Col>
                    <Col className="mb-4">
                      <div className="h-100">
                        <div className="d-flex flex-column justify-content-start">
                          <div className="d-flex flex-column">
                            <Button variant="link" className="p-0 pt-1 heading text-start">
                              Answered
                            </Button>
                            <div className="text-alternate">16.02.2021</div>
                            <div className="text-muted mt-1">Apple pie cotton candy tiramisu biscuit cake muffin tootsie roll bear claw cake.</div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="g-0">
                    <Col xs="auto" className="sw-1 d-flex flex-column justify-content-center align-items-center position-relative me-4">
                      <div className="w-100 d-flex sh-1 position-relative justify-content-center">
                        <div className="line-w-1 bg-separator h-100 position-absolute" />
                      </div>
                      <div className="rounded-xl shadow d-flex flex-shrink-0 justify-content-center align-items-center">
                        <div className="bg-gradient-light sw-1 sh-1 rounded-xl position-relative" />
                      </div>
                      <div className="w-100 d-flex h-100 justify-content-center position-relative" />
                    </Col>
                    <Col>
                      <div className="h-100">
                        <div className="d-flex flex-column justify-content-start">
                          <div className="d-flex flex-column">
                            <Button variant="link" className="p-0 pt-1 heading text-start">
                              Solved
                            </Button>
                            <div className="text-alternate">17.02.2021</div>
                            <div className="text-muted mt-1">
                              Marzipan muffin cheesecake. Caramels wafer jelly beans. Icing pudding dessert caramels cake topping marzipan.
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              {/* Activity End */}

              {/* Rate the Conversation Start */}
              <h2 className="small-title">Rate the Conversation</h2>
              <Card>
                <Card.Body className="mb-n3">
                  <div className="mb-3">
                    <Form.Label className="d-block">Skills</Form.Label>
                    <Rating
                      initialRating={0}
                      onChange={() => {}}
                      emptySymbol={<i className="cs-star text-muted" />}
                      fullSymbol={<i className="cs-star-full text-primary" />}
                    />
                  </div>
                  <div className="mb-3">
                    <Form.Label className="d-block">Communucation</Form.Label>
                    <Rating
                      initialRating={0}
                      onChange={() => {}}
                      emptySymbol={<i className="cs-star text-muted" />}
                      fullSymbol={<i className="cs-star-full text-primary" />}
                    />
                  </div>
                  <div className="mb-3">
                    <Form.Label className="d-block">Time</Form.Label>
                    <Rating
                      initialRating={0}
                      onChange={() => {}}
                      emptySymbol={<i className="cs-star text-muted" />}
                      fullSymbol={<i className="cs-star-full text-primary" />}
                    />
                  </div>
                </Card.Body>
              </Card>
              {/* Rate the Conversation End */}
            </Col>
          </Row>
        </div>
        {/* Title End */}
      </Col>
    </>
  );
};

export default SupportTicketsDetail;

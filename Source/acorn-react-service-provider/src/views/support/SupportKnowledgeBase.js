import React from 'react';
import { Row, Col, Card, Accordion, useAccordionButton, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

function CustomAccordionToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => {});
  return (
    <Card.Body className="py-4" onClick={decoratedOnClick} role="button">
      <Button variant="link" className="list-item-heading p-0">
        {children}
      </Button>
    </Card.Body>
  );
}

const SupportKnowledgeBase = () => {
  const title = 'Knowledge Base';
  const description = 'Service Provider Knowledge Base';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Col>
        {/* Title Start */}
        <div className="page-title-container mb-3">
          <Row>
            <Col className="mb-2">
              <h1 className="mb-2 pb-0 display-4">{title}</h1>
              <div className="text-muted font-heading text-small">Fruitcake tiramisu pastry halvah chocolate bar apple pie.</div>
            </Col>
          </Row>
        </div>
        {/* Title End */}

        {/* Guides by Product Start */}
        <h2 className="small-title">Guides by Product</h2>
        <Row className="row-cols-1 row-cols-lg-2 g-2 mb-5">
          <Col>
            <Card className="mb-2 h-100">
              <Card.Body>
                <Row className="g-0">
                  <Col xs="auto">
                    <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                      <div className="text-white d-flex justify-content-center align-items-center h-100">
                        <CsLineIcons icon="server" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column ps-5 h-100 justify-content-start">
                      <div className="d-flex flex-column">
                        <div className="d-flex flex-column justify-content-center sh-6">
                          <NavLink to="#" className="heading">
                            Hosting
                          </NavLink>
                        </div>
                      </div>
                      <div className="mb-n2">
                        <Row className="g-0 mb-2">
                          <Col xs="auto">
                            <div className="sw-3 me-1">
                              <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                            </div>
                          </Col>
                          <Col className="lh-1-25">
                            <NavLink to="/support/docs/detail" className="alternate-link">
                              Wafer halvah chocolate soufflé icing
                            </NavLink>
                          </Col>
                        </Row>
                        <Row className="g-0 mb-2">
                          <Col xs="auto">
                            <div className="sw-3 me-1">
                              <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                            </div>
                          </Col>
                          <Col className="lh-1-25">
                            <NavLink to="/support/docs/detail" className="alternate-link">
                              Lemon drops cupcake croissant liquorice bears dessert lemon drops gingerbread
                            </NavLink>
                          </Col>
                        </Row>
                        <Row className="g-0 mb-2">
                          <Col xs="auto">
                            <div className="sw-3 me-1">
                              <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                            </div>
                          </Col>
                          <Col className="lh-1-25">
                            <NavLink to="/support/docs/detail" className="alternate-link">
                              Gingerbread chocolate cake tootsie marzipan tiramisu topping
                            </NavLink>
                          </Col>
                        </Row>
                        <Row className="g-0 mb-2">
                          <Col xs="auto">
                            <div className="sw-3 me-1">
                              <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                            </div>
                          </Col>
                          <Col className="lh-1-25">
                            <NavLink to="/support/docs/detail" className="alternate-link">
                              Sweet roll cupcake dragée croissant
                            </NavLink>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2 h-100">
              <Card.Body>
                <Row className="g-0">
                  <Col xs="auto">
                    <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                      <div className="text-white d-flex justify-content-center align-items-center h-100">
                        <CsLineIcons icon="image" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column ps-5 h-100 justify-content-start">
                      <div className="d-flex flex-column">
                        <div className="d-flex flex-column justify-content-center sh-6">
                          <NavLink to="#" className="heading">
                            Storage
                          </NavLink>
                        </div>
                      </div>
                      <div className="mb-n2">
                        <Row className="g-0 mb-2">
                          <Col xs="auto">
                            <div className="sw-3 me-1">
                              <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                            </div>
                          </Col>
                          <Col className="lh-1-25">
                            <NavLink to="/support/docs/detail" className="alternate-link">
                              Cookie tootsie roll candy canes marshmallow jujubes tiramisu apple pie carrot cake danish candy
                            </NavLink>
                          </Col>
                        </Row>
                        <Row className="g-0 mb-2">
                          <Col xs="auto">
                            <div className="sw-3 me-1">
                              <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                            </div>
                          </Col>
                          <Col className="lh-1-25">
                            <NavLink to="/support/docs/detail" className="alternate-link">
                              Croissant chocolate bar croissant drops gingerbread
                            </NavLink>
                          </Col>
                        </Row>
                        <Row className="g-0 mb-2">
                          <Col xs="auto">
                            <div className="sw-3 me-1">
                              <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                            </div>
                          </Col>
                          <Col className="lh-1-25">
                            <NavLink to="/support/docs/detail" className="alternate-link">
                              Marzipan bear claw marzipan tiramisu topping
                            </NavLink>
                          </Col>
                        </Row>
                        <Row className="g-0 mb-2">
                          <Col xs="auto">
                            <div className="sw-3 me-1">
                              <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                            </div>
                          </Col>
                          <Col className="lh-1-25">
                            <NavLink to="/support/docs/detail" className="alternate-link">
                              Sweet roll cupcake dragée croissant muffin
                            </NavLink>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2 h-100">
              <Card.Body>
                <Row className="g-0">
                  <Col xs="auto">
                    <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                      <div className="text-white d-flex justify-content-center align-items-center h-100">
                        <CsLineIcons icon="user" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column ps-5 h-100 justify-content-start">
                      <div className="d-flex flex-column">
                        <div className="d-flex flex-column justify-content-center sh-6">
                          <NavLink to="#" className="heading">
                            Users
                          </NavLink>
                        </div>
                      </div>
                      <div className="mb-n2">
                        <Row className="g-0 mb-2">
                          <Col xs="auto">
                            <div className="sw-3 me-1">
                              <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                            </div>
                          </Col>
                          <Col className="lh-1-25">
                            <NavLink to="/support/docs/detail" className="alternate-link">
                              Chupa chups marshmallow muffin liquorice
                            </NavLink>
                          </Col>
                        </Row>
                        <Row className="g-0 mb-2">
                          <Col xs="auto">
                            <div className="sw-3 me-1">
                              <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                            </div>
                          </Col>
                          <Col className="lh-1-25">
                            <NavLink to="/support/docs/detail" className="alternate-link">
                              Chocolate cake sweet roll cupcake dragée croissant croissant muffin
                            </NavLink>
                          </Col>
                        </Row>
                        <Row className="g-0 mb-2">
                          <Col xs="auto">
                            <div className="sw-3 me-1">
                              <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                            </div>
                          </Col>
                          <Col className="lh-1-25">
                            <NavLink to="/support/docs/detail" className="alternate-link">
                              Dragée croissant muffin
                            </NavLink>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2 h-100">
              <Card.Body>
                <Row className="g-0">
                  <Col xs="auto">
                    <div className="bg-gradient-light sw-6 sh-6 rounded-xl">
                      <div className="text-white d-flex justify-content-center align-items-center h-100">
                        <CsLineIcons icon="database" />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-column ps-5 h-100 justify-content-start">
                      <div className="d-flex flex-column">
                        <div className="d-flex flex-column justify-content-center sh-6">
                          <NavLink to="#" className="heading">
                            Database
                          </NavLink>
                        </div>
                      </div>
                      <div className="mb-n2">
                        <Row className="g-0 mb-2">
                          <Col xs="auto">
                            <div className="sw-3 me-1">
                              <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                            </div>
                          </Col>
                          <Col className="lh-1-25">
                            <NavLink to="/support/docs/detail" className="alternate-link">
                              Chocolate cake marshmallow muffin
                            </NavLink>
                          </Col>
                        </Row>
                        <Row className="g-0 mb-2">
                          <Col xs="auto">
                            <div className="sw-3 me-1">
                              <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                            </div>
                          </Col>
                          <Col className="lh-1-25">
                            <NavLink to="/support/docs/detail" className="alternate-link">
                              Bear claw marzipan tiramisu topping
                            </NavLink>
                          </Col>
                        </Row>
                        <Row className="g-0 mb-2">
                          <Col xs="auto">
                            <div className="sw-3 me-1">
                              <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                            </div>
                          </Col>
                          <Col className="lh-1-25">
                            <NavLink to="/support/docs/detail" className="alternate-link">
                              Gingerbread biscuit bear claw marzipan tiramisu topping
                            </NavLink>
                          </Col>
                        </Row>
                        <Row className="g-0 mb-2">
                          <Col xs="auto">
                            <div className="sw-3 me-1">
                              <CsLineIcons icon="chevron-right" className="text-muted align-top" size="17" />
                            </div>
                          </Col>
                          <Col className="lh-1-25">
                            <NavLink to="/support/docs/detail" className="alternate-link">
                              Sweet roll apple pie tiramisu bonbon sugar plum muffin sesame snaps chocolate
                            </NavLink>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Guides by Product End */}

        <Row className="mb-n5">
          <Col xxl="8" className="mb-5">
            {/* Faq Start */}
            <h2 className="small-title">Faq</h2>
            <Accordion className="mb-n2" defaultActiveKey="1">
              <Card className="d-flex mb-2 flex-grow-1">
                <CustomAccordionToggle eventKey="1">Cupcake Lollipop Biscuit</CustomAccordionToggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="pt-0">
                    <p>
                      <strong>Moon Tempor</strong>
                    </p>
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                      single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                      ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                      probably haven't heard of them accusamus labore sustainable VHS.
                    </p>
                    <br />
                    <p>
                      <strong>Accusamus Labore</strong>
                    </p>
                    <p>
                      Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                      craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                      <br />
                      <br />
                      Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore
                      sustainable VHS. Ad vegan excepteur butcher vice lomo. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee
                      nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                      excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of
                      them accusamus labore sustainable VHS.
                    </p>
                    <p className="mb-0">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                      single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                      ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                      probably haven't heard of them accusamus labore sustainable VHS.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="d-flex mb-2 flex-grow-1">
                <CustomAccordionToggle eventKey="2">Roll Marshmallow</CustomAccordionToggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body className="pt-0">
                    <p>
                      <strong>Moon Tempor</strong>
                    </p>
                    <p className="mb-0">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                      single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                      ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                      probably haven't heard of them accusamus labore sustainable VHS.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="d-flex mb-2 flex-grow-1">
                <CustomAccordionToggle eventKey="3">Pudding Soufflé Macaroon Carrot Cake</CustomAccordionToggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body className="pt-0">
                    <p>
                      <strong>Moon Tempor</strong>
                    </p>
                    <p className="mb-0">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                      single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                      ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                      probably haven't heard of them accusamus labore sustainable VHS.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="d-flex mb-2 flex-grow-1">
                <CustomAccordionToggle eventKey="4">Sesame Snaps Cheesecake Muffin</CustomAccordionToggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body className="pt-0">
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                      single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                      ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                      probably haven't heard of them accusamus labore sustainable VHS.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="d-flex mb-2 flex-grow-1">
                <CustomAccordionToggle eventKey="5">Candy Cupcake Ice Cream Gummies Dessert Muffin</CustomAccordionToggle>
                <Accordion.Collapse eventKey="5">
                  <Card.Body className="pt-0">
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                      single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                      ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                      probably haven't heard of them accusamus labore sustainable VHS.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="d-flex mb-2 flex-grow-1">
                <CustomAccordionToggle eventKey="6">Powder Halvah Dessert Ice Cream</CustomAccordionToggle>
                <Accordion.Collapse eventKey="6">
                  <Card.Body className="pt-0">
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                      skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                      single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                      ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you
                      probably haven't heard of them accusamus labore sustainable VHS.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            {/* Faq End */}
          </Col>
          <Col xxl="4" className="mb-5">
            {/* Videos Start */}
            <h2 className="small-title">Videos</h2>
            <Row className="g-2">
              <Col md="6" xl="12">
                <Card>
                  <Row className="g-0 sh-11">
                    <Col xs="auto" className="h-100">
                      <img src="/img/video/video-thumbnail-1.webp" alt="alternate text" className="card-img card-img-horizontal sw-11 sw-md-14 theme-filter" />
                      <div className="position-absolute bg-foreground opacity-75 text-primary px-1 py-1 text-extra-small b-2 s-2 rounded-lg">16:22</div>
                    </Col>
                    <Col>
                      <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                        <div className="d-flex flex-column">
                          <NavLink to="/blog" className="font-heading body-link stretched-link">
                            Database Basics
                          </NavLink>
                          <div className="text-small text-muted text-truncate">Icing liquorice oat roll chocolate cake bar marzipan marzipan carrot.</div>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6" xl="12">
                <Card>
                  <Row className="g-0 sh-11">
                    <Col xs="auto" className="h-100">
                      <img src="/img/video/video-thumbnail-2.webp" alt="alternate text" className="card-img card-img-horizontal sw-11 sw-md-14 theme-filter" />
                      <div className="position-absolute bg-foreground opacity-75 text-primary px-1 py-1 text-extra-small b-2 s-2 rounded-lg">10:05</div>
                    </Col>
                    <Col>
                      <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                        <div className="d-flex flex-column">
                          <NavLink to="/blog" className="font-heading body-link stretched-link">
                            Shared Storage
                          </NavLink>
                          <div className="text-small text-muted text-truncate">
                            Jujubes cream toffee candy jelly chups jujubes muffin chupa chups carrot cake chupa.
                          </div>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6" xl="12">
                <Card>
                  <Row className="g-0 sh-11">
                    <Col xs="auto" className="h-100">
                      <img src="/img/video/video-thumbnail-3.webp" alt="alternate text" className="card-img card-img-horizontal sw-11 sw-md-14 theme-filter" />
                      <div className="position-absolute bg-foreground opacity-75 text-primary px-1 py-1 text-extra-small b-2 s-2 rounded-lg">12:20</div>
                    </Col>
                    <Col>
                      <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                        <div className="d-flex flex-column">
                          <NavLink to="/blog" className="font-heading body-link stretched-link">
                            Javascript Api
                          </NavLink>
                          <div className="text-small text-muted text-truncate">Candy jelly chups jujubes Cookie cream toffee cream chocolate.</div>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6" xl="12">
                <Card>
                  <Row className="g-0 sh-11">
                    <Col xs="auto" className="h-100">
                      <img src="/img/video/video-thumbnail-4.webp" alt="alternate text" className="card-img card-img-horizontal sw-11 sw-md-14 theme-filter" />
                      <div className="position-absolute bg-foreground opacity-75 text-primary px-1 py-1 text-extra-small b-2 s-2 rounded-lg">24:00</div>
                    </Col>
                    <Col>
                      <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                        <div className="d-flex flex-column">
                          <NavLink to="/blog" className="font-heading body-link stretched-link">
                            Frontend Methods
                          </NavLink>
                          <div className="text-small text-muted text-truncate">Jelly chups jujubes chocolate bar pastry oat cake cream.</div>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6" xl="12">
                <Card>
                  <Row className="g-0 sh-11">
                    <Col xs="auto" className="h-100">
                      <img src="/img/video/video-thumbnail-5.webp" alt="alternate text" className="card-img card-img-horizontal sw-11 sw-md-14 theme-filter" />
                      <div className="position-absolute bg-foreground opacity-75 text-primary px-1 py-1 text-extra-small b-2 s-2 rounded-lg">16:50</div>
                    </Col>
                    <Col>
                      <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                        <div className="d-flex flex-column">
                          <NavLink to="/blog" className="font-heading body-link stretched-link">
                            Backend Methods
                          </NavLink>
                          <div className="text-small text-muted text-truncate">Cookie cream toffee cream chocolate.</div>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col md="6" xl="12">
                <Card>
                  <Row className="g-0 sh-11">
                    <Col xs="auto" className="h-100">
                      <img src="/img/video/video-thumbnail-6.webp" alt="alternate text" className="card-img card-img-horizontal sw-11 sw-md-14 theme-filter" />
                      <div className="position-absolute bg-foreground opacity-75 text-primary px-1 py-1 text-extra-small b-2 s-2 rounded-lg">08:30</div>
                    </Col>
                    <Col>
                      <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                        <div className="d-flex flex-column">
                          <NavLink to="/blog" className="font-heading body-link stretched-link">
                            Data Analysis
                          </NavLink>
                          <div className="text-small text-muted text-truncate">Liquorice bar chocolate bar pastry oat cake cream.</div>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            {/* Videos End */}
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default SupportKnowledgeBase;

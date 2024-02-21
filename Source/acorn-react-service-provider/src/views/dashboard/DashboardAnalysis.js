import React from 'react';
import { Row, Col, Dropdown, Card, Button } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import { NavLink } from 'react-router-dom';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Clamp from 'components/clamp';
import 'react-circular-progressbar/dist/styles.css';
import ChartStreamingLine from './components/ChartStreamingLine';
import ChartStreamingBar from './components/ChartStreamingBar';

const DashboardAnalysis = () => {
  const title = 'Analysis';
  const description = 'Service Provider Analysis';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Col>
        {/* Title Start */}
        <div className="page-title-container mb-3">
          <Row>
            <Col className="mb-2">
              <h1 className="mb-2 pb-0 display-4">{title}</h1>
              <div className="text-muted font-heading text-small">Dragée caramels tiramisu icing cotton candy apple pie brownie.</div>
            </Col>
            <Col xs="12" sm="auto" className="d-flex align-items-center justify-content-end">
              <Dropdown className="ms-1 w-100 w-md-auto" align="end">
                <Dropdown.Toggle className="end w-100 w-md-auto" variant="outline-primary">
                  All Projects
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Production Server</Dropdown.Item>
                  <Dropdown.Item>Mongo Sandbox</Dropdown.Item>
                  <Dropdown.Item>Public Storage</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </div>
        {/* Title End */}

        {/* Stats Start */}
        <h2 className="small-title">Stats</h2>
        <Row className="g-2 mb-5">
          <Col lg="6" xxl="3">
            <Card>
              <Card.Body>
                <div className="heading mb-0 d-flex justify-content-between lh-1-25 mb-3">
                  <span>Views</span>
                  <CsLineIcons icon="screen" className="text-primary" />
                </div>
                <div className="text-small text-success mb-1">
                  <CsLineIcons icon="arrow-top" className="me-1" size="13" />
                  <span className="text-medium">+18.4%</span>
                </div>
                <div className="cta-1 text-primary">1.325</div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6" xxl="3">
            <Card>
              <Card.Body>
                <div className="heading mb-0 d-flex justify-content-between lh-1-25 mb-3">
                  <span>Conversations</span>
                  <CsLineIcons icon="cart" className="text-primary" />
                </div>
                <div className="text-small text-success mb-1">
                  <CsLineIcons icon="arrow-top" className="me-1" size="13" />
                  <span className="text-medium">+55.2%</span>
                </div>
                <div className="cta-1 text-primary">57</div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6" xxl="3">
            <Card>
              <Card.Body>
                <div className="heading mb-0 d-flex justify-content-between lh-1-25 mb-3">
                  <span>Time(Seconds)</span>
                  <CsLineIcons icon="screen" className="text-primary" />
                </div>
                <div className="text-small text-danger mb-1">
                  <CsLineIcons icon="arrow-bottom" className="me-1" size="13" />
                  <span className="text-medium">-6.4%</span>
                </div>
                <div className="cta-1 text-primary">96</div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6" xxl="3">
            <Card>
              <Card.Body>
                <div className="heading mb-0 d-flex justify-content-between lh-1-25 mb-3">
                  <span>Bounce</span>
                  <CsLineIcons icon="navigate-diagonal" className="text-primary" />
                </div>
                <div className="text-small text-success mb-1">
                  <CsLineIcons icon="arrow-top" className="me-1" size="13" />
                  <span className="text-medium">+3.9%</span>
                </div>
                <div className="cta-1 text-primary">48%</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Stats End */}

        {/* Charts Start */}
        <Row>
          <Col xxl="6">
            <h2 className="small-title">CPU</h2>
            <Card className="mb-5">
              <Card.Body>
                <div className="sh-35">
                  <ChartStreamingLine />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xxl="6">
            <h2 className="small-title">Memory</h2>
            <Card className="mb-5">
              <Card.Body>
                <div className="sh-35">
                  <ChartStreamingBar />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Charts End */}

        <Row>
          {/* Top Pages Start */}
          <Col xxl="8" xl="6" className="mb-5">
            <h2 className="small-title">Top Pages</h2>
            <Card className="mb-2">
              <Card.Body className="py-4 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col md="9" className="d-flex align-items-center mb-1 mb-md-0">
                    <div className="text-truncate alternate-link">/classic-dashboard/Interface.Components.Buttons.html</div>
                  </Col>
                  <Col md="3" className="d-flex align-items-center justify-content-md-end text-medium">
                    532
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2">
              <Card.Body className="py-4 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col md="9" className="d-flex align-items-center mb-1 mb-md-0">
                    <div className="text-truncate alternate-link">/classic-dashboard/Pages.Ecommerce.OrderList.html</div>
                  </Col>
                  <Col md="3" className="d-flex align-items-center justify-content-md-end text-medium">
                    521
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2">
              <Card.Body className="py-4 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col md="9" className="d-flex align-items-center mb-1 mb-md-0">
                    <div className="text-truncate alternate-link">/classic-dashboard/Interface.Plugins.Datatables.EditableRows.html</div>
                  </Col>
                  <Col md="3" className="d-flex align-items-center justify-content-md-end text-medium">
                    466
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body className="py-4 h-100">
                <Row className="g-0 h-100 align-content-center">
                  <Col md="9" className="d-flex align-items-center mb-1 mb-md-0">
                    <div className="text-truncate alternate-link">/classic-dashboard/Pages.Miscellaneous.KnowledgeBase.html</div>
                  </Col>
                  <Col md="3" className="d-flex align-items-center justify-content-md-end text-medium">
                    453
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          {/* Top Pages End */}

          {/* Logs Start */}
          <Col xxl="4" xl="6" className="mb-5">
            <div className="d-flex justify-content-between">
              <h2 className="small-title">Logs</h2>
              <Button variant="background-alternate" size="xs" className="btn-icon btn-icon-end p-0 text-small">
                <span className="align-bottom">View More</span> <CsLineIcons icon="chevron-right" className="align-middle" size="12" />
              </Button>
            </div>
            <Card className="sh-35 h-xl-100-card">
              <Card.Body className="scroll-out">
                <OverlayScrollbarsComponent options={{ scrollbars: { autoHide: 'leave' }, overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="h-100">
                  <Row className="g-2 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                        <div className="sh-3">
                          <CsLineIcons icon="play" className="text-success align-top" />
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex flex-column h-100 justify-content-center">
                        <div className="d-flex flex-column">
                          <div className="text-alternate mt-n1 lh-1-25">Power On</div>
                        </div>
                      </div>
                    </Col>
                    <Col xs="auto">
                      <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                        <div className="text-muted ms-2 mt-n1 lh-1-25">19:20</div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="g-2 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                        <div className="sh-3">
                          <CsLineIcons icon="expand-diagonal-2" className="text-primary align-top" />
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex flex-column h-100 justify-content-center">
                        <div className="d-flex flex-column">
                          <div className="text-alternate mt-n1 lh-1-25">Resize</div>
                        </div>
                      </div>
                    </Col>
                    <Col xs="auto">
                      <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                        <div className="text-muted ms-2 mt-n1 lh-1-25">19:15</div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="g-2 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                        <div className="sh-3">
                          <CsLineIcons icon="warning-hexagon" className="text-warning align-top" />
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex flex-column h-100 justify-content-center">
                        <div className="d-flex flex-column">
                          <div className="text-alternate mt-n1 lh-1-25">Disk Size Problem</div>
                        </div>
                      </div>
                    </Col>
                    <Col xs="auto">
                      <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                        <div className="text-muted ms-2 mt-n1 lh-1-25">18:45</div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="g-2 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                        <div className="sh-3">
                          <CsLineIcons icon="power" className="text-danger align-top" />
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex flex-column h-100 justify-content-center">
                        <div className="d-flex flex-column">
                          <div className="text-alternate mt-n1 lh-1-25">Power Off</div>
                        </div>
                      </div>
                    </Col>
                    <Col xs="auto">
                      <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                        <div className="text-muted ms-2 mt-n1 lh-1-25">18:20</div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="g-2 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                        <div className="sh-3">
                          <CsLineIcons icon="crosshair" className="text-tertiary align-top" />
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex flex-column h-100 justify-content-center">
                        <div className="d-flex flex-column">
                          <div className="text-alternate mt-n1 lh-1-25">Snapshot</div>
                        </div>
                      </div>
                    </Col>
                    <Col xs="auto">
                      <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                        <div className="text-muted ms-2 mt-n1 lh-1-25">16:15</div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="g-2 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                        <div className="sh-3">
                          <CsLineIcons icon="crosshair" className="text-tertiary align-top" />
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex flex-column h-100 justify-content-center">
                        <div className="d-flex flex-column">
                          <div className="text-alternate mt-n1 lh-1-25">Snapshot</div>
                        </div>
                      </div>
                    </Col>
                    <Col xs="auto">
                      <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                        <div className="text-muted ms-2 mt-n1 lh-1-25">15:00</div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="g-2 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                        <div className="sh-3">
                          <CsLineIcons icon="warning-hexagon" className="text-warning align-top" />
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex flex-column h-100 justify-content-center">
                        <div className="d-flex flex-column">
                          <div className="text-alternate mt-n1 lh-1-25">Disk Size Problem</div>
                        </div>
                      </div>
                    </Col>
                    <Col xs="auto">
                      <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                        <div className="text-muted ms-2 mt-n1 lh-1-25">11:50</div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="g-2 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                        <div className="sh-3">
                          <CsLineIcons icon="play" className="text-success align-top" />
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex flex-column h-100 justify-content-center">
                        <div className="d-flex flex-column">
                          <div className="text-alternate mt-n1 lh-1-25">Power On</div>
                        </div>
                      </div>
                    </Col>
                    <Col xs="auto">
                      <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                        <div className="text-muted ms-2 mt-n1 lh-1-25">10:15</div>
                      </div>
                    </Col>
                  </Row>
                  <Row className="g-2 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 d-inline-block d-flex justify-content-start align-items-center h-100">
                        <div className="sh-3">
                          <CsLineIcons icon="power" className="text-danger align-top" />
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex flex-column h-100 justify-content-center">
                        <div className="d-flex flex-column">
                          <div className="text-alternate mt-n1 lh-1-25">Power Off</div>
                        </div>
                      </div>
                    </Col>
                    <Col xs="auto">
                      <div className="d-inline-block d-flex justify-content-end align-items-center h-100">
                        <div className="text-muted ms-2 mt-n1 lh-1-25">09:30</div>
                      </div>
                    </Col>
                  </Row>
                </OverlayScrollbarsComponent>
              </Card.Body>
            </Card>
          </Col>
          {/* Logs End */}
        </Row>

        <Row className="mb-n5">
          {/* Diagnoses Start */}
          <Col xxl="auto" className="mb-5">
            <h2 className="small-title">Diagnoses</h2>
            <Row className="g-2">
              <Col sm="4" xxl="auto">
                <Card className="w-100 sw-xxl-19 sh-xxl-22 h-100">
                  <Card.Body className="h-100 d-flex flex-column justify-content-between align-items-center">
                    <div className="sw-8 sh-8 d-flex justify-content-center align-items-center position-relative mb-3">
                      <CircularProgressbar value={98} strokeWidth={3} text="" className="w-100 h-100 primary text-small" />
                      <div className="position-absolute absolute-center text-alternate text-small">98%</div>
                    </div>
                    <div className="text-alternate text-center mb-0 d-flex align-items-end lh-1-25">Database Uptime</div>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="4" xxl="auto">
                <Card className="w-100 sw-xxl-19 sh-xxl-22 h-100">
                  <Card.Body className="h-100 d-flex flex-column justify-content-between align-items-center">
                    <div className="sw-8 sh-8 d-flex justify-content-center align-items-center position-relative mb-3">
                      <CircularProgressbar value={95} strokeWidth={3} text="" className="w-100 h-100 primary text-small" />
                      <div className="position-absolute absolute-center text-alternate text-small">95%</div>
                    </div>
                    <div className="text-alternate text-center mb-0 d-flex align-items-end lh-1-25">Crash-free Sessions</div>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm="4" xxl="auto">
                <Card className="w-100 sw-xxl-19 sh-xxl-22 h-100">
                  <Card.Body className="h-100 d-flex flex-column justify-content-between align-items-center">
                    <div className="sw-8 sh-8 d-flex justify-content-center align-items-center position-relative mb-3">
                      <CircularProgressbar value={94} strokeWidth={3} text="" className="w-100 h-100 primary text-small" />
                      <div className="position-absolute absolute-center text-alternate text-small">94%</div>
                    </div>
                    <div className="text-alternate text-center mb-0 d-flex align-items-end lh-1-25">Request Success</div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          {/* Diagnoses End */}

          {/* Extend Start */}
          <Col className="mb-5">
            <h2 className="small-title">Extend</h2>
            <Card className="h-100-card">
              <Card.Body>
                <div className="cta-2">Interested in more advanced tools?</div>
                <div className="mb-3 text-primary">Extend your plan now!</div>
                <Row className="g-2">
                  <Col>
                    <Clamp className="text-muted mb-3 mb-sm-0 pe-3 w-75" clamp="2">
                      Cheesecake chocolate carrot cake pie lollipop lemon toffee lollipop. Chupa chups pastry dessert cake bear claw topping.
                    </Clamp>
                  </Col>
                  <Col sm="auto" className="d-flex align-items-center position-relative">
                    <NavLink to="/upgrade" className="btn btn-icon btn-icon-start btn-primary">
                      <CsLineIcons icon="send" /> <span>Upgrade</span>
                    </NavLink>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          {/* Extend End */}
        </Row>
      </Col>
    </>
  );
};

export default DashboardAnalysis;

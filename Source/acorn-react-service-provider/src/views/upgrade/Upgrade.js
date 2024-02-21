import React from 'react';
import { Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const Upgrade = () => {
  const title = 'Upgrade';
  const description = 'Service Provider Upgrade';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Col>
        {/* Title Start */}
        <div className="page-title-container mb-3">
          <Row>
            <Col className="mb-2">
              <h1 className="mb-2 pb-0 display-4">{title}</h1>
              <div className="text-muted font-heading text-small">Ice cream marzipan bear claw jelly beans toffee.</div>
            </Col>
          </Row>
        </div>
        {/* Title End */}

        {/* Prices Start */}
        <Row className="row-cols-1 row-cols-lg-3 g-2 mb-5">
          <Col>
            <Card className="h-100 hover-scale-up">
              <Card.Body className="pb-0">
                <div className="d-flex flex-column align-items-center mb-4">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center mb-2">
                    <CsLineIcons icon="building-small" className="text-white" />
                  </div>
                  <div className="cta-4 text-primary mb-1">Developer</div>
                  <div className="text-muted sh-3 line-through" />
                  <div className="display-4">$ 3.50</div>
                  <div className="text-small text-muted mb-1">User/Month</div>
                </div>
                <p className="text-alternate mb-4">
                  Jelly-o jelly oat cake cheesecake halvah. Cupcake sweet roll donut. Sesame snaps lollipop macaroon. Icing tiramisu oat cake pudding danish
                  gummies.
                </p>
              </Card.Body>
              <Card.Footer className="pt-0 border-0">
                <div className="mb-4">
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="user" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Single user</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="help" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Forum support</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="clipboard" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Access to library</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="database" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">1 GB disk space</Col>
                  </Row>
                </div>
                <div className="d-flex justify-content-center">
                  <Button variant="foreground" className="btn-icon btn-icon-start hover-outline stretched-link">
                    <CsLineIcons icon="chevron-right" /> <span>Upgrade</span>
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 hover-scale-up">
              <Card.Body className="pb-0">
                <Badge pill bg="primary" className="me-1 position-absolute s-2 t-n2 z-index-1">
                  SALE
                </Badge>
                <div className="d-flex flex-column align-items-center mb-4">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center mb-2">
                    <CsLineIcons icon="building" className="text-white" />
                  </div>
                  <div className="cta-4 text-primary mb-1">Team</div>
                  <div className="text-muted sh-3 line-through">$ 10.50</div>
                  <div className="display-4">$ 7.25</div>
                  <div className="text-small text-muted mb-1">User/Month</div>
                </div>
                <p className="text-alternate mb-4">
                  Danish brownie chocolate bar lollipop cookie tootsie roll candy canes. Jujubes lollipop cheesecake gummi bears cheesecake.
                </p>
              </Card.Body>
              <Card.Footer className="pt-0 border-0">
                <div className="mb-4">
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="user" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Up to 50 users</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="support" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Direct support</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="clipboard" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Access to library</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="database" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">50 GB disk space</Col>
                  </Row>
                </div>
                <div className="d-flex justify-content-center">
                  <Button variant="foreground" className="btn-icon btn-icon-start hover-outline stretched-link">
                    <CsLineIcons icon="chevron-right" /> <span>Upgrade</span>
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 hover-scale-up">
              <Card.Body className="pb-0">
                <div className="d-flex flex-column align-items-center mb-4">
                  <div className="bg-gradient-light sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center mb-2">
                    <CsLineIcons icon="building-large" className="text-white" />
                  </div>
                  <div className="cta-4 text-primary mb-1">Company</div>
                  <div className="text-muted sh-3" />
                  <div className="display-4">$ 12.75</div>
                  <div className="text-small text-muted mb-1">User/Month</div>
                </div>
                <p className="text-alternate mb-4">Apple pie macaroon sesame snaps cotton candy jelly pudding lollipop caramels marshmallow. </p>
              </Card.Body>
              <Card.Footer className="pt-0 border-0">
                <div className="mb-4">
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="user" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Unlimited users</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="support" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Direct support</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="clipboard" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Access to library & hot fixes</Col>
                  </Row>
                  <Row className="g-0 mb-2">
                    <Col xs="auto">
                      <div className="sw-3 me-1">
                        <CsLineIcons icon="database" className="d-inline-block text-primary align-top" size="17" />
                      </div>
                    </Col>
                    <Col className="lh-1-25 text-alternate">Unlimited disk space</Col>
                  </Row>
                </div>
                <div className="d-flex justify-content-center">
                  <Button variant="foreground" className="btn-icon btn-icon-start hover-outline stretched-link">
                    <CsLineIcons icon="chevron-right" /> <span>Upgrade</span>
                  </Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        {/* Prices End */}

        {/* Features Start */}
        <h2 className="small-title">Features</h2>
        <Row className="row-cols-1 row-cols-xl-2 g-2 mb-5">
          <Col>
            <Card className="h-100">
              <Card.Body>
                <Row className="g-0">
                  <Col xs="12" sm="auto" className="pe-4 d-flex justify-content-center">
                    <img src="/img/illustration/icon-performance.webp" className="w-auto sw-md-14 sw-xl-11 img-fluid theme-filter" alt="performance" />
                  </Col>
                  <Col xs="12" className="col-sm">
                    <NavLink to="#" className="heading stretched-link mb-2 d-inline-block">
                      High Availability
                    </NavLink>
                    <p>Caramels sesame snaps apple pie fruitcake cheesecake topping lemon drops gummi bears icing. Chocolate cake bonbon tootsie.</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Body>
                <Row className="g-0">
                  <Col xs="12" sm="auto" className="pe-4 d-flex justify-content-center">
                    <img src="/img/illustration/icon-configure.webp" className="w-auto sw-md-14 sw-xl-11 img-fluid theme-filter" alt="performance" />
                  </Col>
                  <Col xs="12" className="col-sm">
                    <NavLink to="#" className="heading stretched-link mb-2 d-inline-block">
                      Resource Efficiency
                    </NavLink>
                    <p>Sesame lemon drops snaps apple bonbon tootsie pie fruitcake cheesecake topping lemon drops gummi bears icing topping.</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Body>
                <Row className="g-0">
                  <Col xs="12" sm="auto" className="pe-4 d-flex justify-content-center">
                    <img src="/img/illustration/icon-database.webp" className="w-auto sw-md-14 sw-xl-11 img-fluid theme-filter" alt="performance" />
                  </Col>
                  <Col xs="12" className="col-sm">
                    <NavLink to="#" className="heading stretched-link mb-2 d-inline-block">
                      Easy Scalability
                    </NavLink>
                    <p>Cheesecake topping lemon drops gummi bears icing. Chocolate cake bonbon tootsie. Pie gummies pie fruitcake dessert powder.</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Body>
                <Row className="g-0">
                  <Col xs="12" sm="auto" className="pe-4 d-flex justify-content-center">
                    <img src="/img/illustration/icon-experiment.webp" className="w-auto sw-md-14 sw-xl-11 img-fluid theme-filter" alt="performance" />
                  </Col>
                  <Col xs="12" className="col-sm">
                    <NavLink to="#" className="heading stretched-link mb-2 d-inline-block">
                      Streamline Operations
                    </NavLink>
                    <p>Apple pie fruitcake cheesecake topping lemon drops gummi bears icing. Chocolate cake bonbon tootsie.</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Features End */}

        {/* Compare Start */}
        <h2 className="small-title">Compare</h2>
        <Row className="g-2">
          <Col xs="3" className="d-none d-xl-block">
            <Card className="no-shadow bg-transparent">
              <Card.Body className="px-0">
                <div className="h-auto sh-xl-8 mb-3 mb-xl-0" />
                <ul className="list-unstyled">
                  <li className="mb-5">Cookie bonbon</li>
                  <li className="mb-5">Lemon drops</li>
                  <li className="mb-5">Tootsie roll</li>
                  <li className="mb-5">Marshmallow lollipop</li>
                  <li className="mb-5">Carrot cake</li>
                  <li className="mb-5">Soufflé cheesecake</li>
                  <li className="mb-5">Muffin cheesecake sesame</li>
                  <li className="mb-5">Sweet sugar plum wafer</li>
                  <li className="mb-5">Jelly beans</li>
                  <li className="mb-5">Marshmallow tootsie</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col xl="3">
            <Card>
              <Card.Body className="text-xl-center">
                <div className="h-auto sh-xl-8 mb-3 mb-xl-0">
                  <div className="heading text-primary mb-0">Developer</div>
                </div>
                <ul className="list-unstyled mb-n4 mb-xl-n5">
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Cookie bonbon</div>5 Users
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Lemon drops</div>
                    Up to 5 GB
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Tootsie roll</div>2 Cores
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Marshmallow lollipop</div>
                    <CsLineIcons icon="check-square" className="text-alternate" size="15" />
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Carrot cake</div>
                    <CsLineIcons icon="check-square" className="text-alternate" size="15" />
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Soufflé cheesecake</div>
                    <CsLineIcons icon="check-square" className="text-separator" size="15" />
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Muffin cheesecake sesame</div>
                    <CsLineIcons icon="check-square" className="text-separator" size="15" />
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Sweet sugar plum wafer</div>
                    <CsLineIcons icon="check-square" className="text-separator" size="15" />
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Jelly beans</div>
                    <CsLineIcons icon="check-square" className="text-separator" size="15" />
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Marshmallow tootsie</div>
                    <CsLineIcons icon="check-square" className="text-separator" size="15" />
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col xl="3">
            <Card>
              <Card.Body className="text-xl-center">
                <div className="h-auto sh-xl-8 mb-3 mb-xl-0">
                  <div className="heading text-primary mb-0">Team</div>
                </div>
                <ul className="list-unstyled mb-n4 mb-xl-n5">
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Cookie bonbon</div>50 Users
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Lemon drops</div>
                    Up to 50 GB
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Tootsie roll</div>8 Cores
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Marshmallow lollipop</div>
                    <CsLineIcons icon="check-square" className="text-alternate" size="15" />
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Carrot cake</div>
                    <CsLineIcons icon="check-square" className="text-alternate" size="15" />
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Soufflé cheesecake</div>
                    <CsLineIcons icon="check-square" className="text-alternate" size="15" />
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Muffin cheesecake sesame</div>
                    <CsLineIcons icon="check-square" className="text-alternate" size="15" />
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Sweet sugar plum wafer</div>
                    <CsLineIcons icon="check-square" className="text-separator" size="15" />
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Jelly beans</div>
                    <CsLineIcons icon="check-square" className="text-separator" size="15" />
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Marshmallow tootsie</div>
                    <CsLineIcons icon="check-square" className="text-separator" size="15" />
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col xl="3">
            <Card>
              <Card.Body className="text-xl-center">
                <div className="h-auto sh-xl-8 mb-3 mb-xl-0">
                  <div className="heading text-primary mb-0">Company</div>
                </div>
                <ul className="list-unstyled mb-n4 mb-xl-n5">
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Cookie bonbon</div>50+ Users
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Lemon drops</div>
                    Unlimited
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Tootsie roll</div>16 Cores
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Marshmallow lollipop</div>
                    <CsLineIcons icon="check-square" className="text-alternate" size="15" />
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Carrot cake</div>
                    <CsLineIcons icon="check-square" className="text-alternate" size="15" />
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Soufflé cheesecake</div>
                    <CsLineIcons icon="check-square" className="text-alternate" size="15" />
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Muffin cheesecake sesame</div>
                    <CsLineIcons icon="check-square" className="text-alternate" size="15" />
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Sweet sugar plum wafer</div>
                    <CsLineIcons icon="check-square" className="text-alternate" size="15" />
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Jelly beans</div>
                    <CsLineIcons icon="check-square" className="text-alternate" size="15" />
                  </li>
                  <li className="mb-4 mb-xl-5">
                    <div className="text-muted text-small text-uppercase d-xl-none mb-1">Marshmallow tootsie</div>
                    <CsLineIcons icon="check-square" className="text-alternate" size="15" />
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Compare End */}
      </Col>
    </>
  );
};

export default Upgrade;

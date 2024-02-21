import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Button, Card } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const Community = () => {
  const title = 'Community';
  const description = 'Service Provider Community';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Col>
        {/* Title Start */}
        <div className="page-title-container mb-3">
          <Row>
            <Col className="mb-2">
              <h1 className="mb-2 pb-0 display-4">{title}</h1>
              <div className="text-muted font-heading text-small">Toffee marshmallow muffin cheesecake apple pie bonbon bear claw.</div>
            </Col>
            <Col xs="12" sm="auto" className="d-flex align-items-center justify-content-end">
              <Button variant="outline-primary" className="btn-icon btn-icon-start w-100 w-md-auto">
                <CsLineIcons icon="plus" /> <span>Add New</span>
              </Button>
            </Col>
          </Row>
        </div>
        {/* Title End */}

        <Row>
          <Col xxl="8">
            {/* Categories Start */}
            <h2 className="small-title">Categories</h2>
            <Row className="g-2 row-cols-1 row-cols-md-2 mb-5">
              <Col>
                <Card className="h-100">
                  <Card.Body>
                    <div className="text-center mb-3">
                      <img src="/img/illustration/icon-storage.webp" className="theme-filter" alt="alternate" />
                      <div className="d-flex flex-column sh-5">
                        <NavLink to="/community/list" className="heading stretched-link">
                          Storage
                        </NavLink>
                      </div>
                    </div>
                    <Row className="g-0 mb-n2">
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">NEW</div>
                        <div className="cta-2 text-primary text-center">1</div>
                      </Col>
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">TOPICS</div>
                        <div className="cta-2 text-primary text-center">13</div>
                      </Col>
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">USERS</div>
                        <div className="cta-2 text-primary text-center">89</div>
                      </Col>
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">UPDATED</div>
                        <div className="cta-2 text-primary text-center">12h</div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="h-100">
                  <Card.Body>
                    <div className="text-center mb-3">
                      <img src="/img/illustration/icon-server.webp" className="theme-filter" alt="alternate" />
                      <div className="d-flex flex-column sh-5">
                        <NavLink to="/community/list" className="heading stretched-link">
                          Hosting
                        </NavLink>
                      </div>
                    </div>
                    <Row className="g-0 mb-n2">
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">NEW</div>
                        <div className="cta-2 text-primary text-center">2</div>
                      </Col>
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">TOPICS</div>
                        <div className="cta-2 text-primary text-center">29</div>
                      </Col>
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">USERS</div>
                        <div className="cta-2 text-primary text-center">42</div>
                      </Col>
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">UPDATED</div>
                        <div className="cta-2 text-primary text-center">44m</div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="h-100">
                  <Card.Body>
                    <div className="text-center mb-3">
                      <img src="/img/illustration/icon-database.webp" className="theme-filter" alt="alternate" />
                      <div className="d-flex flex-column sh-5">
                        <NavLink to="/community/list" className="heading stretched-link">
                          Database
                        </NavLink>
                      </div>
                    </div>
                    <Row className="g-0 mb-n2">
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">NEW</div>
                        <div className="cta-2 text-primary text-center">2</div>
                      </Col>
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">TOPICS</div>
                        <div className="cta-2 text-primary text-center">16</div>
                      </Col>
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">USERS</div>
                        <div className="cta-2 text-primary text-center">61</div>
                      </Col>
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">UPDATED</div>
                        <div className="cta-2 text-primary text-center">3h</div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="h-100">
                  <Card.Body>
                    <div className="text-center mb-3">
                      <img src="/img/illustration/icon-accounts.webp" className="theme-filter" alt="alternate" />
                      <div className="d-flex flex-column sh-5">
                        <NavLink to="/community/list" className="heading stretched-link">
                          Accounts
                        </NavLink>
                      </div>
                    </div>
                    <Row className="g-0 mb-n2">
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">NEW</div>
                        <div className="cta-2 text-primary text-center">3</div>
                      </Col>
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">TOPICS</div>
                        <div className="cta-2 text-primary text-center">11</div>
                      </Col>
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">USERS</div>
                        <div className="cta-2 text-primary text-center">12</div>
                      </Col>
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">UPDATED</div>
                        <div className="cta-2 text-primary text-center">3d</div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="h-100">
                  <Card.Body>
                    <div className="text-center mb-3">
                      <img src="/img/illustration/icon-analytics.webp" className="theme-filter" alt="alternate" />
                      <div className="d-flex flex-column sh-5">
                        <NavLink to="/community/list" className="heading stretched-link">
                          Analytics
                        </NavLink>
                      </div>
                    </div>
                    <Row className="g-0 mb-n2">
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">NEW</div>
                        <div className="cta-2 text-primary text-center">5</div>
                      </Col>
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">TOPICS</div>
                        <div className="cta-2 text-primary text-center">17</div>
                      </Col>
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">USERS</div>
                        <div className="cta-2 text-primary text-center">36</div>
                      </Col>
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">UPDATED</div>
                        <div className="cta-2 text-primary text-center">2d</div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="h-100">
                  <Card.Body>
                    <div className="text-center mb-3">
                      <img src="/img/illustration/icon-support.webp" className="theme-filter" alt="alternate" />
                      <div className="d-flex flex-column sh-5">
                        <NavLink to="/community/list" className="heading stretched-link">
                          Support
                        </NavLink>
                      </div>
                    </div>
                    <Row className="g-0 mb-n2">
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">NEW</div>
                        <div className="cta-2 text-primary text-center">4</div>
                      </Col>
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">TOPICS</div>
                        <div className="cta-2 text-primary text-center">37</div>
                      </Col>
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">USERS</div>
                        <div className="cta-2 text-primary text-center">78</div>
                      </Col>
                      <Col xs="6" sm="3" className="mb-2">
                        <div className="text-small text-muted text-center">UPDATED</div>
                        <div className="cta-2 text-primary text-center">21h</div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            {/* Categories End */}

            {/* Popular Posts Start */}
            <h2 className="small-title">Popular Posts</h2>
            <Card className="mb-2">
              <Card.Body>
                <Row className="g-0">
                  <Col xs="auto" className="d-none d-sm-flex pe-4">
                    <div className="sw-5">
                      <div className="text-center mb-2">
                        <NavLink to="#" className="primary-link">
                          <CsLineIcons icon="arrow-top" />
                        </NavLink>
                      </div>
                      <div className="cta-2 text-alternate text-center mb-2">214</div>
                      <div className="text-center">
                        <NavLink to="#" className="muted-link">
                          <CsLineIcons icon="arrow-bottom" />
                        </NavLink>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="position-relative mb-4">
                      <NavLink to="/community/list" className="heading d-block body-link stretched-link mb-3">
                        Fruitcake chupa chups gingerbread sweet roll pie!
                      </NavLink>
                      <p className="text-alternate mb-0">
                        Topping cotton candy halvah marshmallow jujubes chupa chups macaroon cookie croissant. Marshmallow tiramisu marshmallow gummi bears
                        dragée oat cake fruitcake dessert. Topping bonbon gingerbread chocolate apple pie cheesecake liquorice muffin pudding.
                      </p>
                    </div>
                    <Row className="g-0">
                      <Col xs="12" className="col-sm mb-3 mb-sm-0">
                        <Row className="g-0 sh-4">
                          <Col xs="auto" className="pe-2">
                            <img src="/img/profile/profile-4.webp" className="card-img rounded-xl sh-4 sw-4" alt="thumb" />
                          </Col>
                          <Col className="d-flex align-items-center">Cherish Kerr</Col>
                        </Row>
                      </Col>
                      <Col xs="12" className="col-sm-auto text">
                        <div className="d-inline-block me-3">
                          <CsLineIcons icon="eye" className="text-primary me-1" size="15" />
                          <span className="align-middle">239</span>
                        </div>
                        <div className="d-inline-block">
                          <CsLineIcons icon="message" className="text-primary me-1" size="15" />
                          <span className="align-middle">8</span>
                        </div>
                        <div className="d-inline-block float-end d-sm-none">
                          <NavLink to="#" className="primary-link">
                            <CsLineIcons icon="arrow-top" size="15" />
                          </NavLink>
                          <span className="mx-1 align-middle">214</span>
                          <NavLink to="#" className="muted-link">
                            <CsLineIcons icon="arrow-bottom" size="15" />
                          </NavLink>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2">
              <Card.Body>
                <Row className="g-0">
                  <Col xs="auto" className="d-none d-sm-flex pe-4">
                    <div className="sw-5">
                      <div className="text-center mb-2">
                        <NavLink to="#" className="muted-link">
                          <CsLineIcons icon="arrow-top" />
                        </NavLink>
                      </div>
                      <div className="cta-2 text-alternate text-center mb-2">105</div>
                      <div className="text-center">
                        <NavLink to="#" className="muted-link">
                          <CsLineIcons icon="arrow-bottom" />
                        </NavLink>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="position-relative mb-4">
                      <NavLink to="/community/list" className="heading d-block body-link stretched-link mb-3">
                        Caramels sesame snaps :)
                      </NavLink>
                      <img alt="detail" src="/img/product/large/product-1.webp" className="rounded img-fluid sh-50 w-100" />
                    </div>
                    <Row className="g-0">
                      <Col xs="12" className="col-sm mb-3 mb-sm-0">
                        <Row className="g-0 sh-4">
                          <Col xs="auto" className="pe-2">
                            <img src="/img/profile/profile-3.webp" className="card-img rounded-xl sh-4 sw-4" alt="thumb" />
                          </Col>
                          <Col className="d-flex align-items-center">Kathryn Mengel</Col>
                        </Row>
                      </Col>
                      <Col xs="12" className="col-sm-auto text">
                        <div className="d-inline-block me-3">
                          <CsLineIcons icon="eye" className="text-primary me-1" size="15" />
                          <span className="align-middle">114</span>
                        </div>
                        <div className="d-inline-block">
                          <CsLineIcons icon="message" className="text-primary me-1" size="15" />
                          <span className="align-middle">21</span>
                        </div>
                        <div className="d-inline-block float-end d-sm-none">
                          <NavLink to="#" className="muted-link">
                            <CsLineIcons icon="arrow-top" size="15" />
                          </NavLink>
                          <span className="mx-1 align-middle">105</span>
                          <NavLink to="#" className="muted-link">
                            <CsLineIcons icon="arrow-bottom" size="15" />
                          </NavLink>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2">
              <Card.Body>
                <Row className="g-0">
                  <Col xs="auto" className="d-none d-sm-flex pe-4">
                    <div className="sw-5">
                      <div className="text-center mb-2">
                        <NavLink to="#" className="primary-link">
                          <CsLineIcons icon="arrow-top" />
                        </NavLink>
                      </div>
                      <div className="cta-2 text-alternate text-center mb-2">119</div>
                      <div className="text-center">
                        <NavLink to="#" className="muted-link">
                          <CsLineIcons icon="arrow-bottom" />
                        </NavLink>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="position-relative mb-4">
                      <NavLink to="/community/list" className="heading d-block body-link stretched-link mb-3">
                        Marshmallow tiramisu!
                      </NavLink>
                      <p className="text-alternate mb-0">
                        Brownie topping apple pie pie toffee wafer cookie bonbon sweet roll. Marshmallow sugar plum chupa chups tart brownie dessert lemon drops
                        topping chocolate. Jelly dragée apple pie halvah jujubes. Sweet sugar plum wafer carrot cake jelly chocolate bar. Brownie gummi bears
                        wafer brownie. Caramels sesame snaps apple pie fruitcake cheesecake topping lemon drops gummi bears icing.
                      </p>
                    </div>
                    <Row className="g-0">
                      <Col xs="12" className="col-sm mb-3 mb-sm-0">
                        <Row className="g-0 sh-4">
                          <Col xs="auto" className="pe-2">
                            <img src="/img/profile/profile-3.webp" className="card-img rounded-xl sh-4 sw-4" alt="thumb" />
                          </Col>
                          <Col className="d-flex align-items-center">Kathryn Mengel</Col>
                        </Row>
                      </Col>
                      <Col xs="12" className="col-sm-auto text">
                        <div className="d-inline-block me-3">
                          <CsLineIcons icon="eye" className="text-primary me-1" size="15" />
                          <span className="align-middle">334</span>
                        </div>
                        <div className="d-inline-block">
                          <CsLineIcons icon="message" className="text-primary me-1" size="15" />
                          <span className="align-middle">21</span>
                        </div>
                        <div className="d-inline-block float-end d-sm-none">
                          <NavLink to="#" className="primary-link">
                            <CsLineIcons icon="arrow-top" size="15" />
                          </NavLink>
                          <span className="mx-1 align-middle">119</span>
                          <NavLink to="#" className="muted-link">
                            <CsLineIcons icon="arrow-bottom" size="15" />
                          </NavLink>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2">
              <Card.Body>
                <Row className="g-0">
                  <Col xs="auto" className="d-none d-sm-flex pe-4">
                    <div className="sw-5">
                      <div className="text-center mb-2">
                        <NavLink to="#" className="primary-link">
                          <CsLineIcons icon="arrow-top" />
                        </NavLink>
                      </div>
                      <div className="cta-2 text-alternate text-center mb-2">42</div>
                      <div className="text-center">
                        <NavLink to="#" className="muted-link">
                          <CsLineIcons icon="arrow-bottom" />
                        </NavLink>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="position-relative mb-4">
                      <NavLink to="/community/list" className="heading d-block body-link stretched-link mb-3">
                        Cheesecake pie dessert?
                      </NavLink>
                      <p className="text-alternate mb-0">
                        Marshmallow beans ice cream candy canes sugar plum chupa chups tart brownie dessert lemon drops topping chocolate. Jelly dragée apple
                        pie halvah jujubes.
                      </p>
                    </div>
                    <Row className="g-0">
                      <Col xs="12" className="col-sm mb-3 mb-sm-0">
                        <Row className="g-0 sh-4">
                          <Col xs="auto" className="pe-2">
                            <img src="/img/profile/profile-2.webp" className="card-img rounded-xl sh-4 sw-4" alt="thumb" />
                          </Col>
                          <Col className="d-flex align-items-center">Esperanza Lodge</Col>
                        </Row>
                      </Col>
                      <Col xs="12" className="col-sm-auto text">
                        <div className="d-inline-block me-3">
                          <CsLineIcons icon="eye" className="text-primary me-1" size="15" />
                          <span className="align-middle">321</span>
                        </div>
                        <div className="d-inline-block">
                          <CsLineIcons icon="message" className="text-primary me-1" size="15" />
                          <span className="align-middle">4</span>
                        </div>
                        <div className="d-inline-block float-end d-sm-none">
                          <NavLink to="#" className="primary-link">
                            <CsLineIcons icon="arrow-top" size="15" />
                          </NavLink>
                          <span className="mx-1 align-middle">42</span>
                          <NavLink to="#" className="muted-link">
                            <CsLineIcons icon="arrow-bottom" size="15" />
                          </NavLink>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-2">
              <Card.Body>
                <Row className="g-0">
                  <Col xs="auto" className="d-none d-sm-flex pe-4">
                    <div className="sw-5">
                      <div className="text-center mb-2">
                        <NavLink to="#" className="primary-link">
                          <CsLineIcons icon="arrow-top" />
                        </NavLink>
                      </div>
                      <div className="cta-2 text-alternate text-center mb-2">53</div>
                      <div className="text-center">
                        <NavLink to="#" className="muted-link">
                          <CsLineIcons icon="arrow-bottom" />
                        </NavLink>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div className="position-relative mb-4">
                      <NavLink to="/community/list" className="heading d-block body-link stretched-link mb-3">
                        Lemon drops marzipan cotton candy gingerbread!
                      </NavLink>
                      <p className="text-alternate mb-0">
                        Candy jelly beans cupcake. Jelly sesame snaps marshmallow lollipop. Brownie jelly-o carrot cake brownie lemon drops gummi bears. Halvah
                        pudding tootsie roll carrot cake biscuit ice cream halvah tootsie roll.
                      </p>
                    </div>
                    <Row className="g-0">
                      <Col xs="12" className="col-sm mb-3 mb-sm-0">
                        <Row className="g-0 sh-4">
                          <Col xs="auto" className="pe-2">
                            <img src="/img/profile/profile-7.webp" className="card-img rounded-xl sh-4 sw-4" alt="thumb" />
                          </Col>
                          <Col className="d-flex align-items-center">Joisse Kaycee</Col>
                        </Row>
                      </Col>
                      <Col xs="12" className="col-sm-auto text">
                        <div className="d-inline-block me-3">
                          <CsLineIcons icon="eye" className="text-primary me-1" size="15" />
                          <span className="align-middle">53</span>
                        </div>
                        <div className="d-inline-block">
                          <CsLineIcons icon="message" className="text-primary me-1" size="15" />
                          <span className="align-middle">17</span>
                        </div>
                        <div className="d-inline-block float-end d-sm-none">
                          <NavLink to="#" className="primary-link">
                            <CsLineIcons icon="arrow-top" size="15" />
                          </NavLink>
                          <span className="mx-1 align-middle">53</span>
                          <NavLink to="#" className="muted-link">
                            <CsLineIcons icon="arrow-bottom" size="15" />
                          </NavLink>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Row>
              <Col xs="12" className="text-center mt-5">
                <Button size="xl" variant="outline-primary" className="sw-30">
                  Load More
                </Button>
              </Col>
            </Row>
            {/* Popular Posts End */}
          </Col>
          <Col xxl="4">
            {/* Top Users Start */}
            <h2 className="small-title">Top Users</h2>
            <Card className="mb-5">
              <Card.Body className="mb-n2">
                <Row className="g-0 sh-5 mb-2">
                  <Col xs="auto">
                    <img src="/img/profile/profile-1.webp" className="card-img rounded-xl sh-5 sw-5" alt="thumb" />
                  </Col>
                  <Col>
                    <div className="d-flex flex-row ps-3 h-100 align-items-center justify-content-between">
                      <div className="d-flex flex-row">
                        <span className="me-1">1.</span>
                        <span>Cherish Kerr</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="text-muted me-2 d-inline-block">7.8K</span>
                        <CsLineIcons icon="arrow-top" className="text-primary" size="17" />
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 sh-5 mb-2">
                  <Col xs="auto">
                    <img src="/img/profile/profile-9.webp" className="card-img rounded-xl sh-5 sw-5" alt="thumb" />
                  </Col>
                  <Col>
                    <div className="d-flex flex-row ps-3 h-100 align-items-center justify-content-between">
                      <div className="d-flex flex-row">
                        <span className="me-1">2.</span>
                        <span>Kirby Peters</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="text-muted me-2 d-inline-block">6.1K</span>
                        <CsLineIcons icon="arrow-top" className="text-primary" size="17" />
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 sh-5 mb-2">
                  <Col xs="auto">
                    <img src="/img/profile/profile-7.webp" className="card-img rounded-xl sh-5 sw-5" alt="thumb" />
                  </Col>
                  <Col>
                    <div className="d-flex flex-row ps-3 h-100 align-items-center justify-content-between">
                      <div className="d-flex flex-row">
                        <span className="me-1">3.</span>
                        <span>Olli Hawkins</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="text-muted me-2 d-inline-block">5.7K</span>
                        <CsLineIcons icon="arrow-top" className="text-primary" size="17" />
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 sh-5 mb-2">
                  <Col xs="auto">
                    <img src="/img/profile/profile-8.webp" className="card-img rounded-xl sh-5 sw-5" alt="thumb" />
                  </Col>
                  <Col>
                    <div className="d-flex flex-row ps-3 h-100 align-items-center justify-content-between">
                      <div className="d-flex flex-row">
                        <span className="me-1">4.</span>
                        <span>Zayn Hartley</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="text-muted me-2 d-inline-block">5.6K</span>
                        <CsLineIcons icon="arrow-top" className="text-primary" size="17" />
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 sh-5 mb-2">
                  <Col xs="auto">
                    <img src="/img/profile/profile-2.webp" className="card-img rounded-xl sh-5 sw-5" alt="thumb" />
                  </Col>
                  <Col>
                    <div className="d-flex flex-row ps-3 h-100 align-items-center justify-content-between">
                      <div className="d-flex flex-row">
                        <span className="me-1">5.</span>
                        <span>Vin Lodge</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="text-muted me-2 d-inline-block">5.2K</span>
                        <CsLineIcons icon="arrow-top" className="text-primary" size="17" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            {/* Top Users End */}

            {/* Popular Titles Start */}
            <h2 className="small-title">Popular Titles</h2>
            <Card className="mb-5">
              <Card.Body>
                <Row className="g-0">
                  <Col sm="6" className="mb-n2">
                    <NavLink to="#" className="body-link d-block mb-2">
                      Anpan
                    </NavLink>
                    <NavLink to="#" className="body-link d-block mb-2">
                      Baba
                    </NavLink>
                    <NavLink to="#" className="body-link d-block mb-2">
                      Bagel
                    </NavLink>
                    <NavLink to="#" className="body-link d-block mb-2">
                      Bammy
                    </NavLink>
                    <NavLink to="#" className="body-link d-block mb-2">
                      Chapati
                    </NavLink>
                    <NavLink to="#" className="body-link d-block mb-2">
                      Kalach
                    </NavLink>
                  </Col>
                  <Col sm="6" className="mb-n2">
                    <NavLink to="#" className="body-link d-block mb-2">
                      Kulcha
                    </NavLink>
                    <NavLink to="#" className="body-link d-block mb-2">
                      Matzo
                    </NavLink>
                    <NavLink to="#" className="body-link d-block mb-2">
                      Mohnflesserl
                    </NavLink>
                    <NavLink to="#" className="body-link d-block mb-2">
                      Pane Ticinese
                    </NavLink>
                    <NavLink to="#" className="body-link d-block mb-2">
                      Rieska
                    </NavLink>
                    <NavLink to="#" className="body-link d-block mb-2">
                      Zopf
                    </NavLink>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            {/* Popular Titles End */}

            {/* Tags Start */}
            <h2 className="small-title">Tags</h2>
            <Card>
              <Card.Body className="mb-n1">
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Food (12)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Baking (3)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Sweet (1)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Molding (3)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Pastry (5)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Healthy (7)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Rye (3)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Simple (3)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Cake (2)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Recipe (6)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Bread (8)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Wheat (2)
                </Button>
              </Card.Body>
            </Card>
            {/* Tags End */}
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Community;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const Home = () => {
  const title = 'Settings';
  const description = 'Ecommerce Settings Page';

  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Title Start */}
      <div className="page-title-container">
        <NavLink className="muted-link pb-1 d-inline-block hidden breadcrumb-back" to="/">
          <CsLineIcons icon="chevron-left" size="13" />
          <span className="align-middle text-small ms-1">Home</span>
        </NavLink>
        <h1 className="mb-0 pb-0 display-4" id="title">
          {title}
        </h1>
      </div>
      {/* Title End */}

      {/* Settings List Start */}
      <Row className="row-cols-1 row-cols-md-2 g-2">
        <Col>
          <Card className="hover-scale-up h-100">
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto">
                  <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                    <CsLineIcons icon="gear" className="text-primary" />
                  </div>
                </Col>
                <Col>
                  <div className="d-flex flex-column ps-card justify-content-start">
                    <div className="d-flex flex-column justify-content-center mb-2">
                      <NavLink to="/settings/general" className="heading text-primary stretched-link">
                        General
                      </NavLink>
                    </div>
                    <div className="text-alternate">
                      Lollipop apple pie lollipop toffee croissant. Sugar plum fruitcake cotton candy lemon drops. Carrot cake fruitcake dragée pie cotton candy
                      sesame snaps lollipop croissant.
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="hover-scale-up h-100">
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto">
                  <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                    <CsLineIcons icon="building" className="text-primary" />
                  </div>
                </Col>
                <Col>
                  <div className="d-flex flex-column ps-card justify-content-start">
                    <div className="d-flex flex-column justify-content-center mb-2">
                      <NavLink to="/settings/general" className="heading text-primary stretched-link">
                        Company
                      </NavLink>
                    </div>
                    <div className="text-alternate">
                      Cheesecake bonbon chocolate bar. Tart sugar plum candy canes toffee sweet roll muffin oat cake. Chupa chups cookie icing tart tiramisu
                      chocolate cake.
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="hover-scale-up h-100">
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto">
                  <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                    <CsLineIcons icon="folders" className="text-primary" />
                  </div>
                </Col>
                <Col>
                  <div className="d-flex flex-column ps-card justify-content-start">
                    <div className="d-flex flex-column justify-content-center mb-2">
                      <NavLink to="/settings/general" className="heading text-primary stretched-link">
                        Categories
                      </NavLink>
                    </div>
                    <div className="text-alternate">
                      Marshmallow donut sweet roll. Wafer tootsie roll gingerbread croissant ice cream. Sweet roll ice cream marzipan croissant soufflé
                      fruitcake.
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="hover-scale-up h-100">
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto">
                  <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                    <CsLineIcons icon="pin" className="text-primary" />
                  </div>
                </Col>
                <Col>
                  <div className="d-flex flex-column ps-card justify-content-start">
                    <div className="d-flex flex-column justify-content-center mb-2">
                      <NavLink to="/settings/general" className="heading text-primary stretched-link">
                        Localisation
                      </NavLink>
                    </div>
                    <div className="text-alternate">
                      Chocolate bar sesame snaps tootsie roll donut apple pie. Tart chocolate cake pastry cupcake croissant chocolate. Gingerbread danish
                      tiramisu.
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="hover-scale-up h-100">
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto">
                  <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                    <CsLineIcons icon="coin" className="text-primary" />
                  </div>
                </Col>
                <Col>
                  <div className="d-flex flex-column ps-card justify-content-start">
                    <div className="d-flex flex-column justify-content-center mb-2">
                      <NavLink to="/settings/general" className="heading text-primary stretched-link">
                        Currencies
                      </NavLink>
                    </div>
                    <div className="text-alternate">
                      Halvah jujubes bonbon gummies caramels. Carrot cake pie caramels caramels. Wafer tootsie roll gingerbread croissant ice cream.
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="hover-scale-up h-100">
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto">
                  <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                    <CsLineIcons icon="wallet" className="text-primary" />
                  </div>
                </Col>
                <Col>
                  <div className="d-flex flex-column ps-card justify-content-start">
                    <div className="d-flex flex-column justify-content-center mb-2">
                      <NavLink to="/settings/general" className="heading text-primary stretched-link">
                        Payment
                      </NavLink>
                    </div>
                    <div className="text-alternate">
                      Dessert sweet roll cake lollipop. Jelly-o danish donut tiramisu biscuit toffee tart tootsie roll lemon drops. Lemon drops powder.
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="hover-scale-up h-100">
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto">
                  <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                    <CsLineIcons icon="file-text" className="text-primary" />
                  </div>
                </Col>
                <Col>
                  <div className="d-flex flex-column ps-card justify-content-start">
                    <div className="d-flex flex-column justify-content-center mb-2">
                      <NavLink to="/settings/general" className="heading text-primary stretched-link">
                        Billing
                      </NavLink>
                    </div>
                    <div className="text-alternate">
                      Macaroon candy ice cream candy canes chocolate bar sesame snaps jelly pudding caramels. Dragée macaroon lemon drops icing cupcake
                      gingerbread.
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="hover-scale-up h-100">
            <Card.Body>
              <Row className="g-0">
                <Col xs="auto">
                  <div className="sw-6 sh-6 rounded-xl d-flex justify-content-center align-items-center border border-primary mb-4">
                    <CsLineIcons icon="content" className="text-primary" />
                  </div>
                </Col>
                <Col>
                  <div className="d-flex flex-column ps-card justify-content-start">
                    <div className="d-flex flex-column justify-content-center mb-2">
                      <NavLink to="/settings/general" className="heading text-primary stretched-link">
                        Taxes
                      </NavLink>
                    </div>
                    <div className="text-alternate">
                      Dragée macaroon lemon drops icing cupcake gingerbread. Apple pie caramels tart. Caramels brownie gummies.
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Settings List End */}
    </>
  );
};

export default Home;

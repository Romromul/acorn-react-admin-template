import React from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Clamp from 'components/clamp';

const ServicesUsers = () => {
  const title = 'Users';
  const description = 'Service Provider Users';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Col>
        {/* Title Start */}
        <div className="page-title-container mb-3">
          <Row>
            <Col className="mb-2">
              <h1 className="mb-2 pb-0 display-4">{title}</h1>
              <div className="text-muted font-heading text-small">Candy canes tiramisu tart dessert cheesecake drops marzipan cookie.</div>
            </Col>
            <Col xs="12" sm="auto" className="d-flex align-items-center justify-content-end">
              <Button variant="outline-primary" className="btn-icon btn-icon-start w-100 w-md-auto">
                <CsLineIcons icon="plus" /> <span>Add New</span>
              </Button>
            </Col>
          </Row>
        </div>
        {/* Title End */}

        {/* User Cards Start */}
        <Row className="row-cols-1 row-cols-md-3 row-cols-xxl-4 g-2">
          <Col>
            <Card className="h-100">
              <Card.Body className="text-center">
                <div className="sw-9 sh-9 position-relative mb-3 mx-auto">
                  <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                </div>
                <h5 className="card-title">Blaine Cottrell</h5>
                <Clamp tag="span" clamp="3" className="mb-1 text-muted sh-8">
                  Muffin cheesecake sesame snaps. Donut lollipop chocolate cake. Cheesecake oat cake croissant topping lemon sweet roll.
                </Clamp>
                <div className="d-flex flex-row justify-content-center w-100 mt-4">
                  <NavLink to="/instructor/detail" className="btn btn-outline-primary me-1">
                    Permissions
                  </NavLink>
                  <Button variant="outline-primary" className="btn-icon btn-icon-only">
                    <CsLineIcons icon="more-horizontal" />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Body className="text-center">
                <div className="sw-9 sh-9 position-relative mb-3 mx-auto">
                  <img src="/img/profile/profile-2.webp" className="img-fluid rounded-xl" alt="thumb" />
                </div>
                <h5 className="card-title">Cherish Kerr</h5>
                <Clamp tag="span" clamp="3" className="mb-1 text-muted sh-8">
                  Dragée caramels tiramisu icing cotton candy apple pie brownie. Cotton candy gummi bears chocolate candy canes cheesecake candy canes cake
                  danish chocolate. Cake gummi bears caramels powder cotton candy.
                </Clamp>
                <div className="d-flex flex-row justify-content-center w-100 mt-4">
                  <NavLink to="/instructor/detail" className="btn btn-outline-primary me-1">
                    Permissions
                  </NavLink>
                  <Button variant="outline-primary" className="btn-icon btn-icon-only">
                    <CsLineIcons icon="more-horizontal" />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Body className="text-center">
                <div className="sw-9 sh-9 position-relative mb-3 mx-auto">
                  <img src="/img/profile/profile-3.webp" className="img-fluid rounded-xl" alt="thumb" />
                </div>
                <h5 className="card-title">Beatrice Janelle</h5>
                <Clamp tag="span" clamp="3" className="mb-1 text-muted sh-8">
                  Dragée caramels tiramisu icing cotton candy apple pie brownie. Cotton candy gummi bears chocolate candy canes cheesecake candy canes cake
                  danish chocolate. Cake gummi bears caramels powder cotton candy.
                </Clamp>
                <div className="d-flex flex-row justify-content-center w-100 mt-4">
                  <NavLink to="/instructor/detail" className="btn btn-outline-primary me-1">
                    Permissions
                  </NavLink>
                  <Button variant="outline-primary" className="btn-icon btn-icon-only">
                    <CsLineIcons icon="more-horizontal" />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Body className="text-center">
                <div className="sw-9 sh-9 position-relative mb-3 mx-auto">
                  <img src="/img/profile/profile-4.webp" className="img-fluid rounded-xl" alt="thumb" />
                </div>
                <h5 className="card-title">Eulalie Armel</h5>
                <Clamp tag="span" clamp="3" className="mb-1 text-muted sh-8">
                  Dragée caramels tiramisu icing cotton candy apple pie brownie. Cotton candy gummi bears chocolate candy canes cheesecake candy canes cake
                  danish chocolate. Cake gummi bears caramels powder cotton candy.
                </Clamp>
                <div className="d-flex flex-row justify-content-center w-100 mt-4">
                  <NavLink to="/instructor/detail" className="btn btn-outline-primary me-1">
                    Permissions
                  </NavLink>
                  <Button variant="outline-primary" className="btn-icon btn-icon-only">
                    <CsLineIcons icon="more-horizontal" />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Body className="text-center">
                <div className="sw-9 sh-9 position-relative mb-3 mx-auto">
                  <img src="/img/profile/profile-5.webp" className="img-fluid rounded-xl" alt="thumb" />
                </div>
                <h5 className="card-title">Zayn Hartley</h5>
                <Clamp tag="span" clamp="3" className="mb-1 text-muted sh-8">
                  Dragée caramels tiramisu icing cotton candy apple pie brownie. Cotton candy gummi bears chocolate candy canes cheesecake candy canes cake
                  danish chocolate. Cake gummi bears caramels powder cotton candy.
                </Clamp>
                <div className="d-flex flex-row justify-content-center w-100 mt-4">
                  <NavLink to="/instructor/detail" className="btn btn-outline-primary me-1">
                    Permissions
                  </NavLink>
                  <Button variant="outline-primary" className="btn-icon btn-icon-only">
                    <CsLineIcons icon="more-horizontal" />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Body className="text-center">
                <div className="sw-9 sh-9 position-relative mb-3 mx-auto">
                  <img src="/img/profile/profile-6.webp" className="img-fluid rounded-xl" alt="thumb" />
                </div>
                <h5 className="card-title">Esperanza Lodge</h5>
                <Clamp tag="span" clamp="3" className="mb-1 text-muted sh-8">
                  Dragée caramels tiramisu icing cotton candy apple pie brownie. Cotton candy gummi bears chocolate candy canes cheesecake candy canes cake
                  danish chocolate. Cake gummi bears caramels powder cotton candy.
                </Clamp>
                <div className="d-flex flex-row justify-content-center w-100 mt-4">
                  <NavLink to="/instructor/detail" className="btn btn-outline-primary me-1">
                    Permissions
                  </NavLink>
                  <Button variant="outline-primary" className="btn-icon btn-icon-only">
                    <CsLineIcons icon="more-horizontal" />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* User Cards End */}
      </Col>
    </>
  );
};

export default ServicesUsers;

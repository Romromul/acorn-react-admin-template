import React from 'react';
import { Row, Col, Dropdown, Button, OverlayTrigger, Form, Tooltip, Card, Badge, Pagination } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const SupportTickets = () => {
  const title = 'Tickets';
  const description = 'Service Provider Tickets';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Col>
        {/* Title Start */}
        <div className="page-title-container mb-3">
          <Row>
            <Col className="mb-2">
              <h1 className="mb-2 pb-0 display-4">{title}</h1>
              <div className="text-muted font-heading text-small">Dessert donut cookie carrot cake icing jujubes.</div>
            </Col>
            <Col xs="12" sm="auto" className="d-flex align-items-center justify-content-end">
              <Button variant="outline-primary" className="btn-icon btn-icon-start w-100 w-md-auto">
                <CsLineIcons icon="plus" /> <span>New Ticket</span>
              </Button>
            </Col>
          </Row>
        </div>
        {/* Title End */}

        <Row className="mb-3">
          <Col md="5" lg="3" xxl="2" className="mb-1">
            {/* Search Start */}
            <div className="d-inline-block float-md-start me-1 mb-1 search-input-container w-100 shadow bg-foreground">
              <Form.Control type="text" placeholder="Search" />
              <span className="search-magnifier-icon">
                <CsLineIcons icon="search" />
              </span>
              <span className="search-delete-icon d-none">
                <CsLineIcons icon="close" />
              </span>
            </div>
            {/* Search End */}
          </Col>
          <Col md="7" lg="9" xxl="10" className="mb-1 text-end">
            {/* Export Dropdown Start */}
            <Dropdown align={{ xs: 'end' }} className="d-inline-block ms-1">
              <OverlayTrigger delay={{ show: 1000, hide: 0 }} placement="top" overlay={<Tooltip id="tooltip-top">Export</Tooltip>}>
                <Dropdown.Toggle variant="foreground-alternate" className="dropdown-toggle-no-arrow btn btn-icon btn-icon-only shadow">
                  <CsLineIcons icon="download" />
                </Dropdown.Toggle>
              </OverlayTrigger>
              <Dropdown.Menu className="shadow dropdown-menu-end">
                <Dropdown.Item href="#">Copy</Dropdown.Item>
                <Dropdown.Item href="#">Excel</Dropdown.Item>
                <Dropdown.Item href="#">Cvs</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* Export Dropdown End */}

            {/* Length Start */}
            <Dropdown align={{ xs: 'end' }} className="d-inline-block ms-1">
              <OverlayTrigger delay={{ show: 1000, hide: 0 }} placement="top" overlay={<Tooltip id="tooltip-top">Item Count</Tooltip>}>
                <Dropdown.Toggle variant="foreground-alternate" className="shadow sw-13">
                  10 Items
                </Dropdown.Toggle>
              </OverlayTrigger>
              <Dropdown.Menu className="shadow dropdown-menu-end">
                <Dropdown.Item href="#">5 Items</Dropdown.Item>
                <Dropdown.Item href="#">10 Items</Dropdown.Item>
                <Dropdown.Item href="#">20 Items</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* Length End */}
          </Col>
        </Row>

        <div className="mb-5">
          {/* List Header Start */}
          <Row className="g-0 h-100 align-content-center d-none d-md-flex ps-5 pe-5 mb-2 custom-sort">
            <Col md="1" className="d-flex flex-column mb-lg-0 pe-3 d-flex">
              <div className="text-muted text-small cursor-pointer sort">ID</div>
            </Col>
            <Col md="6" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-small cursor-pointer sort">TITLE</div>
            </Col>
            <Col md="3" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-small cursor-pointer sort">CATEGORY</div>
            </Col>
            <Col md="2" className="d-flex flex-column pe-1 justify-content-end text-end">
              <div className="text-muted text-small cursor-pointer sort">STATUS</div>
            </Col>
          </Row>
          {/* List Header End */}

          {/* List Items Start */}
          <Card className="hover-border-primary mb-2">
            <Card.Body className="pt-0 pb-0 sh-22 sh-md-7">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 ">
                  <div className="text-muted text-small d-md-none">Id</div>
                  <NavLink to="/support/tickets/detail" className="stretched-link h-100 d-flex body-link align-items-center fw-bold">
                    3368
                  </NavLink>
                </Col>
                <Col xs="12" md="6" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-muted text-small d-md-none">Title</div>
                  <div className="text-body fw-bold">Database connection error</div>
                </Col>
                <Col xs="12" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-muted text-small d-md-none">Category</div>
                  <div className="text-body fw-bold">Database</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 order-md-5">
                  <div className="text-muted text-small d-md-none">Status</div>
                  <div>
                    <Badge bg="outline-primary">ACTIVE</Badge>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="hover-border-primary mb-2">
            <Card.Body className="pt-0 pb-0 sh-22 sh-md-7">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 ">
                  <div className="text-muted text-small d-md-none">Id</div>
                  <NavLink to="/support/tickets/detail" className="stretched-link h-100 d-flex body-link align-items-center fw-bold">
                    3127
                  </NavLink>
                </Col>
                <Col xs="12" md="6" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-muted text-small d-md-none">Title</div>
                  <div className="text-body fw-bold">Are the services offline?</div>
                </Col>
                <Col xs="12" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-muted text-small d-md-none">Category</div>
                  <div className="text-body fw-bold">Database</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 order-md-5">
                  <div className="text-muted text-small d-md-none">Status</div>
                  <div>
                    <Badge bg="outline-primary">ACTIVE</Badge>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="hover-border-primary mb-2">
            <Card.Body className="pt-0 pb-0 sh-22 sh-md-7">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 ">
                  <div className="text-muted text-small d-md-none">Id</div>
                  <NavLink to="/support/tickets/detail" className="stretched-link h-100 d-flex body-link align-items-center">
                    3044
                  </NavLink>
                </Col>
                <Col xs="12" md="6" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-muted text-small d-md-none">Title</div>
                  <div className="text-body">Extending storage</div>
                </Col>
                <Col xs="12" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-muted text-small d-md-none">Category</div>
                  <div className="text-body">Storage</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 order-md-5">
                  <div className="text-muted text-small d-md-none">Status</div>
                  <div>
                    <Badge bg="outline-muted">SOLVED</Badge>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="hover-border-primary mb-2">
            <Card.Body className="pt-0 pb-0 sh-22 sh-md-7">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 ">
                  <div className="text-muted text-small d-md-none">Id</div>
                  <NavLink to="/support/tickets/detail" className="stretched-link h-100 d-flex body-link align-items-center">
                    2739
                  </NavLink>
                </Col>
                <Col xs="12" md="6" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-muted text-small d-md-none">Title</div>
                  <div className="text-body">Storage timeout again</div>
                </Col>
                <Col xs="12" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-muted text-small d-md-none">Category</div>
                  <div className="text-body">Storage</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 order-md-5">
                  <div className="text-muted text-small d-md-none">Status</div>
                  <div>
                    <Badge bg="outline-muted">SOLVED</Badge>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="hover-border-primary mb-2">
            <Card.Body className="pt-0 pb-0 sh-22 sh-md-7">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 ">
                  <div className="text-muted text-small d-md-none">Id</div>
                  <NavLink to="/support/tickets/detail" className="stretched-link h-100 d-flex body-link align-items-center">
                    2320
                  </NavLink>
                </Col>
                <Col xs="12" md="6" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-muted text-small d-md-none">Title</div>
                  <div className="text-body">Just wanted to say hello :)</div>
                </Col>
                <Col xs="12" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-muted text-small d-md-none">Category</div>
                  <div className="text-body">Hosting</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 order-md-5">
                  <div className="text-muted text-small d-md-none">Status</div>
                  <div>
                    <Badge bg="outline-muted">SOLVED</Badge>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="hover-border-primary mb-2">
            <Card.Body className="pt-0 pb-0 sh-22 sh-md-7">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 ">
                  <div className="text-muted text-small d-md-none">Id</div>
                  <NavLink to="/support/tickets/detail" className="stretched-link h-100 d-flex body-link align-items-center">
                    2301
                  </NavLink>
                </Col>
                <Col xs="12" md="6" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-muted text-small d-md-none">Title</div>
                  <div className="text-body">Domain name dns record</div>
                </Col>
                <Col xs="12" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-muted text-small d-md-none">Category</div>
                  <div className="text-body">Hosting</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 order-md-5">
                  <div className="text-muted text-small d-md-none">Status</div>
                  <div>
                    <Badge bg="outline-muted">SOLVED</Badge>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="hover-border-primary mb-2">
            <Card.Body className="pt-0 pb-0 sh-22 sh-md-7">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 ">
                  <div className="text-muted text-small d-md-none">Id</div>
                  <NavLink to="/support/tickets/detail" className="stretched-link h-100 d-flex body-link align-items-center">
                    2159
                  </NavLink>
                </Col>
                <Col xs="12" md="6" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-muted text-small d-md-none">Title</div>
                  <div className="text-body">Background services</div>
                </Col>
                <Col xs="12" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-muted text-small d-md-none">Category</div>
                  <div className="text-body">Hosting</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 order-md-5">
                  <div className="text-muted text-small d-md-none">Status</div>
                  <div>
                    <Badge bg="outline-muted">SOLVED</Badge>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="hover-border-primary mb-2">
            <Card.Body className="pt-0 pb-0 sh-22 sh-md-7">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 ">
                  <div className="text-muted text-small d-md-none">Id</div>
                  <NavLink to="/support/tickets/detail" className="stretched-link h-100 d-flex body-link align-items-center">
                    2104
                  </NavLink>
                </Col>
                <Col xs="12" md="6" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-muted text-small d-md-none">Title</div>
                  <div className="text-body">Storage timeout</div>
                </Col>
                <Col xs="12" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-muted text-small d-md-none">Category</div>
                  <div className="text-body">Storage</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 order-md-5">
                  <div className="text-muted text-small d-md-none">Status</div>
                  <div>
                    <Badge bg="outline-muted">SOLVED</Badge>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="hover-border-primary mb-2">
            <Card.Body className="pt-0 pb-0 sh-22 sh-md-7">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 ">
                  <div className="text-muted text-small d-md-none">Id</div>
                  <NavLink to="/support/tickets/detail" className="stretched-link h-100 d-flex body-link align-items-center">
                    2004
                  </NavLink>
                </Col>
                <Col xs="12" md="6" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-muted text-small d-md-none">Title</div>
                  <div className="text-body">Extending to 50 GB</div>
                </Col>
                <Col xs="12" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-muted text-small d-md-none">Category</div>
                  <div className="text-body">Hosting</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 order-md-5">
                  <div className="text-muted text-small d-md-none">Status</div>
                  <div>
                    <Badge bg="outline-muted">SOLVED</Badge>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="hover-border-primary mb-2">
            <Card.Body className="pt-0 pb-0 sh-22 sh-md-7">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 ">
                  <div className="text-muted text-small d-md-none">Id</div>
                  <NavLink to="/support/tickets/detail" className="stretched-link h-100 d-flex body-link align-items-center">
                    1955
                  </NavLink>
                </Col>
                <Col xs="12" md="6" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-muted text-small d-md-none">Title</div>
                  <div className="text-body">Api documentation</div>
                </Col>
                <Col xs="12" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-muted text-small d-md-none">Category</div>
                  <div className="text-body">Api</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 order-md-5">
                  <div className="text-muted text-small d-md-none">Status</div>
                  <div>
                    <Badge bg="outline-muted">SOLVED</Badge>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          {/* List Items End */}
        </div>
        {/* Pagination Start */}
        <div className="d-flex justify-content-center">
          <Pagination>
            <Pagination.Prev className="shadow" disabled>
              <CsLineIcons icon="chevron-left" />
            </Pagination.Prev>
            <Pagination.Item className="shadow" active>
              1
            </Pagination.Item>
            <Pagination.Item className="shadow">2</Pagination.Item>
            <Pagination.Item className="shadow">3</Pagination.Item>
            <Pagination.Next className="shadow">
              <CsLineIcons icon="chevron-right" />
            </Pagination.Next>
          </Pagination>
        </div>
        {/* Pagination End */}
      </Col>
    </>
  );
};

export default SupportTickets;

import React, { useState } from 'react';
import { Row, Col, Dropdown, Button, OverlayTrigger, Form, Tooltip, Card, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import CheckAll from 'components/check-all/CheckAll';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import ChartSmallDoughnutChart1 from './components/ChartSmallDoughnutChart1';
import ChartSmallDoughnutChart2 from './components/ChartSmallDoughnutChart2';
import ChartSmallDoughnutChart3 from './components/ChartSmallDoughnutChart3';
import ChartSmallDoughnutChart4 from './components/ChartSmallDoughnutChart4';

const ServicesDatabase = () => {
  const title = 'Database';
  const description = 'Service Provider Database';

  const allItems = [1, 2, 3, 4, 5];
  const [selectedItems, setSelectedItems] = useState([]);
  const checkItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((x) => x !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };
  const toggleCheckAll = (allSelect) => {
    if (allSelect) {
      setSelectedItems(allItems);
    } else {
      setSelectedItems([]);
    }
  };
  return (
    <>
      <HtmlHead title={title} description={description} />
      <Col>
        {/* Title Start */}
        <div className="page-title-container mb-3">
          <Row>
            <Col className="mb-2">
              <h1 className="mb-2 pb-0 display-4">{title}</h1>
              <div className="text-muted font-heading text-small">Cotton candy gummi bears chocolate candy canes.</div>
            </Col>
            <Col xs="12" sm="auto" className="d-flex align-items-center justify-content-end">
              <NavLink to="/services/database/add" className="btn btn-outline-primary btn-icon btn-icon-start ms-0 ms-sm-1 w-100 w-md-auto">
                <CsLineIcons icon="plus" /> <span>Add New</span>
              </NavLink>
              <div className="btn-group ms-1 check-all-container">
                <CheckAll
                  allItems={allItems}
                  selectedItems={selectedItems}
                  onToggle={toggleCheckAll}
                  inputClassName="form-check"
                  className="btn btn-outline-primary btn-custom-control py-0"
                />
                <Dropdown align="end">
                  <Dropdown.Toggle className="dropdown-toggle dropdown-toggle-split" variant="outline-primary" />
                  <Dropdown.Menu>
                    <Dropdown.Item>Move</Dropdown.Item>
                    <Dropdown.Item>Archive</Dropdown.Item>
                    <Dropdown.Item>Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
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
            <Col md="3" className="d-flex flex-column mb-lg-0 pe-3 d-flex">
              <div className="text-muted text-small cursor-pointer sort">IP</div>
            </Col>
            <Col md="3" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-small cursor-pointer sort">NAME</div>
            </Col>
            <Col md="3" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-small cursor-pointer sort">TYPE</div>
            </Col>
            <Col md="2" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-small cursor-pointer sort">STATUS</div>
            </Col>
          </Row>
          {/* List Header End */}

          {/* List Items Start */}
          <Card className={`mb-2 ${selectedItems.includes(1) && 'selected'}`}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-7">
              <Row className="g-0 h-100 align-content-center cursor-default" onClick={() => checkItem(1)}>
                <Col xs="11" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <div className="text-muted text-small d-md-none">Ip</div>
                  <NavLink to="/services/database/detail" className="text-truncate h-100 d-flex align-items-center">
                    116.41.118.8
                  </NavLink>
                </Col>
                <Col xs="6" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-muted text-small d-md-none">Name</div>
                  <div className="text-alternate">Production 1</div>
                </Col>
                <Col xs="6" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-muted text-small d-md-none">Type</div>
                  <div className="text-alternate">Mongodb</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-muted text-small d-md-none">Status</div>
                  <div>
                    <Badge bg="outline-primary">ACTIVE</Badge>
                  </div>
                </Col>
                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
                  <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(1)} onChange={() => {}} />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className={`mb-2 ${selectedItems.includes(2) && 'selected'}`}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-7">
              <Row className="g-0 h-100 align-content-center cursor-default" onClick={() => checkItem(2)}>
                <Col xs="11" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <div className="text-muted text-small d-md-none">Ip</div>
                  <NavLink to="/services/database/detail" className="text-truncate h-100 d-flex align-items-center">
                    116.41.118.9
                  </NavLink>
                </Col>
                <Col xs="6" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-muted text-small d-md-none">Name</div>
                  <div className="text-alternate">Production 2</div>
                </Col>
                <Col xs="6" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-muted text-small d-md-none">Type</div>
                  <div className="text-alternate">Mongodb</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-muted text-small d-md-none">Status</div>
                  <div>
                    <Badge bg="outline-primary">ACTIVE</Badge>
                  </div>
                </Col>
                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
                  <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(2)} onChange={() => {}} />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className={`mb-2 ${selectedItems.includes(3) && 'selected'}`}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-7">
              <Row className="g-0 h-100 align-content-center cursor-default" onClick={() => checkItem(3)}>
                <Col xs="11" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <div className="text-muted text-small d-md-none">Ip</div>
                  <NavLink to="/services/database/detail" className="text-truncate h-100 d-flex align-items-center">
                    74.21.49.144
                  </NavLink>
                </Col>
                <Col xs="6" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-muted text-small d-md-none">Name</div>
                  <div className="text-alternate">Sandbox</div>
                </Col>
                <Col xs="6" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-muted text-small d-md-none">Type</div>
                  <div className="text-alternate">Mongodb</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-muted text-small d-md-none">Status</div>
                  <div>
                    <Badge bg="outline-muted">INACTIVE</Badge>
                  </div>
                </Col>
                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
                  <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(3)} onChange={() => {}} />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className={`mb-2 ${selectedItems.includes(4) && 'selected'}`}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-7">
              <Row className="g-0 h-100 align-content-center cursor-default" onClick={() => checkItem(4)}>
                <Col xs="11" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <div className="text-muted text-small d-md-none">Ip</div>
                  <NavLink to="/services/database/detail" className="text-truncate h-100 d-flex align-items-center">
                    227.191.45.88
                  </NavLink>
                </Col>
                <Col xs="6" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-muted text-small d-md-none">Name</div>
                  <div className="text-alternate">Test</div>
                </Col>
                <Col xs="6" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-muted text-small d-md-none">Type</div>
                  <div className="text-alternate">Mongodb</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-muted text-small d-md-none">Status</div>
                  <div>
                    <Badge bg="outline-muted">INACTIVE</Badge>
                  </div>
                </Col>
                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
                  <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(4)} onChange={() => {}} />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className={`mb-2 ${selectedItems.includes(5) && 'selected'}`}>
            <Card.Body className="pt-0 pb-0 sh-21 sh-md-7">
              <Row className="g-0 h-100 align-content-center cursor-default" onClick={() => checkItem(5)}>
                <Col xs="11" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
                  <div className="text-muted text-small d-md-none">Ip</div>
                  <NavLink to="/services/database/detail" className="text-truncate h-100 d-flex align-items-center">
                    74.21.49.144
                  </NavLink>
                </Col>
                <Col xs="6" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
                  <div className="text-muted text-small d-md-none">Name</div>
                  <div className="text-alternate">Public</div>
                </Col>
                <Col xs="6" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
                  <div className="text-muted text-small d-md-none">Type</div>
                  <div className="text-alternate">Mongodb</div>
                </Col>
                <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
                  <div className="text-muted text-small d-md-none">Status</div>
                  <div>
                    <Badge bg="outline-muted">CLOSED</Badge>
                  </div>
                </Col>
                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
                  <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(5)} onChange={() => {}} />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          {/* List Items End */}
        </div>

        <Row className="mb-n5">
          {/* Stats Start */}
          <Col xl="6" className="mb-5">
            <h2 className="small-title">Stats</h2>
            <Row className="g-2">
              <Col md="6">
                <Card className="sh-14">
                  <Card.Body className="py-0 d-flex align-items-center">
                    <ChartSmallDoughnutChart1 />
                  </Card.Body>
                </Card>
              </Col>
              <Col md="6">
                <Card className="sh-14">
                  <Card.Body className="py-0 d-flex align-items-center">
                    <ChartSmallDoughnutChart2 />
                  </Card.Body>
                </Card>
              </Col>
              <Col md="6">
                <Card className="sh-14">
                  <Card.Body className="py-0 d-flex align-items-center">
                    <ChartSmallDoughnutChart3 />
                  </Card.Body>
                </Card>
              </Col>
              <Col md="6">
                <Card className="sh-14">
                  <Card.Body className="py-0 d-flex align-items-center">
                    <ChartSmallDoughnutChart4 />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          {/* Stats End */}

          {/* Quick Add Start */}
          <Col className="mb-5">
            <h2 className="small-title">Quick Add</h2>
            <Card className="h-100-card">
              <Card.Body>
                <Form>
                  <div className="mb-3 filled">
                    <CsLineIcons icon="tag" />
                    <Form.Control type="text" placeholder="Title" />
                  </div>
                  <div className="mb-3 filled">
                    <CsLineIcons icon="server" />
                    <Form.Control type="text" placeholder="Type" />
                  </div>
                  <Button variant="outline-primary" className="btn-icon btn-icon-start">
                    <CsLineIcons icon="plus" /> <span>Add</span>
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          {/* Quick Add End */}
        </Row>
      </Col>
    </>
  );
};

export default ServicesDatabase;

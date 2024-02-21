import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Button, Dropdown, Form, Card, Pagination, Tooltip, OverlayTrigger } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import CheckAll from 'components/check-all/CheckAll';

const CustomersList = () => {
  const title = 'Customer List';
  const description = 'Ecommerce Customer List Page';

  const allItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-3 mb-sm-0 me-auto">
            <NavLink className="muted-link pb-1 d-inline-block hidden breadcrumb-back" to="/">
              <CsLineIcons icon="chevron-left" size="13" />
              <span className="align-middle text-small ms-1">Home</span>
            </NavLink>
            <h1 className="mb-0 pb-0 display-4" id="title">
              {title}
            </h1>
          </Col>
          {/* Title End */}

          {/* Top Buttons Start */}
          <Col xs="auto" className="d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
            <Button variant="outline-primary" className="btn-icon btn-icon-only ms-1 d-inline-block d-lg-none">
              <CsLineIcons icon="sort" />
            </Button>
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
          {/* Top Buttons End */}
        </Row>
      </div>

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
          {/* Print Button Start */}
          <OverlayTrigger delay={{ show: 1000, hide: 0 }} placement="top" overlay={<Tooltip id="tooltip-top">Print</Tooltip>}>
            <Button variant="foreground-alternate" className="btn-icon btn-icon-only shadow">
              <CsLineIcons icon="print" />
            </Button>
          </OverlayTrigger>
          {/* Print Button End */}

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

      {/* List Header Start */}
      <Row className="g-0 h-100 align-content-center d-none d-lg-flex ps-5 pe-5 mb-2 custom-sort">
        <Col lg="1" className="d-flex flex-column mb-lg-0 pe-3 d-flex">
          <div className="text-muted text-small cursor-pointer sort">ID</div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center">
          <div className="text-muted text-small cursor-pointer sort">NAME</div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center">
          <div className="text-muted text-small cursor-pointer sort">LOCATION</div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center">
          <div className="text-muted text-small cursor-pointer sort">SPENT</div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center">
          <div className="text-muted text-small cursor-pointer sort">LAST ORDER</div>
        </Col>
        <Col lg="2" className="d-flex flex-column pe-1 justify-content-center">
          <div className="text-muted text-small cursor-pointer sort">STATUS</div>
        </Col>
      </Row>
      {/* List Header End */}

      {/* List Items Start */}
      <Card className={`mb-2 ${selectedItems.includes(1) && 'selected'}`}>
        <Card.Body className="pt-0 pb-0 sh-30 sh-lg-8">
          <Row className="g-0 h-100 align-content-center" onClick={() => checkItem(1)}>
            <Col xs="11" lg="1" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 h-lg-100 position-relative">
              <div className="text-muted text-small d-lg-none">Id</div>
              <NavLink to="/customers/detail" className="text-truncate h-100 d-flex align-items-center">
                245
              </NavLink>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-2">
              <div className="text-muted text-small d-lg-none">Name</div>
              <div className="text-alternate">Joisse Kaycee</div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-3">
              <div className="text-muted text-small d-lg-none">Location</div>
              <div className="text-alternate">Leipzig, DE</div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4">
              <div className="text-muted text-small d-lg-none">Spent</div>
              <div className="text-alternate">
                <span>
                  <span className="text-small">$</span> 321.75
                </span>
              </div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-4">
              <div className="text-muted text-small d-lg-none">Last Order</div>
              <NavLink to="/customers/detail" className="text-truncate h-100 d-flex align-items-center body-link">
                5323
              </NavLink>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-last order-lg-5">
              <div className="text-muted text-small d-lg-none mb-1">Status</div>
              <div>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Newsletter</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="content" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Purchased</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="boxes" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Trusted</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="check-square" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Phone</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="phone" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
              </div>
            </Col>
            <Col xs="1" lg="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
              <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(1)} onChange={() => {}} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className={`mb-2 ${selectedItems.includes(2) && 'selected'}`}>
        <Card.Body className="pt-0 pb-0 sh-30 sh-lg-8">
          <Row className="g-0 h-100 align-content-center" onClick={() => checkItem(2)}>
            <Col xs="11" lg="1" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 h-lg-100 position-relative">
              <div className="text-muted text-small d-lg-none">Id</div>
              <NavLink to="/customers/detail" className="text-truncate h-100 d-flex align-items-center">
                244
              </NavLink>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-2">
              <div className="text-muted text-small d-lg-none">Name</div>
              <div className="text-alternate">Kathleen Bertha</div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-3">
              <div className="text-muted text-small d-lg-none">Location</div>
              <div className="text-alternate">Salvador, BR</div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4">
              <div className="text-muted text-small d-lg-none">Spent</div>
              <div className="text-alternate">
                <span>
                  <span className="text-small">$</span> 284.20
                </span>
              </div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-4">
              <div className="text-muted text-small d-lg-none">Last Order</div>
              <NavLink to="/customers/detail" className="text-truncate h-100 d-flex align-items-center body-link">
                608
              </NavLink>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-last order-lg-5">
              <div className="text-muted text-small d-lg-none mb-1">Status</div>
              <div>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Newsletter</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="content" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Purchased</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="boxes" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Trusted</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="check-square" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Phone</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="phone" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
              </div>
            </Col>
            <Col xs="1" lg="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
              <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(2)} onChange={() => {}} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className={`mb-2 ${selectedItems.includes(3) && 'selected'}`}>
        <Card.Body className="pt-0 pb-0 sh-30 sh-lg-8">
          <Row className="g-0 h-100 align-content-center" onClick={() => checkItem(3)}>
            <Col xs="11" lg="1" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 h-lg-100 position-relative">
              <div className="text-muted text-small d-lg-none">Id</div>
              <NavLink to="/customers/detail" className="text-truncate h-100 d-flex align-items-center">
                243
              </NavLink>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-2">
              <div className="text-muted text-small d-lg-none">Name</div>
              <div className="text-alternate">Mickey Fianna</div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-3">
              <div className="text-muted text-small d-lg-none">Location</div>
              <div className="text-alternate">San Antonio, US</div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4">
              <div className="text-muted text-small d-lg-none">Spent</div>
              <div className="text-alternate">-</div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-4">
              <div className="text-muted text-small d-lg-none">Last Order</div>
              <NavLink to="/customers/detail" className="text-truncate h-100 d-flex align-items-center body-link">
                -
              </NavLink>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-last order-lg-5">
              <div className="text-muted text-small d-lg-none mb-1">Status</div>
              <div>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Newsletter</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="content" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Purchased</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="boxes" className="text-separator" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Trusted</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="check-square" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Phone</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="phone" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
              </div>
            </Col>
            <Col xs="1" lg="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
              <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(3)} onChange={() => {}} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className={`mb-2 ${selectedItems.includes(4) && 'selected'}`}>
        <Card.Body className="pt-0 pb-0 sh-30 sh-lg-8">
          <Row className="g-0 h-100 align-content-center" onClick={() => checkItem(4)}>
            <Col xs="11" lg="1" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 h-lg-100 position-relative">
              <div className="text-muted text-small d-lg-none">Id</div>
              <NavLink to="/customers/detail" className="text-truncate h-100 d-flex align-items-center">
                242
              </NavLink>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-2">
              <div className="text-muted text-small d-lg-none">Name</div>
              <div className="text-alternate">Emilia Antoine</div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-3">
              <div className="text-muted text-small d-lg-none">Location</div>
              <div className="text-alternate">Los Angeles, US</div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4">
              <div className="text-muted text-small d-lg-none">Spent</div>
              <div className="text-alternate">-</div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-4">
              <div className="text-muted text-small d-lg-none">Last Order</div>
              <NavLink to="/customers/detail" className="text-truncate h-100 d-flex align-items-center body-link">
                -
              </NavLink>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-last order-lg-5">
              <div className="text-muted text-small d-lg-none mb-1">Status</div>
              <div>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Newsletter</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="content" className="text-separator" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Purchased</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="boxes" className="text-separator" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Trusted</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="check-square" className="text-separator" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Phone</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="phone" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
              </div>
            </Col>
            <Col xs="1" lg="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
              <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(4)} onChange={() => {}} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className={`mb-2 ${selectedItems.includes(5) && 'selected'}`}>
        <Card.Body className="pt-0 pb-0 sh-30 sh-lg-8">
          <Row className="g-0 h-100 align-content-center" onClick={() => checkItem(5)}>
            <Col xs="11" lg="1" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 h-lg-100 position-relative">
              <div className="text-muted text-small d-lg-none">Id</div>
              <NavLink to="/customers/detail" className="text-truncate h-100 d-flex align-items-center">
                242
              </NavLink>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-2">
              <div className="text-muted text-small d-lg-none">Name</div>
              <div className="text-alternate">Alicia Shannah</div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-3">
              <div className="text-muted text-small d-lg-none">Location</div>
              <div className="text-alternate">Stuttgart, DE</div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4">
              <div className="text-muted text-small d-lg-none">Spent</div>
              <div className="text-alternate">
                <span>
                  <span className="text-small">$</span> 29.30
                </span>
              </div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-4">
              <div className="text-muted text-small d-lg-none">Last Order</div>
              <NavLink to="/customers/detail" className="text-truncate h-100 d-flex align-items-center body-link">
                5321
              </NavLink>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-last order-lg-5">
              <div className="text-muted text-small d-lg-none mb-1">Status</div>
              <div>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Newsletter</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="content" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Purchased</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="boxes" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Trusted</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="check-square" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Phone</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="phone" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
              </div>
            </Col>
            <Col xs="1" lg="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
              <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(5)} onChange={() => {}} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className={`mb-2 ${selectedItems.includes(6) && 'selected'}`}>
        <Card.Body className="pt-0 pb-0 sh-30 sh-lg-8">
          <Row className="g-0 h-100 align-content-center" onClick={() => checkItem(6)}>
            <Col xs="11" lg="1" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 h-lg-100 position-relative">
              <div className="text-muted text-small d-lg-none">Id</div>
              <NavLink to="/customers/detail" className="text-truncate h-100 d-flex align-items-center">
                242
              </NavLink>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-2">
              <div className="text-muted text-small d-lg-none">Name</div>
              <div className="text-alternate">Sixte Tera</div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-3">
              <div className="text-muted text-small d-lg-none">Location</div>
              <div className="text-alternate">Berlin, DE</div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4">
              <div className="text-muted text-small d-lg-none">Spent</div>
              <div className="text-alternate">
                <span>
                  <span className="text-small">$</span> 462.20
                </span>
              </div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-4">
              <div className="text-muted text-small d-lg-none">Last Order</div>
              <NavLink to="/customers/detail" className="text-truncate h-100 d-flex align-items-center body-link">
                5320
              </NavLink>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-last order-lg-5">
              <div className="text-muted text-small d-lg-none mb-1">Status</div>
              <div>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Newsletter</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="content" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Purchased</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="boxes" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Trusted</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="check-square" className="text-separator" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Phone</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="phone" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
              </div>
            </Col>
            <Col xs="1" lg="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
              <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(6)} onChange={() => {}} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className={`mb-2 ${selectedItems.includes(7) && 'selected'}`}>
        <Card.Body className="pt-0 pb-0 sh-30 sh-lg-8">
          <Row className="g-0 h-100 align-content-center" onClick={() => checkItem(7)}>
            <Col xs="11" lg="1" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 h-lg-100 position-relative">
              <div className="text-muted text-small d-lg-none">Id</div>
              <NavLink to="/customers/detail" className="text-truncate h-100 d-flex align-items-center">
                239
              </NavLink>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-2">
              <div className="text-muted text-small d-lg-none">Name</div>
              <div className="text-alternate">Gresham Jeanette</div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-3">
              <div className="text-muted text-small d-lg-none">Location</div>
              <div className="text-alternate">Naples, IT</div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4">
              <div className="text-muted text-small d-lg-none">Spent</div>
              <div className="text-alternate">-</div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-4">
              <div className="text-muted text-small d-lg-none">Last Order</div>
              <NavLink to="/customers/detail" className="text-truncate h-100 d-flex align-items-center body-link">
                -
              </NavLink>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-last order-lg-5">
              <div className="text-muted text-small d-lg-none mb-1">Status</div>
              <div>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Newsletter</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="content" className="text-separator" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Purchased</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="boxes" className="text-separator" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Trusted</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="check-square" className="text-separator" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Phone</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="phone" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
              </div>
            </Col>
            <Col xs="1" lg="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
              <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(7)} onChange={() => {}} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className={`mb-2 ${selectedItems.includes(8) && 'selected'}`}>
        <Card.Body className="pt-0 pb-0 sh-30 sh-lg-8">
          <Row className="g-0 h-100 align-content-center" onClick={() => checkItem(8)}>
            <Col xs="11" lg="1" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 h-lg-100 position-relative">
              <div className="text-muted text-small d-lg-none">Id</div>
              <NavLink to="/customers/detail" className="text-truncate h-100 d-flex align-items-center">
                239
              </NavLink>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-2">
              <div className="text-muted text-small d-lg-none">Name</div>
              <div className="text-alternate">Elsie Pernilla</div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-3">
              <div className="text-muted text-small d-lg-none">Location</div>
              <div className="text-alternate">Paris, FR</div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4">
              <div className="text-muted text-small d-lg-none">Spent</div>
              <div className="text-alternate">
                <span>
                  <span className="text-small">$</span> 85.20
                </span>
              </div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-4">
              <div className="text-muted text-small d-lg-none">Last Order</div>
              <NavLink to="/customers/detail" className="text-truncate h-100 d-flex align-items-center body-link">
                5318
              </NavLink>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-last order-lg-5">
              <div className="text-muted text-small d-lg-none mb-1">Status</div>
              <div>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Newsletter</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="content" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Purchased</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="boxes" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Trusted</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="check-square" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Phone</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="phone" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
              </div>
            </Col>
            <Col xs="1" lg="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
              <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(8)} onChange={() => {}} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className={`mb-2 ${selectedItems.includes(9) && 'selected'}`}>
        <Card.Body className="pt-0 pb-0 sh-30 sh-lg-8">
          <Row className="g-0 h-100 align-content-center" onClick={() => checkItem(9)}>
            <Col xs="11" lg="1" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 h-lg-100 position-relative">
              <div className="text-muted text-small d-lg-none">Id</div>
              <NavLink to="/customers/detail" className="text-truncate h-100 d-flex align-items-center">
                237
              </NavLink>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-2">
              <div className="text-muted text-small d-lg-none">Name</div>
              <div className="text-alternate">Winry Rockbell</div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-3">
              <div className="text-muted text-small d-lg-none">Location</div>
              <div className="text-alternate">Seul, KR</div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4">
              <div className="text-muted text-small d-lg-none">Spent</div>
              <div className="text-alternate">
                <span>
                  <span className="text-small">$</span> 104.65
                </span>
              </div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-4">
              <div className="text-muted text-small d-lg-none">Last Order</div>
              <NavLink to="/customers/detail" className="text-truncate h-100 d-flex align-items-center body-link">
                5317
              </NavLink>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-last order-lg-5">
              <div className="text-muted text-small d-lg-none mb-1">Status</div>
              <div>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Newsletter</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="content" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Purchased</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="boxes" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Trusted</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="check-square" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Phone</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="phone" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
              </div>
            </Col>
            <Col xs="1" lg="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
              <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(9)} onChange={() => {}} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className={`mb-2 ${selectedItems.includes(10) && 'selected'}`}>
        <Card.Body className="pt-0 pb-0 sh-30 sh-lg-8">
          <Row className="g-0 h-100 align-content-center" onClick={() => checkItem(10)}>
            <Col xs="11" lg="1" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-1 order-lg-1 h-lg-100 position-relative">
              <div className="text-muted text-small d-lg-none">Id</div>
              <NavLink to="/customers/detail" className="text-truncate h-100 d-flex align-items-center">
                237
              </NavLink>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-3 order-lg-2">
              <div className="text-muted text-small d-lg-none">Name</div>
              <div className="text-alternate">Joisse Kaycee</div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-3">
              <div className="text-muted text-small d-lg-none">Location</div>
              <div className="text-alternate">Rome, IT</div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-4 order-lg-4">
              <div className="text-muted text-small d-lg-none">Spent</div>
              <div className="text-alternate">
                <span>
                  <span className="text-small">$</span> 72.50
                </span>
              </div>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-5 order-lg-4">
              <div className="text-muted text-small d-lg-none">Last Order</div>
              <NavLink to="/customers/detail" className="text-truncate h-100 d-flex align-items-center body-link">
                5316
              </NavLink>
            </Col>
            <Col xs="6" lg="2" className="d-flex flex-column justify-content-center mb-2 mb-lg-0 order-last order-lg-5">
              <div className="text-muted text-small d-lg-none mb-1">Status</div>
              <div>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Newsletter</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="content" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Purchased</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="boxes" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Trusted</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="check-square" className="text-separator" size="17" />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip id="tooltip-top">Phone</Tooltip>}>
                  <div className="d-inline-block me-2">
                    <CsLineIcons icon="phone" className="text-primary" size="17" />
                  </div>
                </OverlayTrigger>
              </div>
            </Col>
            <Col xs="1" lg="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
              <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(10)} onChange={() => {}} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* List Items End */}

      {/* Pagination Start */}
      <div className="d-flex justify-content-center mt-5">
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
    </>
  );
};

export default CustomersList;

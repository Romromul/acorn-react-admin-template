import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Button, Dropdown, Form, Card, Badge, Tooltip, OverlayTrigger, Modal } from 'react-bootstrap';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import CheckAll from 'components/check-all/CheckAll';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

const Discount = () => {
  const title = 'Discount';
  const description = 'Ecommerce Discount Page';

  const allItems = [1, 2, 3, 4];
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

  const [discountModal, setDiscountModal] = useState(false);

  const [discountType, setDiscountType] = useState({ value: 'Fixed Amount', label: 'Fixed Amount' });
  const options = [
    { value: 'Fixed Amount', label: 'Fixed Amount' },
    { value: 'Free Shipping', label: 'Free Shipping' },
    { value: 'Percentage', label: 'Percentage' },
  ];

  const [startDate, setStartDate] = useState(Date.parse('04 Dec 2021 00:12:00 GMT'));
  const [endDate, setEndDate] = useState(Date.parse('11 Dec 2021 00:12:00 GMT'));

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
          <Col xs="12" sm="auto" className="d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
            <Button variant="outline-primary" className="btn-icon btn-icon-start w-100 w-md-auto">
              <CsLineIcons icon="plus" /> <span>Add Discount</span>
            </Button>
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
        <Col md="2" className="d-flex flex-column mb-lg-0 pe-3 d-flex">
          <div className="text-muted text-small cursor-pointer sort">CODE</div>
        </Col>
        <Col md="2" className="d-flex flex-column pe-1 justify-content-center">
          <div className="text-muted text-small cursor-pointer sort">TYPE</div>
        </Col>
        <Col md="4" className="d-flex flex-column pe-1 justify-content-center">
          <div className="text-muted text-small cursor-pointer sort">DATE</div>
        </Col>
        <Col md="2" className="d-flex flex-column pe-1 justify-content-center">
          <div className="text-muted text-small cursor-pointer sort">USAGE</div>
        </Col>
        <Col md="1" className="d-flex flex-column pe-1 justify-content-center">
          <div className="text-muted text-small cursor-pointer sort">STATUS</div>
        </Col>
      </Row>
      {/* List Header End */}

      {/* List Items Start */}
      <Card className={`mb-2 ${selectedItems.includes(1) && 'selected'}`}>
        <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
          <Row className="g-0 h-100 align-content-center cursor-default">
            <Col xs="11" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
              <div className="text-muted text-small d-md-none">Code</div>
              <Button variant="link" className="p-0 text-truncate h-100 d-flex align-items-center" onClick={() => setDiscountModal(true)}>
                SUMMERSALE
              </Button>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
              <div className="text-muted text-small d-md-none">Type</div>
              <div className="text-alternate">Fixed Amount</div>
            </Col>
            <Col xs="6" md="4" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
              <div className="text-muted text-small d-md-none">Date</div>
              <div className="text-alternate">01.06.2021 - 01.07.2021</div>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
              <div className="text-muted text-small d-md-none">Usage</div>
              <div className="text-alternate">532/1000</div>
            </Col>
            <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
              <div className="text-muted text-small d-md-none">Status</div>
              <div>
                <Badge bg="outline-primary">ACTIVE</Badge>
              </div>
            </Col>
            <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
              <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(1)} onChange={() => checkItem(1)} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className={`mb-2 ${selectedItems.includes(2) && 'selected'}`}>
        <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
          <Row className="g-0 h-100 align-content-center cursor-default">
            <Col xs="11" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
              <div className="text-muted text-small d-md-none">Code</div>
              <Button variant="link" className="p-0 text-truncate h-100 d-flex align-items-center" onClick={() => setDiscountModal(true)}>
                15OFF
              </Button>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
              <div className="text-muted text-small d-md-none">Type</div>
              <div className="text-muted">Percentage</div>
            </Col>
            <Col xs="6" md="4" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
              <div className="text-muted text-small d-md-none">Date</div>
              <div className="text-muted">14.04.2021 - 21.04.2021</div>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
              <div className="text-muted text-small d-md-none">Usage</div>
              <div className="text-muted">4562</div>
            </Col>
            <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
              <div className="text-muted text-small d-md-none">Status</div>
              <div>
                <Badge bg="outline-muted">EXPIRED</Badge>
              </div>
            </Col>
            <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
              <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(2)} onChange={() => checkItem(2)} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className={`mb-2 ${selectedItems.includes(3) && 'selected'}`}>
        <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
          <Row className="g-0 h-100 align-content-center cursor-default">
            <Col xs="11" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
              <div className="text-muted text-small d-md-none">Code</div>
              <Button variant="link" className="p-0 text-truncate h-100 d-flex align-items-center" onClick={() => setDiscountModal(true)}>
                25OFF
              </Button>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
              <div className="text-muted text-small d-md-none">Type</div>
              <div className="text-muted">Percentage</div>
            </Col>
            <Col xs="6" md="4" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
              <div className="text-muted text-small d-md-none">Date</div>
              <div className="text-muted">01.02.2021 - 01.03.2021</div>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
              <div className="text-muted text-small d-md-none">Usage</div>
              <div className="text-muted">792</div>
            </Col>
            <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
              <div className="text-muted text-small d-md-none">Status</div>
              <div>
                <Badge bg="outline-muted">EXPIRED</Badge>
              </div>
            </Col>
            <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
              <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(3)} onChange={() => checkItem(3)} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className={`mb-2 ${selectedItems.includes(4) && 'selected'}`}>
        <Card.Body className="pt-0 pb-0 sh-21 sh-md-8">
          <Row className="g-0 h-100 align-content-center cursor-default">
            <Col xs="11" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-1 order-md-1 h-md-100 position-relative">
              <div className="text-muted text-small d-md-none">Code</div>
              <Button variant="link" className="p-0 text-truncate h-100 d-flex align-items-center" onClick={() => setDiscountModal(true)}>
                NEWYEAR
              </Button>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3 order-md-2">
              <div className="text-muted text-small d-md-none">Type</div>
              <div className="text-muted">Percentage</div>
            </Col>
            <Col xs="6" md="4" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-4 order-md-3">
              <div className="text-muted text-small d-md-none">Date</div>
              <div className="text-muted">21.12.2020 - 07.01.2021</div>
            </Col>
            <Col xs="6" md="2" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-5 order-md-4">
              <div className="text-muted text-small d-md-none">Usage</div>
              <div className="text-muted">3814/5000</div>
            </Col>
            <Col xs="6" md="1" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-last order-md-5">
              <div className="text-muted text-small d-md-none">Status</div>
              <div>
                <Badge bg="outline-muted">EXPIRED</Badge>
              </div>
            </Col>
            <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end mb-2 mb-md-0 order-2 text-end order-md-last">
              <Form.Check className="form-check mt-2 ps-5 ps-md-2" type="checkbox" checked={selectedItems.includes(4)} onChange={() => checkItem(4)} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* List Items End */}

      {/* Discount Detail Modal Start */}
      <Modal className="modal-right scroll-out-negative" show={discountModal} onHide={() => setDiscountModal(false)} scrollable dialogClassName="full">
        <Modal.Header closeButton>
          <Modal.Title as="h5">Discount Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OverlayScrollbarsComponent options={{ overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="scroll-track-visible">
            <Form>
              <div className="mb-3">
                <Form.Label>Code</Form.Label>
                <Form.Control type="text" defaultValue="SUMMERSALE" />
              </div>
              <div className="mb-3">
                <Form.Label>Type</Form.Label>
                <Select classNamePrefix="react-select" options={options} value={discountType} onChange={setDiscountType} placeholder="" />
              </div>
              <div className="mb-3">
                <Form.Label>Start</Form.Label>
                <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>
              <div className="mb-3">
                <Form.Label>End</Form.Label>
                <DatePicker className="form-control" selected={endDate} onChange={(date) => setEndDate(date)} />
              </div>
              <div className="mb-3">
                <Form.Label>Limit</Form.Label>
                <Form.Control type="text" defaultValue="5000" />
              </div>
              <div className="mb-3">
                <Form.Label>Usage</Form.Label>
                <Form.Control type="text" defaultValue="2723" readOnly />
              </div>
            </Form>
          </OverlayScrollbarsComponent>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button variant="outline-primary" className="btn-icon btn-icon-only ">
            <CsLineIcons icon="bin" />
          </Button>
          <Button variant="primary" className="btn-icon btn-icon-start">
            <CsLineIcons icon="save" /> <span>Save</span>
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Discount Detail Modal End */}
    </>
  );
};

export default Discount;

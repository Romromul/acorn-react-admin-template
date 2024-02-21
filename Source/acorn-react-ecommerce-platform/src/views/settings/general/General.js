import React, { useState } from 'react';
import { Row, Col, Button, Form, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Select from 'react-select';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const General = () => {
  const title = 'Settings General';
  const description = 'Ecommerce Settings General Page';

  const [locationValue, setLocationValue] = useState({ value: 'JP', label: 'JP' });
  const locationOptions = [
    { value: 'BR', label: 'BR' },
    { value: 'DE', label: 'DE' },
    { value: 'FR', label: 'FR' },
    { value: 'JP', label: 'JP' },
    { value: 'US', label: 'US' },
    { value: 'UK', label: 'UK' },
  ];

  const [countryValue, setCountryValue] = useState({ value: 'Japan', label: 'Japan' });
  const countryOptions = [
    { value: 'Brazil', label: 'Brazil' },
    { value: 'Deutschland', label: 'Deutschland' },
    { value: 'France', label: 'France' },
    { value: 'Japan', label: 'Japan' },
    { value: 'United States of America', label: 'United States of America' },
    { value: 'United Kingdom', label: 'United Kingdom' },
  ];

  const [currencyValue, setCurrencyValue] = useState({ value: '¥', label: '¥' });
  const currencyOptions = [
    { value: 'R$', label: 'R$' },
    { value: '€', label: '€' },
    { value: '¥', label: '¥' },
    { value: '$', label: '$' },
    { value: '£', label: '£' },
  ];
  return (
    <>
      <HtmlHead title={title} description={description} />
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-3 mb-sm-0 me-auto">
            <NavLink className="muted-link pb-1 d-inline-block hidden breadcrumb-back" to="/settings">
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
              <CsLineIcons icon="save" /> <span>Save</span>
            </Button>
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>

      <Row>
        <Col xl="4">
          <h2 className="small-title">Details</h2>
          <Card className="mb-5">
            <Card.Body>
              <Form className="mb-n3">
                <div className="mb-3">
                  <Form.Label>Store Name</Form.Label>
                  <Form.Control type="text" defaultValue="My Awesome Store" />
                </div>
                <div className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" defaultValue="info@myawesomestore.com" disabled />
                </div>
                <div className="mb-3">
                  <Form.Label>Store Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    defaultValue="Dessert gummies soufflé toffee cake. Sesame snaps marzipan sesame snaps gummies oat cake sesame snaps. Cheesecake bonbon chocolate bar candy."
                  />
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col xl="8">
          {/* Location Start */}
          <h2 className="small-title">Location</h2>
          <Card className="mb-5">
            <Card.Body>
              <Form className="mb-n3">
                <div className="mb-3">
                  <Form.Label>Store Location</Form.Label>
                  <Select classNamePrefix="react-select" options={locationOptions} value={locationValue} onChange={setLocationValue} placeholder="" />
                </div>
                <div className="mb-3">
                  <Form.Label>Selling Location</Form.Label>
                  <Select classNamePrefix="react-select" options={locationOptions} value={locationValue} onChange={setLocationValue} placeholder="" />
                </div>
                <div className="mb-3">
                  <Form.Label>Shipping Location</Form.Label>
                  <Select classNamePrefix="react-select" options={locationOptions} value={locationValue} onChange={setLocationValue} placeholder="" />
                </div>
              </Form>
            </Card.Body>
          </Card>
          {/* Location End */}

          {/* Location Start */}
          <h2 className="small-title">Business</h2>
          <Card className="mb-5">
            <Card.Body>
              <Form className="mb-n3">
                <div className="mb-3">
                  <Form.Label>Store Location</Form.Label>
                  <Form.Control type="text" defaultValue="My Awesome Corp." />
                </div>
                <div className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" defaultValue="+643451134" />
                </div>
                <div className="mb-3">
                  <Form.Label>Country</Form.Label>
                  <Select classNamePrefix="react-select" options={countryOptions} value={countryValue} onChange={setCountryValue} placeholder="" />
                </div>
                <div className="mb-3">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control type="text" defaultValue="160-0023" />
                </div>
                <div className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" defaultValue="4 Chome-38-5 Nishishinjuku, Shinjuku City" />
                </div>
              </Form>
            </Card.Body>
          </Card>
          {/* Location End */}

          {/* Currency Options Start */}
          <h2 className="small-title">Currency Options</h2>
          <Card>
            <Card.Body>
              <Form className="mb-n3">
                <div className="mb-3">
                  <Form.Label>Currency</Form.Label>
                  <Select classNamePrefix="react-select" options={currencyOptions} value={currencyValue} onChange={setCurrencyValue} placeholder="" />
                </div>
                <div className="mb-3">
                  <Form.Label>Thousand Separator</Form.Label>
                  <Form.Control type="text" defaultValue="," />
                </div>
                <div className="mb-3">
                  <Form.Label>Decimal Separator</Form.Label>
                  <Form.Control type="text" defaultValue="." />
                </div>
                <div className="mb-3">
                  <Form.Label>Number of Decimals</Form.Label>
                  <Form.Control type="text" defaultValue="2" />
                </div>
              </Form>
            </Card.Body>
          </Card>
          {/* Currency Options End */}
        </Col>
      </Row>
    </>
  );
};

export default General;

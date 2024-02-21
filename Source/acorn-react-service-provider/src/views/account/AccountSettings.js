import React, { useState, useRef } from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import Select from 'react-select';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const AccountSettings = () => {
  const title = 'Settings';
  const description = 'Service Provider Settings';
  const refFileUpload = useRef(null);
  const [thumb, setThumb] = useState('/img/profile/profile-1.webp');

  const onThumbChangeClick = () => {
    if (refFileUpload) {
      refFileUpload.current.dispatchEvent(new MouseEvent('click'));
    }
  };
  const changeThumb = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        setThumb(loadEvent.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' },
  ];
  const [genderValue, setGenderValue] = useState(genderOptions[1]);

  const languageOptions = [
    { value: 'English', label: 'English' },
    { value: 'Español', label: 'Español' },
    { value: 'Français', label: 'Français' },
    { value: 'Deutsch', label: 'Deutsch' },
  ];
  const [languageValue, setLanguageValue] = useState(languageOptions[1]);
  return (
    <>
      <HtmlHead title={title} description={description} />
      <Col>
        {/* Title Start */}
        <div className="page-title-container mb-3">
          <Row>
            <Col className="mb-2">
              <h1 className="mb-2 pb-0 display-4">{title}</h1>
              <div className="text-muted font-heading text-small">Cake gummi bears caramels powder cotton candy.</div>
            </Col>
          </Row>
        </div>
        {/* Title End */}

        {/* Public Info Start */}
        <h2 className="small-title">Public Info</h2>
        <Card className="mb-5">
          <Card.Body>
            <Form className="d-flex flex-column">
              <div className="mb-3 mx-auto position-relative" id="imageUpload">
                <img src={thumb} alt="user" className="rounded-xl border border-separator-light border-4 sw-11 sh-11" id="contactThumbModal" />
                <Button
                  size="sm"
                  variant="separator-light"
                  className="btn-icon btn-icon-only position-absolute rounded-xl s-0 b-0"
                  onClick={onThumbChangeClick}
                >
                  <CsLineIcons icon="upload" className="text-alternate" />
                </Button>
                <Form.Control type="file" ref={refFileUpload} className="file-upload d-none" accept="image/*" onChange={changeThumb} />
              </div>
              <div className="mb-3 filled">
                <CsLineIcons icon="user" />
                <Form.Control type="text" placeholder="Name" defaultValue="Lisa Jackson" />
              </div>
              <div className="mb-3 filled">
                <CsLineIcons icon="tag" />
                <Form.Control type="text" placeholder="Username" defaultValue="lisajackson" />
              </div>
              <div className="mb-3 filled">
                <CsLineIcons icon="email" />
                <Form.Control type="email" placeholder="Email" defaultValue="lisajackson@gmail.com" />
              </div>
              <div className="mb-3 filled">
                <CsLineIcons icon="phone" />
                <Form.Control type="email" placeholder="Phone" defaultValue="+643452345" />
              </div>
              <div className="mb-3 filled">
                <CsLineIcons icon="gender" />
                <Select classNamePrefix="react-select" options={genderOptions} value={genderValue} onChange={setGenderValue} placeholder="Select" />
              </div>
            </Form>
            <Button variant="primary">Update</Button>
          </Card.Body>
        </Card>
        {/* Public Info End */}

        {/* Email Settings Start */}
        <h2 className="small-title">Email Settings</h2>
        <Card className="mb-5">
          <Card.Body>
            <Form className="d-flex flex-column">
              <div className="mb-3 filled custom-control-container">
                <CsLineIcons icon="shield" />
                <div className="form-check form-switch">
                  <input type="checkbox" className="form-check-input" id="securityCheck" defaultChecked />
                  <label className="form-check-label" htmlFor="securityCheck">
                    Security Warnings
                  </label>
                </div>
              </div>
              <div className="mb-3 filled custom-control-container">
                <CsLineIcons icon="money" />
                <div className="form-check form-switch">
                  <input type="checkbox" className="form-check-input" id="budgetCheck" defaultChecked />
                  <label className="form-check-label" htmlFor="budgetCheck">
                    Over Budget
                  </label>
                </div>
              </div>
              <div className="mb-3 filled custom-control-container">
                <CsLineIcons icon="server" />
                <div className="form-check form-switch">
                  <input type="checkbox" className="form-check-input" id="quotaCheck" defaultChecked />
                  <label className="form-check-label" htmlFor="quotaCheck">
                    Quota Warnings
                  </label>
                </div>
              </div>
              <div className="mb-3 filled custom-control-container">
                <CsLineIcons icon="bell" />
                <div className="form-check form-switch">
                  <input type="checkbox" className="form-check-input" id="generalCheck" />
                  <label className="form-check-label" htmlFor="generalCheck">
                    General Notifications
                  </label>
                </div>
              </div>
              <div className="mb-3 filled custom-control-container">
                <CsLineIcons icon="news" />
                <div className="form-check form-switch">
                  <input type="checkbox" className="form-check-input" id="newsletterCheck" />
                  <label className="form-check-label" htmlFor="newsletterCheck">
                    Monthly Newsletter
                  </label>
                </div>
              </div>
            </Form>
            <Button variant="primary">Update</Button>
          </Card.Body>
        </Card>
        {/* Email Settings End */}

        {/* Language Settings Start */}
        <h2 className="small-title">Language Settings</h2>
        <Card>
          <Card.Body>
            <Form className="d-flex flex-column">
              <div className="mb-3 filled">
                <CsLineIcons icon="web" />
                <Select classNamePrefix="react-select" options={languageOptions} value={languageValue} onChange={setLanguageValue} placeholder="Select" />
              </div>
            </Form>
            <Button variant="primary">Update</Button>
          </Card.Body>
        </Card>
        {/* Language Settings End */}
      </Col>
    </>
  );
};

export default AccountSettings;

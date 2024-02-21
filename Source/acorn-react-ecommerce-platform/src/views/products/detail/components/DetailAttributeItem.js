import React, { useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import ReactTags from 'react-tag-autocomplete';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const DetailAttributeItem = () => {
  // Tags
  const [tags, setTags] = useState([
    { id: 0, name: 'Whole Wheat' },
    { id: 1, name: 'Rye' },
    { id: 2, name: 'Sourdough' },
  ]);
  const onTagDelete = (i) => {
    const newTags = [...tags];
    newTags.splice(i, 1);
    setTags(newTags);
  };
  const onTagAddition = (tag) => {
    setTags(() => {
      return [...tags, tag];
    });
  };

  return (
    <div className="mb-n6 border-last-none">
      <div className="mb-3 pb-3 border-bottom border-separator-light">
        <Row className="gx-2">
          <Col md="auto" className="order-1">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input className="form-control w-100 sw-md-13" defaultValue="Type" />
            </div>
          </Col>
          <Col className="order-3 col-md">
            <div className="mb-0">
              <Form.Label>Values</Form.Label>
              <ReactTags tags={tags} allowNew onDelete={onTagDelete} onAddition={onTagAddition} placeholderText="" />
            </div>
          </Col>
          <Col xs="auto" className="order-2 order-md-4">
            <label className="d-block form-label">&nbsp;</label>
            <Button variant="outline-primary" className="btn-icon btn-icon-only mb-1">
              <CsLineIcons icon="bin" />
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DetailAttributeItem;

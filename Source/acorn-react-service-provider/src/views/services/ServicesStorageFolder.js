import React, { useState } from 'react';
import { Row, Col, Dropdown, Button, Form, Tooltip, OverlayTrigger, Card, Pagination, Modal, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import Dropzone, { defaultClassNames } from 'react-dropzone-uploader';
import HtmlHead from 'components/html-head/HtmlHead';
import DropzoneColumnPreview from 'components/dropzone/DropzoneColumnPreview';
import CheckAll from 'components/check-all/CheckAll';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import 'react-image-lightbox/style.css';
import 'react-dropzone-uploader/dist/styles.css';

const ServicesStorageFolder = () => {
  const title = 'Storage / Products';
  const description = 'Service Provider Storage Folder';

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

  const [detailModal, setDetailModal] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const getUploadParams = () => ({ url: 'https://httpbin.org/post' });
  const onChangeStatus = (fileWithMeta, status) => {
    console.log(fileWithMeta);
    console.log(status);
  };

  const history = useHistory();

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Col>
        {/* Title Start */}
        <div className="page-title-container mb-3">
          <Row>
            <Col className="mb-2">
              <h1 className="mb-2 pb-0 display-4">{title}</h1>
              <div className="text-muted font-heading text-small">Shortbread jujubes gingerbread sesame snaps carrot cake. </div>
            </Col>
            <Col xs="12" sm="auto" className="d-flex align-items-center justify-content-end">
              <Button
                variant="outline-primary"
                className="btn-icon btn-icon-only"
                onClick={() => {
                  history.goBack();
                }}
              >
                <CsLineIcons icon="arrow-top-left" />
              </Button>
              <Button variant="outline-primary" className="btn-icon ms-1 btn-icon-only">
                <CsLineIcons icon="folder" />
              </Button>
              <Button variant="outline-primary" className="btn-icon btn-icon-start ms-1 w-100 w-md-auto" onClick={() => setUploadModal(true)}>
                <CsLineIcons icon="upload" /> <span>Upload</span>
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
          <Row className="g-0 h-100 align-content-center d-none d-md-flex ps-4 pe-3 mb-2 custom-sort">
            <Col md="6" className="d-flex flex-column mb-lg-0 pe-3 d-flex">
              <div className="text-muted text-small cursor-pointer sort">NAME</div>
            </Col>
            <Col md="3" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-small cursor-pointer sort">DATE</div>
            </Col>
            <Col md="3" className="d-flex flex-column pe-1 justify-content-center">
              <div className="text-muted text-small cursor-pointer sort">SIZE</div>
            </Col>
          </Row>
          {/* List Header End */}

          {/* List Items Start */}

          <Card className={`mb-2 ${selectedItems.includes(1) && 'selected'}`}>
            <Card.Body className="py-0 ps-4 pe-3 sh-14 sh-md-6">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="11" md="6" className="d-flex flex-column justify-content-center mb-1 mb-md-0 h-md-100 position-relative">
                  <NavLink to="#" onClick={() => setDetailModal(true)} className="stretched-link body-link">
                    <CsLineIcons icon="image" className="me-2 text-alternate" size="17" /> <span className="ps-1 align-middle">234523_4236.webp</span>
                  </NavLink>
                </Col>
                <Col md="2" className="d-flex flex-column justify-content-center order-4 ms-5 ms-md-0">
                  <div className="text-alternate">192.8 KB</div>
                </Col>
                <Col md="3" className="d-flex flex-column justify-content-center order-3 ms-5 ms-md-0">
                  <div className="text-alternate">12.04.2021</div>
                </Col>
                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end order-2 text-end order-md-last">
                  <Form.Check
                    className="form-check mt-1 ps-4 ps-md-2"
                    type="checkbox"
                    checked={selectedItems.includes(1)}
                    onChange={() => {
                      checkItem(1);
                    }}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className={`mb-2 ${selectedItems.includes(2) && 'selected'}`}>
            <Card.Body className="py-0 ps-4 pe-3 sh-14 sh-md-6">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="11" md="6" className="d-flex flex-column justify-content-center mb-1 mb-md-0 h-md-100 position-relative">
                  <NavLink to="#" onClick={() => setDetailModal(true)} className="stretched-link body-link">
                    <CsLineIcons icon="image" className="me-2 text-alternate" size="17" /> <span className="ps-1 align-middle">234523_4237.webp</span>
                  </NavLink>
                </Col>
                <Col md="2" className="d-flex flex-column justify-content-center order-4 ms-5 ms-md-0">
                  <div className="text-alternate">661.7 KB</div>
                </Col>
                <Col md="3" className="d-flex flex-column justify-content-center order-3 ms-5 ms-md-0">
                  <div className="text-alternate">12.04.2021</div>
                </Col>
                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end order-2 text-end order-md-last">
                  <Form.Check
                    className="form-check mt-1 ps-4 ps-md-2"
                    type="checkbox"
                    checked={selectedItems.includes(2)}
                    onChange={() => {
                      checkItem(2);
                    }}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className={`mb-2 ${selectedItems.includes(3) && 'selected'}`}>
            <Card.Body className="py-0 ps-4 pe-3 sh-14 sh-md-6">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="11" md="6" className="d-flex flex-column justify-content-center mb-1 mb-md-0 h-md-100 position-relative">
                  <NavLink to="#" onClick={() => setDetailModal(true)} className="stretched-link body-link">
                    <CsLineIcons icon="image" className="me-2 text-alternate" size="17" /> <span className="ps-1 align-middle">234523_4238.webp</span>
                  </NavLink>
                </Col>
                <Col md="2" className="d-flex flex-column justify-content-center order-4 ms-5 ms-md-0">
                  <div className="text-alternate">435.3 KB</div>
                </Col>
                <Col md="3" className="d-flex flex-column justify-content-center order-3 ms-5 ms-md-0">
                  <div className="text-alternate">12.04.2021</div>
                </Col>
                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end order-2 text-end order-md-last">
                  <Form.Check
                    className="form-check mt-1 ps-4 ps-md-2"
                    type="checkbox"
                    checked={selectedItems.includes(3)}
                    onChange={() => {
                      checkItem(3);
                    }}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className={`mb-2 ${selectedItems.includes(4) && 'selected'}`}>
            <Card.Body className="py-0 ps-4 pe-3 sh-14 sh-md-6">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="11" md="6" className="d-flex flex-column justify-content-center mb-1 mb-md-0 h-md-100 position-relative">
                  <NavLink to="#" onClick={() => setDetailModal(true)} className="stretched-link body-link">
                    <CsLineIcons icon="image" className="me-2 text-alternate" size="17" /> <span className="ps-1 align-middle">234523_4239.webp</span>
                  </NavLink>
                </Col>
                <Col md="2" className="d-flex flex-column justify-content-center order-4 ms-5 ms-md-0">
                  <div className="text-alternate">238.5 KB</div>
                </Col>
                <Col md="3" className="d-flex flex-column justify-content-center order-3 ms-5 ms-md-0">
                  <div className="text-alternate">12.04.2021</div>
                </Col>
                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end order-2 text-end order-md-last">
                  <Form.Check
                    className="form-check mt-1 ps-4 ps-md-2"
                    type="checkbox"
                    checked={selectedItems.includes(4)}
                    onChange={() => {
                      checkItem(4);
                    }}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className={`mb-2 ${selectedItems.includes(5) && 'selected'}`}>
            <Card.Body className="py-0 ps-4 pe-3 sh-14 sh-md-6">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="11" md="6" className="d-flex flex-column justify-content-center mb-1 mb-md-0 h-md-100 position-relative">
                  <NavLink to="#" onClick={() => setDetailModal(true)} className="stretched-link body-link">
                    <CsLineIcons icon="image" className="me-2 text-alternate" size="17" /> <span className="ps-1 align-middle">234523_4240.webp</span>
                  </NavLink>
                </Col>
                <Col md="2" className="d-flex flex-column justify-content-center order-4 ms-5 ms-md-0">
                  <div className="text-alternate">423.5 KB</div>
                </Col>
                <Col md="3" className="d-flex flex-column justify-content-center order-3 ms-5 ms-md-0">
                  <div className="text-alternate">11.0 4.2021</div>
                </Col>
                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end order-2 text-end order-md-last">
                  <Form.Check
                    className="form-check mt-1 ps-4 ps-md-2"
                    type="checkbox"
                    checked={selectedItems.includes(5)}
                    onChange={() => {
                      checkItem(5);
                    }}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className={`mb-2 ${selectedItems.includes(6) && 'selected'}`}>
            <Card.Body className="py-0 ps-4 pe-3 sh-14 sh-md-6">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="11" md="6" className="d-flex flex-column justify-content-center mb-1 mb-md-0 h-md-100 position-relative">
                  <NavLink to="#" onClick={() => setDetailModal(true)} className="stretched-link body-link">
                    <CsLineIcons icon="image" className="me-2 text-alternate" size="17" /> <span className="ps-1 align-middle">234523_4241.webp</span>
                  </NavLink>
                </Col>
                <Col md="2" className="d-flex flex-column justify-content-center order-4 ms-5 ms-md-0">
                  <div className="text-alternate">351.0 KB</div>
                </Col>
                <Col md="3" className="d-flex flex-column justify-content-center order-3 ms-5 ms-md-0">
                  <div className="text-alternate">09.04.2021</div>
                </Col>
                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end order-2 text-end order-md-last">
                  <Form.Check
                    className="form-check mt-1 ps-4 ps-md-2"
                    type="checkbox"
                    checked={selectedItems.includes(6)}
                    onChange={() => {
                      checkItem(6);
                    }}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className={`mb-2 ${selectedItems.includes(7) && 'selected'}`}>
            <Card.Body className="py-0 ps-4 pe-3 sh-14 sh-md-6">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="11" md="6" className="d-flex flex-column justify-content-center mb-1 mb-md-0 h-md-100 position-relative">
                  <NavLink to="#" onClick={() => setDetailModal(true)} className="stretched-link body-link">
                    <CsLineIcons icon="image" className="me-2 text-alternate" size="17" /> <span className="ps-1 align-middle">234523_4242.webp</span>
                  </NavLink>
                </Col>
                <Col md="2" className="d-flex flex-column justify-content-center order-4 ms-5 ms-md-0">
                  <div className="text-alternate">154.0 KB</div>
                </Col>
                <Col md="3" className="d-flex flex-column justify-content-center order-3 ms-5 ms-md-0">
                  <div className="text-alternate">05.04.2021</div>
                </Col>
                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end order-2 text-end order-md-last">
                  <Form.Check
                    className="form-check mt-1 ps-4 ps-md-2"
                    type="checkbox"
                    checked={selectedItems.includes(7)}
                    onChange={() => {
                      checkItem(7);
                    }}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className={`mb-2 ${selectedItems.includes(8) && 'selected'}`}>
            <Card.Body className="py-0 ps-4 pe-3 sh-14 sh-md-6">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="11" md="6" className="d-flex flex-column justify-content-center mb-1 mb-md-0 h-md-100 position-relative">
                  <NavLink to="#" onClick={() => setDetailModal(true)} className="stretched-link body-link">
                    <CsLineIcons icon="image" className="me-2 text-alternate" size="17" /> <span className="ps-1 align-middle">234523_4243.webp</span>
                  </NavLink>
                </Col>
                <Col md="2" className="d-flex flex-column justify-content-center order-4 ms-5 ms-md-0">
                  <div className="text-alternate">442.3 KB</div>
                </Col>
                <Col md="3" className="d-flex flex-column justify-content-center order-3 ms-5 ms-md-0">
                  <div className="text-alternate">03.04.2021</div>
                </Col>
                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end order-2 text-end order-md-last">
                  <Form.Check
                    className="form-check mt-1 ps-4 ps-md-2"
                    type="checkbox"
                    checked={selectedItems.includes(8)}
                    onChange={() => {
                      checkItem(8);
                    }}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className={`mb-2 ${selectedItems.includes(9) && 'selected'}`}>
            <Card.Body className="py-0 ps-4 pe-3 sh-14 sh-md-6">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="11" md="6" className="d-flex flex-column justify-content-center mb-1 mb-md-0 h-md-100 position-relative">
                  <NavLink to="#" onClick={() => setDetailModal(true)} className="stretched-link body-link">
                    <CsLineIcons icon="image" className="me-2 text-alternate" size="17" /> <span className="ps-1 align-middle">234523_4244.webp</span>
                  </NavLink>
                </Col>
                <Col md="2" className="d-flex flex-column justify-content-center order-4 ms-5 ms-md-0">
                  <div className="text-alternate">322.7 KB</div>
                </Col>
                <Col md="3" className="d-flex flex-column justify-content-center order-3 ms-5 ms-md-0">
                  <div className="text-alternate">01.04.2021</div>
                </Col>
                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end order-2 text-end order-md-last">
                  <Form.Check
                    className="form-check mt-1 ps-4 ps-md-2"
                    type="checkbox"
                    checked={selectedItems.includes(9)}
                    onChange={() => {
                      checkItem(9);
                    }}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className={`mb-2 ${selectedItems.includes(10) && 'selected'}`}>
            <Card.Body className="py-0 ps-4 pe-3 sh-14 sh-md-6">
              <Row className="g-0 h-100 align-content-center cursor-default">
                <Col xs="11" md="6" className="d-flex flex-column justify-content-center mb-1 mb-md-0 h-md-100 position-relative">
                  <NavLink to="#" onClick={() => setDetailModal(true)} className="stretched-link body-link">
                    <CsLineIcons icon="image" className="me-2 text-alternate" size="17" /> <span className="ps-1 align-middle">234523_4245.webp</span>
                  </NavLink>
                </Col>
                <Col md="2" className="d-flex flex-column justify-content-center order-4 ms-5 ms-md-0">
                  <div className="text-alternate">258.0 KB</div>
                </Col>
                <Col md="3" className="d-flex flex-column justify-content-center order-3 ms-5 ms-md-0">
                  <div className="text-alternate">22.03.2021</div>
                </Col>
                <Col xs="1" md="1" className="d-flex flex-column justify-content-center align-items-md-end order-2 text-end order-md-last">
                  <Form.Check
                    className="form-check mt-1 ps-4 ps-md-2"
                    type="checkbox"
                    checked={selectedItems.includes(10)}
                    onChange={() => {
                      checkItem(10);
                    }}
                  />
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

        {/* Detail Modal Start */}
        <Modal className="modal-right" show={detailModal} onHide={() => setDetailModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title as="h5">234523_4239.webp</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src="/img/product/small/product-2.webp"
              onClick={() => setIsLightboxOpen(true)}
              className="img-fluid rounded-md mb-4 cursor-pointer"
              alt="cornbread"
            />
            <div className="mb-3">
              <div className="text-small text-muted">TITLE</div>
              <div>234523_4239.webp</div>
            </div>
            <div className="mb-3">
              <div className="text-small text-muted">PATH</div>
              <div>/img/uploads/storage/234523_4239.webp</div>
            </div>
            <div className="mb-3">
              <div className="text-small text-muted">CREATED</div>
              <div>12.05.2021 - 13:42</div>
            </div>
            <div className="mb-3">
              <div className="text-small text-muted">SIZE</div>
              <div>259 KB</div>
            </div>
            <div className="mb-3">
              <div className="text-small text-muted">TYPE</div>
              <div>Jpeg</div>
            </div>
            <div className="mb-3">
              <div className="text-small text-muted">RESOLUTION</div>
              <div>1920x1080</div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-primary" className="btn-icon btn-icon-only" onClick={() => setDetailModal(false)}>
              <CsLineIcons icon="bin" />
            </Button>
            <Button variant="outline-primary" className="btn-icon btn-icon-only" onClick={() => setDetailModal(false)}>
              <CsLineIcons icon="shortcut" />
            </Button>
            <Button className="btn-icon btn-icon-end" onClick={() => setDetailModal(false)}>
              <span>Use</span> <CsLineIcons icon="check-square" />
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Detail Modal End */}

        {/* Upload Modal Start */}
        <Modal className="modal-right large" show={uploadModal} onHide={() => setUploadModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title as="h5">Upload Files</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex">
            <Form className="w-100">
              <div className="filled h-100">
                <CsLineIcons icon="upload" />
                <Dropzone
                  getUploadParams={getUploadParams}
                  PreviewComponent={DropzoneColumnPreview}
                  submitButtonContent={null}
                  accept="image/*"
                  submitButtonDisabled
                  SubmitButtonComponent={null}
                  inputWithFilesContent={null}
                  onChangeStatus={onChangeStatus}
                  classNames={{
                    inputLabelWithFiles: defaultClassNames.inputLabel,
                    dropzone: `${defaultClassNames.dropzone} row g-2 row-cols-2 h-100 align-content-start`,
                  }}
                  inputContent="Drop Files"
                />
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-primary" className="btn-icon btn-icon-only" onClick={() => setDetailModal(false)}>
              <CsLineIcons icon="bin" />
            </Button>
            <Button variant="outline-primary" className="btn-icon btn-icon-only" onClick={() => setDetailModal(false)}>
              <CsLineIcons icon="shortcut" />
            </Button>
            <Button className="btn-icon btn-icon-end" onClick={() => setDetailModal(false)}>
              <span>Use</span> <CsLineIcons icon="check-square" />
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Upload Modal End */}

        {/* Detail Image Lightbox Start */}
        {isLightboxOpen && (
          <Lightbox
            mainSrc="/img/product/large/product-1.webp"
            wrapperClassName="rounded-lg"
            onCloseRequest={() => setIsLightboxOpen(false)}
            loader={<Spinner animation="border" />}
          />
        )}
        {/* Detail Image Lightbox End */}
      </Col>
    </>
  );
};

export default ServicesStorageFolder;

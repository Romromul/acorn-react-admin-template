import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Rating from 'react-rating';
import Select from 'react-select';
import Lightbox from 'react-image-lightbox';
import { Row, Col, Button, Dropdown, Card, Form, Spinner, ProgressBar, Badge } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import GlideGallery from 'components/carousel/GlideGallery';
import Clamp from 'components/clamp';
import 'react-image-lightbox/style.css';

const Detail = () => {
  const title = 'Product Details';
  const description = 'Ecommerce Storefront Detail Page';

  const galleyItems = [
    {
      large: '/img/product/large/product-1.webp',
      thumb: '/img/product/small/product-1.webp',
    },
    {
      large: '/img/product/large/product-2.webp',
      thumb: '/img/product/small/product-2.webp',
    },
    {
      large: '/img/product/large/product-3.webp',
      thumb: '/img/product/small/product-3.webp',
    },
    {
      large: '/img/product/large/product-4.webp',
      thumb: '/img/product/small/product-4.webp',
    },
    {
      large: '/img/product/large/product-5.webp',
      thumb: '/img/product/small/product-5.webp',
    },
  ];

  const [valueSize, setValueSize] = useState();
  const optionsSize = [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
  ];

  const [valueQuantity, setValueQuantity] = useState();
  const optionsQuantity = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
  ];

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <HtmlHead title={title} description={description} />
      <div className="page-title-container">
        <Row className="g-0">
          {/* Title Start */}
          <Col className="col-auto mb-3 mb-sm-0 me-auto">
            <NavLink className="muted-link pb-1 d-inline-block hidden breadcrumb-back" to="/storefront/home">
              <CsLineIcons icon="chevron-left" size="13" />
              <span className="align-middle text-small ms-1">Storefront</span>
            </NavLink>
            <h1 className="mb-0 pb-0 display-4" id="title">
              {title}
            </h1>
          </Col>
          {/* Title End */}

          {/* Top Buttons Start */}
          <Col xs="12" sm="auto" className="d-flex align-items-end justify-content-end mb-2 mb-sm-0 order-sm-3">
            <Button variant="outline-primary" className="btn-icon btn-icon-start w-100 w-md-auto">
              <CsLineIcons icon="edit-square" /> <span>Edit</span>
            </Button>
            <Dropdown className="ms-1" align="end">
              <Dropdown.Toggle className="btn-icon btn-icon-only dropdown-toggle-no-arrow" variant="outline-primary">
                <CsLineIcons icon="more-horizontal" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Move</Dropdown.Item>
                <Dropdown.Item>Unpublish</Dropdown.Item>
                <Dropdown.Item>Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          {/* Top Buttons End */}
        </Row>
      </div>

      {/* Product Start */}
      <Card className="mb-5">
        <Card.Body>
          <Row className="g-5">
            <Col xl="7" className="position-relative">
              <span className="badge rounded-pill bg-primary me-1 position-absolute e-n1 t-3 z-index-1 py-2 px-3">20% OFF</span>
              <GlideGallery>
                <GlideGallery.LargeItems>
                  {galleyItems.map((item, index) => (
                    <GlideGallery.Item key={`boxed.large.${index}`}>
                      <img
                        alt="detail"
                        src={item.large}
                        className="responsive border-0 rounded-md img-fluid mb-3 w-100 sh-35 sh-md-45 sh-xl-60"
                        onClick={() => openLightbox(index)}
                      />
                    </GlideGallery.Item>
                  ))}
                </GlideGallery.LargeItems>
                <GlideGallery.ThumbItems>
                  {galleyItems.map((item, index) => (
                    <GlideGallery.Item key={`boxed.thumb.${index}`}>
                      <img alt="thumb" src={item.thumb} className="responsive rounded-md img-fluid" />
                    </GlideGallery.Item>
                  ))}
                </GlideGallery.ThumbItems>
              </GlideGallery>
            </Col>
            <Col xl="5" className="sh-xl-60 d-flex flex-column justify-content-between">
              <div>
                <Button variant="link" className="mb-1 d-inline-block text-small p-0">
                  Whole Wheat
                </Button>
                <h4 className="mb-4">Carrot Cake Gingerbread</h4>
                <div className="h3">$ 25.20</div>
                <div>
                  <Rating
                    className="me-2"
                    initialRating={5}
                    readonly
                    emptySymbol={<i className="cs-star text-primary" />}
                    fullSymbol={<i className="cs-star-full text-primary" />}
                  />
                  <div className="text-muted d-inline-block text-small align-text-top">(25 Reviews)</div>
                </div>
                <p className="mt-2 mb-4">
                  Toffee croissant icing toffee. Sweet roll chupa chups marshmallow muffin liquorice chupa chups soufflé bonbon. Liquorice gummi bears cake
                  donut chocolate lollipop gummi bears. Cotton candy cupcake ice cream gummies dessert muffin chocolate jelly.
                </p>
                <Row className="mb-4 g-3">
                  <Col sm="auto" xs="12" className="mb-3 me-1">
                    <label className="fw-bold form-label">Color</label>
                    <div className="pt-1">
                      <Form.Check type="radio" label="Red" id="colorOption1" inline name="colorOption" />
                      <Form.Check type="radio" label="Blue" id="colorOption2" inline name="colorOption" />
                    </div>
                  </Col>
                  <Col xs="auto" className="mb-3 me-1">
                    <label className="fw-bold form-label">Size</label>
                    <Select
                      classNamePrefix="react-select"
                      className="sw-9"
                      isSearchable={false}
                      options={optionsSize}
                      value={valueSize}
                      onChange={setValueSize}
                      placeholder="Pick"
                    />
                  </Col>
                  <Col xs="auto" className="mb-3">
                    <label className="fw-bold form-label">Quantity</label>
                    <Select
                      classNamePrefix="react-select"
                      className="sw-9"
                      isSearchable={false}
                      options={optionsQuantity}
                      value={valueQuantity}
                      onChange={setValueQuantity}
                      placeholder="Pick"
                    />
                  </Col>
                </Row>
              </div>
              <div>
                <Button variant="outline-primary" className="btn-icon btn-icon-end mb-1">
                  <span>Purchase</span> <CsLineIcons icon="check" />
                </Button>{' '}
                <Button variant="primary" className="btn-icon btn-icon-end mb-1">
                  <span>Add to Cart</span> <CsLineIcons icon="cart" />
                </Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {/* Product End */}

      <Row>
        <Col xl="8" className="mb-5">
          {/* Product Details Start */}
          <h2 className="small-title">Product Details</h2>
          <Card className="mb-5">
            <Card.Body>
              <h6>Cookie Macaroon</h6>
              <p className="mb-4">
                Liquorice caramels apple pie chupa chups bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw. Pastry
                sweet roll carrot cake cake macaroon gingerbread cookie.Candy pie sweet roll biscuit marzipan. Chocolate bar candy canes macaroon liquorice
                danish biscuit biscuit.
              </p>
              <h6>Muffin</h6>
              <p className="mb-4">
                Tiramisu toffee brownie sweet roll sesame snaps halvah. Icing carrot cake cupcake gummi bears danish. Sesame snaps muffin macaroon tiramisu ice
                cream. Liquorice caramels apple pie chupa chups bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw.
                Pastry sweet roll carrot cake cake macaroon gingerbread cookie.
              </p>
              <h6>Liquorice</h6>
              <p className="mb-4">
                Snaps muffin macaroon tiramisu ice cream toffee carrot sesame tootsie roll.Brownie ice cream marshmallow topping. Icing liquorice oat cake
                caramels. Sugar plum gummi bears jujubes cookie jelly-o tootsie roll chocolate bar. Jujubes candy jelly-o topping lemon drops. Cupcake
                gingerbread cookie cookie lemon drops tootsie roll lollipop. Tiramisu toffee brownie sweet roll sesame snaps halvah. Icing carrot cake cupcake
                gummi bears danish.
              </p>
              <h6>Powder Cake</h6>
              <p className="mb-4">
                Sesame snaps brownie gummi bears tootsie roll caramels dragée. Powder cake gummies jelly beans toffee carrot cake bonbon powder muffin. Jujubes
                candy jelly-o topping lemon drops. Cupcake gingerbread cookie cookie lemon drops tootsie roll lollipop. Liquorice caramels apple pie chupa chups
                bonbon. Jelly-o candy apple pie sugar plum icing chocolate cake lollipop jujubes bear claw. Pastry sweet roll carrot cake cake macaroon
                gingerbread cookie.Carrot cake jelly-o lemon drops toffee tootsie roll. Brownie topping toffee apple pie apple pie. Wafer pudding chocolate bar
                pastry bear claw tart carrot cake lemon drops icing. Gingerbread toffee topping. Tootsie roll cotton candy muffin cheesecake liquorice sweet.
                Sugar plum tart tart marshmallow chocolate wafer apple pie candy canes. Chocolate cake biscuit donut cotton candy soufflé cake macaroon. Halvah
                chocolate cotton candy sweet roll jelly-o candy danish dragée. Apple pie cotton candy tiramisu biscuit cake muffin tootsie roll bear claw cake.
                Cupcake cake fruitcake.
              </p>
              <table className="table m-n2">
                <thead>
                  <tr>
                    <th scope="col" className="text-small text-uppercase text-muted">
                      CONTENT
                    </th>
                    <th scope="col" className="text-small text-uppercase text-muted">
                      AMOUNT
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Protein(g)</td>
                    <td>7.30</td>
                  </tr>
                  <tr>
                    <td>Thiamin(mg)</td>
                    <td>0.33</td>
                  </tr>
                  <tr>
                    <td>Niacin(mg)</td>
                    <td>1.6</td>
                  </tr>
                  <tr>
                    <td>Riboflavin(mg)</td>
                    <td>0.09</td>
                  </tr>
                  <tr>
                    <td>Iron(mg)</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Calcium(mg)</td>
                    <td>40</td>
                  </tr>
                  <tr>
                    <td>Energy(kcal)</td>
                    <td>216</td>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
          </Card>
          {/* Product Details End */}

          {/* Reviews Start */}
          <h2 className="small-title">Reviews</h2>
          <Card className="mb-5">
            <Card.Body>
              <Row className="mb-5">
                <Col xs="12" sm="auto" className="mb-3 mb-sm-0">
                  <div className="w-100 sw-sm-19 sw-md-23 border sh-16 rounded-md d-flex flex-column align-items-center justify-content-center">
                    <div className="cta-1 text-alternate mb-2">4.8</div>
                    <div>
                      <Rating
                        className="align-middle"
                        initialRating={5}
                        readonly
                        emptySymbol={<i className="cs-star text-primary" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                      <span className="text-muted"> (22)</span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <Row className="align-items-center">
                    <Col>
                      <ProgressBar className="progress-md" now={80} />
                    </Col>
                    <Col xs="auto" className="sw-20 text-end">
                      <span className="me-3 text-muted text-small">%80</span>
                      <Rating
                        className="align-middle"
                        initialRating={5}
                        readonly
                        emptySymbol={<i className="cs-star text-muted" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col>
                      <ProgressBar className="progress-md" now={10} />
                    </Col>
                    <Col xs="auto" className="sw-20 text-end">
                      <span className="me-3 text-muted text-small">%10</span>
                      <Rating
                        className="align-middle"
                        initialRating={4}
                        readonly
                        emptySymbol={<i className="cs-star text-muted" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col>
                      <ProgressBar className="progress-md" now={5} />
                    </Col>
                    <Col xs="auto" className="sw-20 text-end">
                      <span className="me-3 text-muted text-small">%5</span>
                      <Rating
                        className="align-middle"
                        initialRating={3}
                        readonly
                        emptySymbol={<i className="cs-star text-muted" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col>
                      <ProgressBar className="progress-md" now={0} />
                    </Col>
                    <Col xs="auto" className="sw-20 text-end">
                      <span className="me-3 text-muted text-small">%0</span>
                      <Rating
                        className="align-middle"
                        initialRating={2}
                        readonly
                        emptySymbol={<i className="cs-star text-muted" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                    </Col>
                  </Row>
                  <Row className="align-items-center">
                    <Col>
                      <ProgressBar className="progress-md" now={5} />
                    </Col>
                    <Col xs="auto" className="sw-20 text-end">
                      <span className="me-3 text-muted text-small">%5</span>
                      <Rating
                        className="align-middle"
                        initialRating={1}
                        readonly
                        emptySymbol={<i className="cs-star text-muted" />}
                        fullSymbol={<i className="cs-star-full text-primary" />}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="mb-n3 border-last-none">
                <Row className="g-0 w-100 border-bottom border-separator-light pb-3 mb-3">
                  <Col xs="auto">
                    <div className="sw-5 me-3">
                      <img src="/img/profile/profile-2.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                  </Col>
                  <Col className="pe-3">
                    <div>Cherish Kerr</div>
                    <div className="text-muted text-small mb-2">2 days ago</div>
                    <Rating
                      className="align-middle"
                      initialRating={5}
                      readonly
                      emptySymbol={<i className="cs-star text-primary" />}
                      fullSymbol={<i className="cs-star-full text-primary" />}
                    />
                    <div className="text-medium text-alternate lh-1-25">Macaroon!</div>
                  </Col>
                </Row>
                <Row className="g-0 w-100 border-bottom border-separator-light pb-3 mb-3">
                  <Col xs="auto">
                    <div className="sw-5 me-3">
                      <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                  </Col>
                  <Col className="pe-3">
                    <div>Olli Hawkins</div>
                    <div className="text-muted text-small mb-2">3 days ago</div>
                    <Rating
                      className="align-middle"
                      initialRating={5}
                      readonly
                      emptySymbol={<i className="cs-star text-primary" />}
                      fullSymbol={<i className="cs-star-full text-primary" />}
                    />
                    <div className="text-medium text-alternate lh-1-25">Cupcake cake fruitcake. Powder chocolate bar soufflé gummi bears topping donut.</div>
                  </Col>
                </Row>
                <Row className="g-0 w-100 border-bottom border-separator-light pb-3 mb-3">
                  <Col xs="auto">
                    <div className="sw-5 me-3">
                      <img src="/img/profile/profile-3.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                  </Col>
                  <Col className="pe-3">
                    <div>Kirby Peters</div>
                    <div className="text-muted text-small mb-2">4 days ago</div>
                    <Rating
                      className="align-middle"
                      initialRating={5}
                      readonly
                      emptySymbol={<i className="cs-star text-primary" />}
                      fullSymbol={<i className="cs-star-full text-primary" />}
                    />
                    <div className="text-medium text-alternate lh-1-25">Nice, very tasty.</div>
                  </Col>
                </Row>
                <Row className="g-0 w-100 border-bottom border-separator-light pb-3 mb-3">
                  <Col xs="auto">
                    <div className="sw-5 me-3">
                      <img src="/img/profile/profile-4.webp" className="img-fluid rounded-xl" alt="thumb" />
                    </div>
                  </Col>
                  <Col className="pe-3">
                    <div>Zayn Hartley</div>
                    <div className="text-muted text-small mb-2">1 week ago</div>
                    <Rating
                      className="align-middle"
                      initialRating={5}
                      readonly
                      emptySymbol={<i className="cs-star text-primary" />}
                      fullSymbol={<i className="cs-star-full text-primary" />}
                    />
                    <div className="text-medium text-alternate lh-1-25">
                      Chupa chups topping pastry halvah. Jelly cake jelly sesame snaps jelly beans jelly beans. Biscuit powder brownie powder sesame snaps
                      jelly-o dragée cake. Pie tiramisu cake jelly lemon drops. Macaroon sugar plum apple pie carrot cake jelly beans chocolate.
                    </div>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
          {/* Reviews End */}

          {/* Faq Start */}
          <h2 className="small-title">Faq</h2>
          <Card>
            <Card.Body className="mb-n4">
              <Row className="g-0 mb-4">
                <Col xs="auto">
                  <p className="sw-2 text-primary mb-2 fw-bold">1.</p>
                </Col>
                <Col>
                  <p className="text-primary ps-3 mb-2 fw-bold">
                    Carrot cake jelly-o lemon drops toffee tootsie roll. Brownie topping toffee apple pie apple pie?
                  </p>
                  <p className="text-body ps-3 mb-0">
                    Danish croissant bonbon danish muffin icing sugar plum marzipan oat cake. Biscuit powder brownie powder sesame snaps jelly-o dragée cake.
                    Pie tiramisu cake jelly lemon drops. Macaroon sugar plum apple pie carrot cake jelly beans chocolate. Brownie bear claw tart. Powder danish
                    ice cream brownie chupa.
                  </p>
                </Col>
              </Row>
              <Row className="g-0 mb-4">
                <Col xs="auto">
                  <p className="sw-2 text-primary mb-2 fw-bold">2.</p>
                </Col>
                <Col>
                  <p className="text-primary ps-3 mb-2 fw-bold">Caramels wafer jelly beans?</p>
                  <p className="text-body ps-3 mb-0">Chupa chups topping pastry halvah. Jelly cake jelly sesame snaps jelly beans jelly beans. </p>
                </Col>
              </Row>
              <Row className="g-0 mb-4">
                <Col xs="auto">
                  <p className="sw-2 text-primary mb-2 fw-bold">3.</p>
                </Col>
                <Col>
                  <p className="text-primary ps-3 mb-2 fw-bold">Gingerbread jelly beans topping donut?</p>
                  <p className="text-body ps-3 mb-0">
                    Gingerbread caramels topping gummi bears halvah dessert cake. Wafer muffin gingerbread danish donut donut tootsie roll. Soufflé chocolate
                    cake chupa chups danish brownie pudding fruitcake.
                  </p>
                </Col>
              </Row>
              <Row className="g-0 mb-4">
                <Col xs="auto">
                  <p className="sw-2 text-primary mb-2 fw-bold">4.</p>
                </Col>
                <Col>
                  <p className="text-primary ps-3 mb-2 fw-bold">Dragée dessert gummies liquorice halvah chocolate?</p>
                  <p className="text-body ps-3 mb-0">
                    Ice cream ice cream candy gingerbread tiramisu jelly-o jelly. Brownie bear claw tart. Powder danish ice cream brownie chupa chups cupcake
                    sweet roll. Tart ice cream biscuit cupcake.
                  </p>
                </Col>
              </Row>
              <Row className="g-0 mb-4">
                <Col xs="auto">
                  <p className="sw-2 text-primary mb-2 fw-bold">5.</p>
                </Col>
                <Col>
                  <p className="text-primary ps-3 mb-2 fw-bold">Brownie topping toffee apple pie?</p>
                  <p className="text-body ps-3 mb-0">
                    Cake danish gingerbread wafer. Sugar plum sweet jelly-o chocolate cake lemon drops. Jujubes brownie marshmallow apple pie donut ice cream
                    jelly-o jelly-o gummi bears. Tootsie roll chocolate bar dragée bonbon cheesecake icing. Danish wafer donut cookie caramels gummies topping.
                    Toffee cupcake gummi bears gummies dragée danish chocolate bar. Roll cupcake sugar plum.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          {/* Faq End */}
        </Col>
        <Col xl="4">
          {/* Similar Products Start */}
          <h2 className="small-title">Similar Products</h2>
          <Row className="g-2 row-cols-1 row-cols-md-2 row-cols-xl-1">
            <Col>
              <Card>
                <Row className="g-0 sh-16 sh-sm-17">
                  <Col xs="auto" className="h-100 position-relative">
                    <Badge bg="primary" className="me-1 position-absolute e-n2 t-2 z-index-1">
                      SALE
                    </Badge>
                    <img src="/img/product/small/product-2.webp" alt="alternate text" className="card-img card-img-horizontal h-100 sw-11 sw-sm-16" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex align-items-center h-100 py-3">
                      <div className="mb-0 h6">
                        <NavLink to="/storefront/detail" className="body-link stretched-link d-block mb-1 sh-3 h6 lh-1-5">
                          <Clamp tag="span" clamp="1">
                            Plain Baguette
                          </Clamp>
                        </NavLink>
                        <div className="card-text mb-2">
                          <div className="text-muted text-overline text-small sh-2">
                            <del>$ 12.25</del>
                          </div>
                          <div>$ 8.50</div>
                        </div>
                        <div>
                          <Rating
                            initialRating={5}
                            readonly
                            emptySymbol={<i className="cs-star text-primary" />}
                            fullSymbol={<i className="cs-star-full text-primary" />}
                          />
                          <div className="text-muted d-inline-block text-small align-text-top">(5)</div>
                        </div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col>
              <Card>
                <Row className="g-0 sh-16 sh-sm-17">
                  <Col xs="auto" className="h-100 position-relative">
                    <img src="/img/product/small/product-3.webp" alt="alternate text" className="card-img card-img-horizontal h-100 sw-11 sw-sm-16" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex align-items-center h-100 py-3">
                      <div className="mb-0 h6">
                        <NavLink to="/storefront/detail" className="body-link stretched-link d-block mb-1 sh-3 h6 lh-1-5">
                          <Clamp tag="span" clamp="1">
                            Bucellato di Lucca
                          </Clamp>
                        </NavLink>
                        <div className="card-text mb-2">
                          <div className="text-muted text-overline text-small sh-2" />
                          <div>$ 7.50</div>
                        </div>
                        <div>
                          <Rating
                            initialRating={5}
                            readonly
                            emptySymbol={<i className="cs-star text-primary" />}
                            fullSymbol={<i className="cs-star-full text-primary" />}
                          />
                          <div className="text-muted d-inline-block text-small align-text-top">(2)</div>
                        </div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col>
              <Card>
                <Row className="g-0 sh-16 sh-sm-17">
                  <Col xs="auto" className="h-100 position-relative">
                    <img src="/img/product/small/product-4.webp" alt="alternate text" className="card-img card-img-horizontal h-100 sw-11 sw-sm-16" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex align-items-center h-100 py-3">
                      <div className="mb-0 h6">
                        <NavLink to="/storefront/detail" className="body-link stretched-link d-block mb-1 sh-3 h6 lh-1-5">
                          <Clamp tag="span" clamp="1">
                            Steirer Brot
                          </Clamp>
                        </NavLink>
                        <div className="card-text mb-2">
                          <div className="text-muted text-overline text-small sh-2" />
                          <div>$ 4.25</div>
                        </div>
                        <div>
                          <Rating
                            initialRating={5}
                            readonly
                            emptySymbol={<i className="cs-star text-primary" />}
                            fullSymbol={<i className="cs-star-full text-primary" />}
                          />
                          <div className="text-muted d-inline-block text-small align-text-top">(5)</div>
                        </div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col>
              <Card>
                <Row className="g-0 sh-16 sh-sm-17">
                  <Col xs="auto" className="h-100 position-relative">
                    <img src="/img/product/small/product-5.webp" alt="alternate text" className="card-img card-img-horizontal h-100 sw-11 sw-sm-16" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex align-items-center h-100 py-3">
                      <div className="mb-0 h6">
                        <NavLink to="/storefront/detail" className="body-link stretched-link d-block mb-1 sh-3 h6 lh-1-5">
                          <Clamp tag="span" clamp="1">
                            Michetta
                          </Clamp>
                        </NavLink>
                        <div className="card-text mb-2">
                          <div className="text-muted text-overline text-small sh-2" />
                          <div>$ 12.25</div>
                        </div>
                        <div>
                          <Rating
                            initialRating={5}
                            readonly
                            emptySymbol={<i className="cs-star text-primary" />}
                            fullSymbol={<i className="cs-star-full text-primary" />}
                          />
                          <div className="text-muted d-inline-block text-small align-text-top">(5)</div>
                        </div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col>
              <Card>
                <Row className="g-0 sh-16 sh-sm-17">
                  <Col xs="auto" className="h-100 position-relative">
                    <Badge bg="primary" className="me-1 position-absolute e-n2 t-2 z-index-1">
                      SALE
                    </Badge>
                    <img src="/img/product/small/product-6.webp" alt="alternate text" className="card-img card-img-horizontal h-100 sw-11 sw-sm-16" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex align-items-center h-100 py-3">
                      <div className="mb-0 h6">
                        <NavLink to="/storefront/detail" className="body-link stretched-link d-block mb-1 sh-3 h6 lh-1-5">
                          <Clamp tag="span" clamp="1">
                            Rugbraud
                          </Clamp>
                        </NavLink>
                        <div className="card-text mb-2">
                          <div className="text-muted text-overline text-small sh-2">
                            <del>$ 3.25</del>
                          </div>
                          <div>$ 2.50</div>
                        </div>
                        <div>
                          <Rating
                            initialRating={5}
                            readonly
                            emptySymbol={<i className="cs-star text-primary" />}
                            fullSymbol={<i className="cs-star-full text-primary" />}
                          />
                          <div className="text-muted d-inline-block text-small align-text-top">(5)</div>
                        </div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col>
              <Card>
                <Row className="g-0 sh-16 sh-sm-17">
                  <Col xs="auto" className="h-100 position-relative">
                    <Badge bg="primary" className="me-1 position-absolute e-n2 t-2 z-index-1">
                      SALE
                    </Badge>
                    <img src="/img/product/small/product-7.webp" alt="alternate text" className="card-img card-img-horizontal h-100 sw-11 sw-sm-16" />
                  </Col>
                  <Col>
                    <Card.Body className="d-flex align-items-center h-100 py-3">
                      <div className="mb-0 h6">
                        <NavLink to="/storefront/detail" className="body-link stretched-link d-block mb-1 sh-3 h6 lh-1-5">
                          <Clamp tag="span" clamp="1">
                            Zopf
                          </Clamp>
                        </NavLink>
                        <div className="card-text mb-2">
                          <div className="text-muted text-overline text-small sh-2">
                            <del>$ 5.25</del>
                          </div>
                          <div>$ 2.85</div>
                        </div>
                        <div>
                          <Rating
                            initialRating={5}
                            readonly
                            emptySymbol={<i className="cs-star text-primary" />}
                            fullSymbol={<i className="cs-star-full text-primary" />}
                          />
                          <div className="text-muted d-inline-block text-small align-text-top">(5)</div>
                        </div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
          {/* Similar Products End */}
        </Col>
      </Row>

      {/* Lightbox Start */}
      {isOpen && (
        <Lightbox
          mainSrc={galleyItems[photoIndex].large}
          nextSrc={galleyItems[(photoIndex + 1) % galleyItems.length].large}
          prevSrc={galleyItems[(photoIndex + galleyItems.length - 1) % galleyItems.length].large}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + galleyItems.length - 1) % galleyItems.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % galleyItems.length)}
          loader={<Spinner animation="border" />}
          wrapperClassName="rounded-lg"
        />
      )}
      {/* Lightbox End */}
    </>
  );
};

export default Detail;

import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Card, Nav, Tab, Dropdown, InputGroup, FormControl, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { useWindowSize } from 'hooks/useWindowSize';

const MoreItemToggle = React.forwardRef(({ onClick, parentClassname }, ref) => (
  <a
    ref={ref}
    className={classNames('btn btn-icon btn-icon-only', {
      'btn-foreground mt-2': parentClassname.indexOf('nav-tabs-title') === -1,
      'btn-background pt-0 bg-transparent pe-0': parentClassname.indexOf('nav-tabs-title') > -1,
    })}
    href="#/"
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <CsLineIcons icon="more-horizontal" size="20" />
  </a>
));

MoreItemToggle.displayName = 'MoreItemToggle';
// eslint-disable-next-line no-unused-vars
const ResponsiveNav = React.forwardRef(({ className, children }, ref) => {
  const innerRef = React.createRef();
  const [collapseIndex, setCollapseIndex] = useState(children.length);
  const [childSteps, setChildSteps] = useState([]);
  const { width } = useWindowSize();

  const setSteps = () => {
    const steps = [];
    const currentChildren = innerRef.current.children;
    let totalWidth = 0;
    for (let i = 0; i < currentChildren.length; i += 1) {
      totalWidth += currentChildren[i].clientWidth;
      steps.push(totalWidth);
    }
    setChildSteps(steps);
  };
  const checkCollapseIndex = () => {
    const navWidth = innerRef.current.clientWidth;
    let checkedCollapseIndex = childSteps.filter((x) => x < navWidth).length;
    if (checkedCollapseIndex < children.length) {
      checkedCollapseIndex = childSteps.filter((x) => x < navWidth - 50).length;
    }
    if (checkedCollapseIndex !== collapseIndex) {
      setCollapseIndex(checkedCollapseIndex);
    }
  };
  useEffect(() => {
    setSteps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (width && childSteps.length > 0) {
      checkCollapseIndex();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  return (
    <div ref={innerRef} className={className}>
      {children.slice(0, collapseIndex)}
      {collapseIndex !== children.length && (
        <Dropdown className={classNames('nav-item ms-auto pe-0')} alignRight>
          <Dropdown.Toggle as={MoreItemToggle} parentClassname={className} />
          <Dropdown.Menu>{children.slice(collapseIndex, children.length)}</Dropdown.Menu>
        </Dropdown>
      )}
    </div>
  );
});

const TabContent = () => {
  return (
    <>
      <Card className="mb-2">
        <Card.Body>
          <Row className="g-0">
            <Col xs="auto" className="d-none d-sm-flex pe-4">
              <div className="sw-5">
                <div className="text-center mb-2">
                  <NavLink to="#" className="muted-link">
                    <CsLineIcons icon="arrow-top" />
                  </NavLink>
                </div>
                <div className="cta-2 text-alternate text-center mb-2">105</div>
                <div className="text-center">
                  <NavLink to="#" className="muted-link">
                    <CsLineIcons icon="arrow-bottom" />
                  </NavLink>
                </div>
              </div>
            </Col>
            <Col>
              <div className="position-relative mb-4">
                <NavLink to="/community/list" className="heading d-block body-link stretched-link mb-3">
                  Fruitcake chupa chups gingerbread sweet roll pie!
                </NavLink>
                <img alt="detail" src="/img/product/large/product-3.webp" className="rounded img-fluid sh-35 w-100" />
              </div>
              <Row className="g-0">
                <Col xs="12" className="col-sm mb-3 mb-sm-0">
                  <Row className="g-0 sh-4">
                    <Col xs="auto" className="pe-2">
                      <img src="/img/profile/profile-3.webp" className="card-img rounded-xl sh-4 sw-4" alt="thumb" />
                    </Col>
                    <Col className="d-flex align-items-center text-primary">Kathryn Mengel</Col>
                  </Row>
                </Col>
                <Col xs="12" className="col-sm-auto text">
                  <div className="d-inline-block me-3">
                    <CsLineIcons icon="eye" className="text-primary me-1" size="15" />
                    <span className="align-middle">114</span>
                  </div>
                  <div className="d-inline-block">
                    <CsLineIcons icon="message" className="text-primary me-1" size="15" />
                    <span className="align-middle">21</span>
                  </div>
                  <div className="d-inline-block float-end d-sm-none">
                    <NavLink to="#" className="muted-link">
                      <CsLineIcons icon="arrow-top" size="15" />
                    </NavLink>
                    <span className="mx-1 align-middle">105</span>
                    <NavLink to="#" className="muted-link">
                      <CsLineIcons icon="arrow-bottom" size="15" />
                    </NavLink>
                  </div>
                </Col>
              </Row>
              <div className="border-bottom border-separator opacity-50 mt-5 mb-5" />
              <div>
                <Row className="g-0 mb-3">
                  <Col xs="auto" className="pe-3">
                    <img src="/img/profile/profile-8.webp" className="card-img rounded-xl sh-3 sw-3" alt="thumb" />
                  </Col>
                  <Col>
                    <div className="mb-2 pt-1 text-primary">Esperanza Lodge</div>
                    <div className="text-alternate mb-1">
                      Topping cotton candy halvah marshmallow jujubes chupa chups macaroon cookie croissant. Marshmallow tiramisu marshmallow gummi bears dragée
                      oat cake fruitcake dessert. Topping bonbon gingerbread chocolate apple pie cheesecake liquorice muffin pudding.
                    </div>
                    <div>
                      <div className="d-inline-block sw-9">
                        <NavLink to="#" className="muted-link">
                          <CsLineIcons icon="arrow-top" size="15" />
                        </NavLink>
                        <span className="d-inline-block align-middle text-alternate text-medium mx-1">184</span>
                        <NavLink to="#" className="muted-link">
                          <CsLineIcons icon="arrow-bottom" size="15" />
                        </NavLink>
                      </div>
                      <span className="text-muted text-small">Two hours ago</span>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-3">
                  <Col xs="auto" className="pe-3">
                    <img src="/img/profile/profile-9.webp" className="card-img rounded-xl sh-3 sw-3" alt="thumb" />
                  </Col>
                  <Col>
                    <div className="mb-2 pt-1 text-primary">Kathryn Mengel</div>
                    <div className="text-alternate mb-1">Brownie jelly-o carrot.</div>
                    <div>
                      <div className="d-inline-block sw-9">
                        <NavLink to="#" className="muted-link">
                          <CsLineIcons icon="arrow-top" size="15" />
                        </NavLink>
                        <span className="d-inline-block align-middle text-alternate text-medium mx-1">7</span>
                        <NavLink to="#" className="muted-link">
                          <CsLineIcons icon="arrow-bottom" size="15" />
                        </NavLink>
                      </div>
                      <span className="text-muted text-small">One day ago</span>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mb-3">
                  <Col xs="auto" className="pe-3">
                    <img src="/img/profile/profile-1.webp" className="card-img rounded-xl sh-3 sw-3" alt="thumb" />
                  </Col>
                  <Col>
                    <div className="mb-2 pt-1 text-primary">Joisse Kaycee</div>
                    <div className="text-alternate mb-1">Beans marshmallow dessert biscuit biscuit gummies ice cream.</div>
                    <div>
                      <div className="d-inline-block sw-9">
                        <NavLink to="#" className="muted-link">
                          <CsLineIcons icon="arrow-top" size="15" />
                        </NavLink>
                        <span className="d-inline-block align-middle text-alternate text-medium mx-1">12</span>
                        <NavLink to="#" className="muted-link">
                          <CsLineIcons icon="arrow-bottom" size="15" />
                        </NavLink>
                      </div>
                      <span className="text-muted text-small">Four days ago</span>
                    </div>
                  </Col>
                </Row>
                <div className="input-group mt-5">
                  <InputGroup>
                    <FormControl placeholder="Add a comment" />
                    <Button variant="outline-primary" className="btn-icon btn-icon-end">
                      <span>Send</span>
                      <CsLineIcons icon="send" />
                    </Button>
                  </InputGroup>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-2">
        <Card.Body>
          <Row className="g-0">
            <Col xs="auto" className="d-none d-sm-flex pe-4">
              <div className="sw-5">
                <div className="text-center mb-2">
                  <NavLink to="#" className="primary-link">
                    <CsLineIcons icon="arrow-top" />
                  </NavLink>
                </div>
                <div className="cta-2 text-alternate text-center mb-2">42</div>
                <div className="text-center">
                  <NavLink to="#" className="muted-link">
                    <CsLineIcons icon="arrow-bottom" />
                  </NavLink>
                </div>
              </div>
            </Col>
            <Col>
              <div className="position-relative mb-4">
                <NavLink to="/community/list" className="heading d-block body-link stretched-link mb-3">
                  Cheesecake pie dessert?
                </NavLink>
                <p className="text-alternate mb-0">
                  Marshmallow beans ice cream candy canes sugar plum chupa chups tart brownie dessert lemon drops topping chocolate. Jelly dragée apple pie
                  halvah jujubes.
                </p>
              </div>
              <Row className="g-0">
                <Col xs="12" className="col-sm mb-3 mb-sm-0">
                  <Row className="g-0 sh-4">
                    <Col xs="auto" className="pe-2">
                      <img src="/img/profile/profile-2.webp" className="card-img rounded-xl sh-4 sw-4" alt="thumb" />
                    </Col>
                    <Col className="d-flex align-items-center">Esperanza Lodge</Col>
                  </Row>
                </Col>
                <Col xs="12" className="col-sm-auto text">
                  <div className="d-inline-block me-3">
                    <CsLineIcons icon="eye" className="text-primary me-1" size="15" />
                    <span className="align-middle">321</span>
                  </div>
                  <div className="d-inline-block">
                    <CsLineIcons icon="message" className="text-primary me-1" size="15" />
                    <span className="align-middle">4</span>
                  </div>
                  <div className="d-inline-block float-end d-sm-none">
                    <NavLink to="#" className="primary-link">
                      <CsLineIcons icon="arrow-top" size="15" />
                    </NavLink>
                    <span className="mx-1 align-middle">42</span>
                    <NavLink to="#" className="muted-link">
                      <CsLineIcons icon="arrow-bottom" size="15" />
                    </NavLink>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-2">
        <Card.Body>
          <Row className="g-0">
            <Col xs="auto" className="d-none d-sm-flex pe-4">
              <div className="sw-5">
                <div className="text-center mb-2">
                  <NavLink to="#" className="primary-link">
                    <CsLineIcons icon="arrow-top" />
                  </NavLink>
                </div>
                <div className="cta-2 text-alternate text-center mb-2">53</div>
                <div className="text-center">
                  <NavLink to="#" className="muted-link">
                    <CsLineIcons icon="arrow-bottom" />
                  </NavLink>
                </div>
              </div>
            </Col>
            <Col>
              <div className="position-relative mb-4">
                <NavLink to="/community/list" className="heading d-block body-link stretched-link mb-3">
                  Lemon drops marzipan cotton candy gingerbread!
                </NavLink>
                <p className="text-alternate mb-0">
                  Candy jelly beans cupcake. Jelly sesame snaps marshmallow lollipop. Brownie jelly-o carrot cake brownie lemon drops gummi bears. Halvah
                  pudding tootsie roll carrot cake biscuit ice cream halvah tootsie roll.
                </p>
              </div>
              <Row className="g-0">
                <Col xs="12" className="col-sm mb-3 mb-sm-0">
                  <Row className="g-0 sh-4">
                    <Col xs="auto" className="pe-2">
                      <img src="/img/profile/profile-7.webp" className="card-img rounded-xl sh-4 sw-4" alt="thumb" />
                    </Col>
                    <Col className="d-flex align-items-center">Joisse Kaycee</Col>
                  </Row>
                </Col>
                <Col xs="12" className="col-sm-auto text">
                  <div className="d-inline-block me-3">
                    <CsLineIcons icon="eye" className="text-primary me-1" size="15" />
                    <span className="align-middle">53</span>
                  </div>
                  <div className="d-inline-block">
                    <CsLineIcons icon="message" className="text-primary me-1" size="15" />
                    <span className="align-middle">17</span>
                  </div>
                  <div className="d-inline-block float-end d-sm-none">
                    <NavLink to="#" className="primary-link">
                      <CsLineIcons icon="arrow-top" size="15" />
                    </NavLink>
                    <span className="mx-1 align-middle">53</span>
                    <NavLink to="#" className="muted-link">
                      <CsLineIcons icon="arrow-bottom" size="15" />
                    </NavLink>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card className="mb-2">
        <Card.Body>
          <Row className="g-0">
            <Col xs="auto" className="d-none d-sm-flex pe-4">
              <div className="sw-5">
                <div className="text-center mb-2">
                  <NavLink to="#" className="primary-link">
                    <CsLineIcons icon="arrow-top" />
                  </NavLink>
                </div>
                <div className="cta-2 text-alternate text-center mb-2">119</div>
                <div className="text-center">
                  <NavLink to="#" className="muted-link">
                    <CsLineIcons icon="arrow-bottom" />
                  </NavLink>
                </div>
              </div>
            </Col>
            <Col>
              <div className="position-relative mb-4">
                <NavLink to="/community/list" className="heading d-block body-link stretched-link mb-3">
                  Marshmallow tiramisu!
                </NavLink>
                <p className="text-alternate mb-0">
                  Brownie topping apple pie pie toffee wafer cookie bonbon sweet roll. Marshmallow sugar plum chupa chups tart brownie dessert lemon drops
                  topping chocolate. Jelly dragée apple pie halvah jujubes. Sweet sugar plum wafer carrot cake jelly chocolate bar. Brownie gummi bears wafer
                  brownie. Caramels sesame snaps apple pie fruitcake cheesecake topping lemon drops gummi bears icing.
                </p>
              </div>
              <Row className="g-0">
                <Col xs="12" className="col-sm mb-3 mb-sm-0">
                  <Row className="g-0 sh-4">
                    <Col xs="auto" className="pe-2">
                      <img src="/img/profile/profile-3.webp" className="card-img rounded-xl sh-4 sw-4" alt="thumb" />
                    </Col>
                    <Col className="d-flex align-items-center">Kathryn Mengel</Col>
                  </Row>
                </Col>
                <Col xs="12" className="col-sm-auto text">
                  <div className="d-inline-block me-3">
                    <CsLineIcons icon="eye" className="text-primary me-1" size="15" />
                    <span className="align-middle">334</span>
                  </div>
                  <div className="d-inline-block">
                    <CsLineIcons icon="message" className="text-primary me-1" size="15" />
                    <span className="align-middle">21</span>
                  </div>
                  <div className="d-inline-block float-end d-sm-none">
                    <NavLink to="#" className="primary-link">
                      <CsLineIcons icon="arrow-top" size="15" />
                    </NavLink>
                    <span className="mx-1 align-middle">119</span>
                    <NavLink to="#" className="muted-link">
                      <CsLineIcons icon="arrow-bottom" size="15" />
                    </NavLink>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Row>
        <Col xs="12" className="text-center mt-5">
          <Button size="xl" variant="outline-primary" className="sw-30">
            Load More
          </Button>
        </Col>
      </Row>
    </>
  );
};

const CommunityList = () => {
  const title = 'Community List';
  const description = 'Service Provider Community List';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Col>
        {/* Title Start */}
        <div className="page-title-container mb-3">
          <Row>
            <Col className="mb-2">
              <h1 className="mb-2 pb-0 display-4">{title}</h1>
              <div className="text-muted font-heading text-small">Fruitcake tiramisu pastry halvah chocolate bar pie apple pie.</div>
            </Col>
            <Col xs="12" sm="auto" className="d-flex align-items-center justify-content-end">
              <Button variant="outline-primary" className="btn-icon btn-icon-start w-100 w-md-auto">
                <CsLineIcons icon="plus" /> <span>Add New</span>
              </Button>
            </Col>
          </Row>
        </div>
        {/* Title End */}

        <Row>
          <Col xxl="8" className="mb-5">
            <Tab.Container defaultActiveKey="PopularPosts">
              <Nav variant="tabs" className="nav-tabs-title nav-tabs-line-title" activeKey="PopularPosts" as={ResponsiveNav}>
                <Nav.Item>
                  <Nav.Link eventKey="PopularPosts">Popular Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Newest">Newest</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Unread">Unread</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="PopularPosts">
                  <TabContent />
                </Tab.Pane>
                <Tab.Pane eventKey="Newest">
                  <TabContent />
                </Tab.Pane>
                <Tab.Pane eventKey="Unread">
                  <TabContent />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
          <Col xxl="4" className="mb-5">
            {/* About the Topic Start */}
            <h2 className="small-title">About the Topic</h2>
            <Card className="mb-5">
              <Card.Body className="mb-n2">
                <p>
                  Topping bonbon gingerbread chocolate apple pie cheesecake liquorice muffin pudding. Jelly beans marshmallow dessert biscuit biscuit gummies
                  ice cream chupa chups cotton candy. Brownie topping apple pie pie toffee wafer cookie bonbon sweet roll.
                </p>
                <Row className="g-0 mb-n2">
                  <Col xs="4" className="mb-2">
                    <div className="text-small text-muted">POSTS</div>
                    <div className="cta-2 text-primary">423</div>
                  </Col>
                  <Col xs="4" className="mb-2">
                    <div className="text-small text-muted">USERS</div>
                    <div className="cta-2 text-primary">89</div>
                  </Col>
                  <Col xs="4" className="mb-2">
                    <div className="text-small text-muted">UPDATED</div>
                    <div className="cta-2 text-primary">12h</div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            {/* About the Topic End */}

            {/* Related Topics Start */}
            <h2 className="small-title">Related Topics</h2>
            <Card className="mb-5">
              <Card.Body className="mb-n4">
                <Row className="g-0 sh-3 mb-4 position-relative">
                  <Col xs="auto">
                    <div className="sh-3 d-inline-block d-flex justify-content-center align-items-center">
                      <CsLineIcons icon="server" className="text-primary" />
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-row ps-3 h-100 align-items-center justify-content-between">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="stretched-link">
                          Hosting
                        </NavLink>
                      </div>
                      <div className="d-flex">
                        <Badge bg="outline-alternate">352 POSTS</Badge>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 sh-3 mb-4 position-relative">
                  <Col xs="auto">
                    <div className="sh-3 d-inline-block d-flex justify-content-center align-items-center">
                      <CsLineIcons icon="database" className="text-primary" />
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-row ps-3 h-100 align-items-center justify-content-between">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="stretched-link">
                          Database
                        </NavLink>
                      </div>
                      <div className="d-flex">
                        <Badge bg="outline-alternate">124 POSTS</Badge>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 sh-3 mb-4 position-relative">
                  <Col xs="auto">
                    <div className="sh-3 d-inline-block d-flex justify-content-center align-items-center">
                      <CsLineIcons icon="startup" className="text-primary" />
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-row ps-3 h-100 align-items-center justify-content-between">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="stretched-link">
                          Applications
                        </NavLink>
                      </div>
                      <div className="d-flex">
                        <Badge bg="outline-alternate">514 POSTS</Badge>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 sh-3 mb-4 position-relative">
                  <Col xs="auto">
                    <div className="sh-3 d-inline-block d-flex justify-content-center align-items-center">
                      <CsLineIcons icon="user" className="text-primary" />
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-row ps-3 h-100 align-items-center justify-content-between">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="stretched-link">
                          User Management
                        </NavLink>
                      </div>
                      <div className="d-flex">
                        <Badge bg="outline-alternate">251 POSTS</Badge>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 sh-3 mb-4 position-relative">
                  <Col xs="auto">
                    <div className="sh-3 d-inline-block d-flex justify-content-center align-items-center">
                      <CsLineIcons icon="cpu" className="text-primary" />
                    </div>
                  </Col>
                  <Col>
                    <div className="d-flex flex-row ps-3 h-100 align-items-center justify-content-between">
                      <div className="d-flex flex-column">
                        <NavLink to="#" className="stretched-link">
                          Computing
                        </NavLink>
                      </div>
                      <div className="d-flex">
                        <Badge bg="outline-alternate">441 POSTS</Badge>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            {/* Related Topics End */}

            {/* Video Guides for the Topic Start */}
            <h2 className="small-title">Video Guides for the Topic</h2>
            <div className="mb-5">
              <Card className="mb-2">
                <Row className="g-0 sh-11">
                  <Col xs="auto" className="h-100">
                    <img src="/img/video/video-thumbnail-1.webp" alt="alternate text" className="card-img card-img-horizontal sw-11 sw-md-14 theme-filter" />
                    <div className="position-absolute bg-foreground opacity-75 text-primary px-1 py-1 text-extra-small b-2 s-2 rounded-lg">16:22</div>
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <NavLink to="/blog" className="font-heading body-link stretched-link">
                          Database Basics
                        </NavLink>
                        <div className="text-small text-muted text-truncate">Icing liquorice oat roll chocolate cake bar marzipan marzipan carrot.</div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
              <Card className="mb-2">
                <Row className="g-0 sh-11">
                  <Col xs="auto" className="h-100">
                    <img src="/img/video/video-thumbnail-2.webp" alt="alternate text" className="card-img card-img-horizontal sw-11 sw-md-14 theme-filter" />
                    <div className="position-absolute bg-foreground opacity-75 text-primary px-1 py-1 text-extra-small b-2 s-2 rounded-lg">10:05</div>
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <NavLink to="/blog" className="font-heading body-link stretched-link">
                          Shared Storage
                        </NavLink>
                        <div className="text-small text-muted text-truncate">
                          Jujubes cream toffee candy jelly chups jujubes muffin chupa chups carrot cake chupa.
                        </div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
              <Card>
                <Row className="g-0 sh-11">
                  <Col xs="auto" className="h-100">
                    <img src="/img/video/video-thumbnail-3.webp" alt="alternate text" className="card-img card-img-horizontal sw-11 sw-md-14 theme-filter" />
                    <div className="position-absolute bg-foreground opacity-75 text-primary px-1 py-1 text-extra-small b-2 s-2 rounded-lg">12:20</div>
                  </Col>
                  <Col>
                    <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                      <div className="d-flex flex-column">
                        <NavLink to="/blog" className="font-heading body-link stretched-link">
                          Javascript Api
                        </NavLink>
                        <div className="text-small text-muted text-truncate">Candy jelly chups jujubes Cookie cream toffee cream chocolate.</div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </div>
            {/* Video Guides for the Topic End */}

            {/* Tags Start */}
            <h2 className="small-title">Tags</h2>
            <Card>
              <Card.Body className="mb-n1">
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Food (12)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Baking (3)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Sweet (1)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Molding (3)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Pastry (5)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Healthy (7)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Rye (3)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Simple (3)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Cake (2)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Recipe (6)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Bread (8)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Wheat (2)
                </Button>
              </Card.Body>
            </Card>
            {/* Tags End */}
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default CommunityList;

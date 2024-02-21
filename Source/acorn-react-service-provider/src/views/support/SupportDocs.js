import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import Masonry from 'react-masonry-css';
import Plyr from 'plyr-react';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const PurePlyr = React.memo(() => {
  const videoSrc = {
    type: 'video',
    sources: [{ src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' }],
    poster: '/img/video/video-large.webp',
  };
  return <Plyr source={videoSrc} options={{}} />;
});

const SupportDocs = () => {
  const title = 'Docs';
  const description = 'Service Provider Docs';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Col>
        {/* Title Start */}
        <div className="page-title-container mb-3">
          <Row>
            <Col className="mb-2">
              <h1 className="mb-2 pb-0 display-4">{title}</h1>
              <div className="text-muted font-heading text-small">Caramels dragée cheesecake croissant carrot cake.</div>
            </Col>
          </Row>
        </div>
        {/* Title End */}

        <Row>
          {/* Access Token Start */}
          <Col lg="4" className="mb-5">
            <h2 className="small-title">Access Token</h2>
            <Card>
              <Card.Body className="sh-45 d-flex align-items-center justify-content-center">
                <div className="text-center">
                  <img src="/img/illustration/access-token.webp" className="theme-filter" alt="access" />
                  <div className="cta-3">No access token!</div>
                  <div className="cta-5 text-primary mb-4">Would you like to create one?</div>
                  <NavLink to="/support/docs/detail" className="btn btn-primary stretched-link">
                    CREATE TOKEN
                  </NavLink>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* Access Token End */}

          {/* Access Token Start */}
          <Col className="mb-5">
            <h2 className="small-title">Access Token</h2>
            <Card className="h-100-card sh-md-45 bg-transparent cover">
              <PurePlyr />
            </Card>
          </Col>
          {/* Access Token End */}
        </Row>

        {/* Api Reference Start */}
        <h2 className="small-title">Api Reference</h2>
        <Card className="mb-5">
          <Card.Body>
            <Masonry breakpointCols={{ default: 3, 1200: 2, 576: 1 }} className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-4" columnClassName="col">
              <Card className="p-0 no-shadow mb-5">
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2">
                  <div className="sw-4">
                    <CsLineIcons icon="layout-1" className="text-primary align-middle" size="17" />
                  </div>
                  <div className="h5 text-primary lh-1-5">App</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Chocolate cake marshmallow</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Sesame candy halvah marshmallow</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Muffin cheesecake sesame snaps</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Chupa chups pastry</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Lemon drops</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Jelly sesame snaps marshmallow lollipop chupa chups</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Lemon candy chocolate bar</div>
                </NavLink>
              </Card>
              <Card className="p-0 no-shadow mb-5">
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2">
                  <div className="sw-4">
                    <CsLineIcons icon="lock-off" className="text-primary align-middle" size="17" />
                  </div>
                  <div className="h5 text-primary lh-1-5">Auth</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Macaroon cookie croissant</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Apple pie</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Wafer carrot cake</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Tootsie roll sweet</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Donut powder gummi bears</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Tootsie roll sweet</div>
                </NavLink>
              </Card>
              <Card className="p-0 no-shadow mb-5">
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2">
                  <div className="sw-4">
                    <CsLineIcons icon="chart-3" className="text-primary align-middle" size="17" />
                  </div>
                  <div className="h5 text-primary lh-1-5">Analytics</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Gingerbread chocolate</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Apple pie</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Wafer carrot cake</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Liquorice lemon dragée</div>
                </NavLink>
              </Card>
              <Card className="p-0 no-shadow mb-5">
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2">
                  <div className="sw-4">
                    <CsLineIcons icon="play" className="text-primary align-middle" size="17" />
                  </div>
                  <div className="h5 text-primary lh-1-5">Build</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Dragée bear claw halvah</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Chocolate cotton candy</div>
                </NavLink>
              </Card>
              <Card className="p-0 no-shadow mb-5">
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2">
                  <div className="sw-4">
                    <CsLineIcons icon="cpu" className="text-primary align-middle" size="17" />
                  </div>
                  <div className="h5 text-primary lh-1-5">Compute</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Gingerbread chocolate</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Jelly beans</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Toffee jelly-o carrot</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Oat cake gummies</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Cake gummies</div>
                </NavLink>
              </Card>
              <Card className="p-0 no-shadow mb-5">
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2">
                  <div className="sw-4">
                    <CsLineIcons icon="server" className="text-primary align-middle" size="17" />
                  </div>
                  <div className="h5 text-primary lh-1-5">Database</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Chocolate apple pie</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Brownie topping</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Jelly powder caramels</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Gingerbread</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Liquorice macaroon toffee jelly</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Dragée bear claw</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Gummies dessert oat cake</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Macaroon toffee jelly tiramisu</div>
                </NavLink>
              </Card>
              <Card className="p-0 no-shadow mb-5">
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2">
                  <div className="sw-4">
                    <CsLineIcons icon="code" className="text-primary align-middle" size="17" />
                  </div>
                  <div className="h5 text-primary lh-1-5">Functions</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Bonbon sweet roll</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Cookie candy croissant</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Bonbon dragée</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Plum chupa chups</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Donut powder gummi bears</div>
                </NavLink>
              </Card>
              <Card className="p-0 no-shadow mb-5">
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2">
                  <div className="sw-4">
                    <CsLineIcons icon="login" className="text-primary align-middle" size="17" />
                  </div>
                  <div className="h5 text-primary lh-1-5">Integration</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Caramels sweet roll</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Sesame snaps</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Gummi bears wafer brownie</div>
                </NavLink>
              </Card>
              <Card className="p-0 no-shadow mb-5">
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2">
                  <div className="sw-4">
                    <CsLineIcons icon="diagram-2" className="text-primary align-middle" size="17" />
                  </div>
                  <div className="h5 text-primary lh-1-5">Migration</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Caramels tiramisu cotton candy</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Brownie jelly-o carrot</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Tiramisu marshmallow</div>
                </NavLink>
              </Card>
              <Card className="p-0 no-shadow mb-5">
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2">
                  <div className="sw-4">
                    <CsLineIcons icon="activity" className="text-primary align-middle" size="17" />
                  </div>
                  <div className="h5 text-primary lh-1-5">Performance</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Pudding tootsie roll carrot</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Brownie cupcake</div>
                </NavLink>
              </Card>
              <Card className="p-0 no-shadow mb-5">
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2">
                  <div className="sw-4">
                    <CsLineIcons icon="shield" className="text-primary align-middle" size="17" />
                  </div>
                  <div className="h5 text-primary lh-1-5">Security</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Marshmallow gummi bears</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Topping bonbon</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Oat cake fruitcake dessert</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Dessert lemon drops topping</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Pudding tootsie roll</div>
                </NavLink>
              </Card>
              <Card className="p-0 no-shadow mb-5">
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2">
                  <div className="sw-4">
                    <CsLineIcons icon="archive" className="text-primary align-middle" size="17" />
                  </div>
                  <div className="h5 text-primary lh-1-5">Storage</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Pastry liquorice wafer sweet</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Gummi bears</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Candy canes jelly beans</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Cheesecake bear claw liquorice</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Brownie jelly-o carrot cake</div>
                </NavLink>
              </Card>
              <Card className="p-0 no-shadow mb-5">
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2">
                  <div className="sw-4">
                    <CsLineIcons icon="tool" className="text-primary align-middle" size="17" />
                  </div>
                  <div className="h5 text-primary lh-1-5">Tools</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Biscuit chocolate bar</div>
                </NavLink>
                <NavLink to="/support/docs/detail" className="d-flex flex-row mb-2 alternate-link">
                  <div className="sw-4 d-flex flex-shrink-0" />
                  <div>Sugar plum cookie cake</div>
                </NavLink>
              </Card>
            </Masonry>
          </Card.Body>
        </Card>
        {/* Api Reference End */}

        {/* Get Help Start */}
        <h2 className="small-title">Get Help</h2>
        <Row className="row-cols-1 row-cols-xl-2 row-cols-xxl-4 g-2">
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="cta-3">Stuck somewhere?</div>
                <div className="mb-3 cta-3 text-primary">Examples are available!</div>
                <div className="text-muted mb-4">Cheesecake chocolate carrot cake pie lollipop lemon toffee lollipop. Oat cake pie cake cotton.</div>
                <Button variant="outline-primary" className="btn-icon btn-icon-start stretched-link">
                  <CsLineIcons icon="handbag" /> <span>Examples</span>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="cta-3">Have a specific issue?</div>
                <div className="mb-3 cta-3 text-primary">Check the forums!</div>
                <div className="text-muted mb-4">Cheesecake chocolate carrot cake pie lollipop lemon toffee lollipop. Oat cake pie cake cotton.</div>
                <Button variant="outline-primary" className="btn-icon btn-icon-start stretched-link">
                  <CsLineIcons icon="user" /> <span>Forums</span>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="cta-3">Want to extend?</div>
                <div className="mb-3 cta-3 text-primary">Explore knowledge base!</div>
                <div className="text-muted mb-4">Cheesecake chocolate carrot cake pie lollipop lemon toffee lollipop. Oat cake pie cake cotton.</div>
                <Button variant="outline-primary" className="btn-icon btn-icon-start stretched-link">
                  <CsLineIcons icon="help" /> <span>Knowledge Base</span>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="mb-2">
              <Card.Body>
                <div className="cta-3">Still no luck?</div>
                <div className="mb-3 cta-3 text-primary">Submit a Ticket!</div>
                <div className="text-muted mb-4">Cheesecake chocolate carrot cake pie lollipop lemon toffee lollipop. Oat cake pie cake cotton.</div>
                <Button variant="outline-primary" className="btn-icon btn-icon-start stretched-link">
                  <CsLineIcons icon="send" /> <span>Tickets</span>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Get Help End */}
      </Col>
    </>
  );
};

export default SupportDocs;

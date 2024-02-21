import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Card, Nav, Tab, Dropdown } from 'react-bootstrap';
import classNames from 'classnames';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { useWindowSize } from 'hooks/useWindowSize';
import ChartStreamingLine from './components/ChartStreamingLine';

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
    <Card>
      <Card.Body>
        <div className="mb-5">
          <div className="heading mb-4">Bandwidth</div>
          <div className="sh-35">
            <ChartStreamingLine />
          </div>
        </div>
        <div className="mb-5">
          <div className="heading mb-4">Cpu</div>
          <div className="sh-35">
            <ChartStreamingLine />
          </div>
        </div>
        <div>
          <div className="heading mb-4">Disk</div>
          <div className="sh-35">
            <ChartStreamingLine />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

const ServicesDatabaseDetail = () => {
  const title = 'Database Detail';
  const description = 'Service Provider Database Detail';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Col>
        {/* Title Start */}
        <div className="page-title-container mb-3">
          <Row>
            <Col className="mb-2">
              <h1 className="mb-2 pb-0 display-4">{title}</h1>
              <div className="text-muted font-heading text-small">Donut bonbon jelly bear claw dessert marzipan.</div>
            </Col>
            <Col xs="12" sm="auto" className="d-flex align-items-center justify-content-end">
              <Button variant="outline-primary" className="btn-icon btn-icon-start w-100 w-md-auto">
                <CsLineIcons icon="code" /> <span>Connect</span>
              </Button>
            </Col>
          </Row>
        </div>
        {/* Title End */}

        <Row>
          <Col xl="4">
            {/* Info Start */}
            <h2 className="small-title">Info</h2>
            <Card className="mb-5">
              <Card.Body className="mb-n4">
                <Row className="g-0 align-items-center mb-4">
                  <Col xs="auto">
                    <div className="bg-gradient-light sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                      <CsLineIcons icon="antenna" className="text-white" />
                    </div>
                  </Col>
                  <Col className="ps-3">
                    <div className="text-small text-muted">IP</div>
                    <div>324.522.34.02</div>
                  </Col>
                </Row>
                <Row className="g-0 align-items-center mb-4">
                  <Col xs="auto">
                    <div className="bg-gradient-light sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                      <CsLineIcons icon="pin" className="text-white" />
                    </div>
                  </Col>
                  <Col className="ps-3">
                    <div className="text-small text-muted">LOCATION</div>
                    <div>West US</div>
                  </Col>
                </Row>
                <Row className="g-0 align-items-center mb-4">
                  <Col xs="auto">
                    <div className="bg-gradient-light sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                      <CsLineIcons icon="database" className="text-white" />
                    </div>
                  </Col>
                  <Col className="ps-3">
                    <div className="text-small text-muted">ENGINE</div>
                    <div>Mongodb</div>
                  </Col>
                </Row>
                <Row className="g-0 align-items-center mb-4">
                  <Col xs="auto">
                    <div className="bg-gradient-light sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                      <CsLineIcons icon="user" className="text-white" />
                    </div>
                  </Col>
                  <Col className="ps-3">
                    <div className="text-small text-muted">USERS</div>
                    <div>5</div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            {/* Info End */}

            {/* Credentials Start */}
            <h2 className="small-title">Credentials</h2>
            <Card className="mb-5">
              <Card.Body>
                <p>Tootsie roll sweet roll pudding. Pastry liquorice wafer sweet. Chocolate bar jelly sugar plum cake sesame snaps gummies lollipop.</p>
                <Button variant="outline-primary" className="btn-icon btn-icon-end">
                  <span>Show</span> <CsLineIcons icon="lock-off" />
                </Button>
              </Card.Body>
            </Card>
            {/* Credentials End */}
          </Col>

          <Col xl="8">
            <Tab.Container defaultActiveKey="Performance">
              <Nav variant="tabs" className="nav-tabs-title nav-tabs-line-title" activeKey="Performance" as={ResponsiveNav}>
                <Nav.Item>
                  <Nav.Link eventKey="Performance">Performance</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Logs">Logs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Security">Security</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Scale">Scale</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="Performance">
                  <TabContent />
                </Tab.Pane>
                <Tab.Pane eventKey="Logs">
                  <TabContent />
                </Tab.Pane>
                <Tab.Pane eventKey="Security">
                  <TabContent />
                </Tab.Pane>
                <Tab.Pane eventKey="Scale">
                  <TabContent />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default ServicesDatabaseDetail;

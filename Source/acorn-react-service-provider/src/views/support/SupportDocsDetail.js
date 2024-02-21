import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import HtmlHead from 'components/html-head/HtmlHead';

const SupportDocsDetail = () => {
  const title = 'Docs Detail';
  const description = 'Service Provider Docs Detail';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Col>
        {/* Title Start */}
        <div className="page-title-container mb-3">
          <Row>
            <Col className="mb-2">
              <h1 className="mb-2 pb-0 display-4">{title}</h1>
              <div className="text-muted font-heading text-small">Dragée pudding caramels oat cake icing muffin pudding.</div>
            </Col>
          </Row>
        </div>
        {/* Title End */}

        {/* Getting Started Start */}
        <h2 className="small-title">Getting Started</h2>
        <Card className="mb-5">
          <Card.Body>
            <div className="mb-3 heading">Basics</div>
            <div className="mb-7">
              <p>
                Fruitcake chupa chups gingerbread sweet roll pie. Tootsie roll sweet roll pudding. Pastry liquorice wafer sweet. Chocolate bar jelly sugar plum
                cake sesame snaps gummies lollipop. Oat cake gummies cheesecake cake biscuit jelly beans. Muffin cheesecake sesame snaps. Donut lollipop
                chocolate cake. Muffin cheesecake sesame snaps. Donut lollipop chocolate cake.
              </p>
              <SyntaxHighlighter language="javascript" style={docco} className="px-4 py-3 bg-light rounded-md">
                {`// Javascript Hello World!
function hello(x) {
   console.log('hello, ' + x + '!');
};
const hi = x => {
   console.log(\`hi, \${x}\`);
};
hello('world');`}
              </SyntaxHighlighter>
              <p>Powder cake gummies jelly beans toffee carrot cake bonbon powder muffin. Jujubes candy jelly-o topping lemon drops.</p>
              <SyntaxHighlighter language="javascript" style={docco} className="px-4 py-3 bg-light rounded-md">
                {`var mycar = {make: 'Honda', model: 'Accord', year: 1998};
var x = mycar.make; // x gets the value "Honda"`}
              </SyntaxHighlighter>
            </div>
            <div className="mb-3 heading">Extending</div>
            <div>
              <p>
                Candy canes jelly beans donut gummies gummi bears halvah oat cake marzipan. Bear claw apple pie dragée gummi bears soufflé toffee. Tiramisu bear
                claw jelly-o marshmallow topping jelly beans ice cream candy canes cake.
              </p>
              <SyntaxHighlighter language="javascript" style={docco} className="mb-0 px-4 py-3 bg-light rounded-md">
                {`function factorial(n) {
  if ((n === 0) || (n === 1))
    return 1;
  else
    return (n * factorial(n - 1));
  }
var a, b, c, d, e;
a = factorial(1); // a gets the value 1
b = factorial(2); // b gets the value 2
c = factorial(3); // c gets the value 6
d = factorial(4); // d gets the value 24
e = factorial(5); // e gets the value 120`}
              </SyntaxHighlighter>
            </div>
          </Card.Body>
        </Card>
        {/* Getting Started End */}

        {/* Api Reference Start */}
        <h2 className="small-title">Api Reference</h2>
        <Card>
          <Card.Body>
            <div className="mb-7">
              <div className="mb-3 heading">Properties</div>
              <p>
                Pastry liquorice wafer sweet. Chocolate bar jelly sugar plum cake sesame snaps gummies lollipop. Oat cake gummies cheesecake cake biscuit jelly
                beans. Muffin cheesecake sesame snaps. Donut lollipop chocolate cake. Muffin cheesecake sesame snaps. Donut lollipop chocolate cake. Cheesecake
                oat cake croissant topping lemon drops macaroon sweet roll. Bonbon dragée marshmallow tootsie roll cupcake croissant chocolate cake candy
                topping.
              </p>
              <Row className="g-2 py-2 px-3 rounded-md mb-2 d-none d-md-flex">
                <Col xs="3" className="text-small text-muted">
                  NAME
                </Col>
                <Col xs="2" className="text-small text-muted">
                  TYPE
                </Col>
                <Col xs="2" className="text-small text-muted">
                  DEFAULT
                </Col>
                <Col xs="5" className="text-small text-muted">
                  DESCRIPTION
                </Col>
              </Row>
              <Row className="gx-2 px-3 py-4 py-md-3 rounded-md bg-separator-light">
                <Col xs="12" md="3" className="text-primary mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">NAME</div>
                  placement
                </Col>
                <Col xs="12" md="2" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">TYPE</div>
                  string
                </Col>
                <Col xs="12" md="2" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DEFAULT</div>
                  vertical
                </Col>
                <Col xs="12" md="5" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DESCRIPTION</div>
                  Menu type, possible values are "vertical", "horizontal".
                </Col>
              </Row>
              <Row className="gx-2 px-3 py-4 py-md-3 rounded-md">
                <Col xs="12" md="3" className="text-primary mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">NAME</div>
                  behaviour
                </Col>
                <Col xs="12" md="2" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">TYPE</div>
                  string
                </Col>
                <Col xs="12" md="2" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DEFAULT</div>
                  pinned
                </Col>
                <Col xs="12" md="5" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DESCRIPTION</div>
                  Menu pin behaviour, possible values are "pinned", "unpinned".
                </Col>
              </Row>
              <Row className="gx-2 px-3 py-4 py-md-3 rounded-md bg-separator-light">
                <Col xs="12" md="3" className="text-primary mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">NAME</div>
                  layout
                </Col>
                <Col xs="12" md="2" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">TYPE</div>
                  string
                </Col>
                <Col xs="12" md="2" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DEFAULT</div>
                  fluid
                </Col>
                <Col xs="12" md="5" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DESCRIPTION</div>
                  Layout mode, possible values are "boxed", "fluid".
                </Col>
              </Row>
              <Row className="gx-2 px-3 py-4 py-md-3 rounded-md">
                <Col xs="12" md="3" className="text-primary mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">NAME</div>
                  radius
                </Col>
                <Col xs="12" md="2" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">TYPE</div>
                  string
                </Col>
                <Col xs="12" md="2" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DEFAULT</div>
                  rounded
                </Col>
                <Col xs="12" md="5" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DESCRIPTION</div>
                  Border radius of the whole template, possible values are "rounded", "standard", "flat".
                </Col>
              </Row>
              <Row className="gx-2 px-3 py-4 py-md-3 rounded-md bg-separator-light">
                <Col xs="12" md="3" className="text-primary mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">NAME</div>
                  color
                </Col>
                <Col xs="12" md="2" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">TYPE</div>
                  string
                </Col>
                <Col xs="12" md="2" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DEFAULT</div>
                  light-blue
                </Col>
                <Col xs="12" md="5" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DESCRIPTION</div>
                  Theme color, possible values are "light-blue", "light-green", "light-orange", "light-pink", "light-purple", "dark-blue", "dark-green",
                  "dark-orange", "dark-pink", "dark-purple".
                </Col>
              </Row>
              <Row className="gx-2 px-3 py-4 py-md-3 rounded-md">
                <Col xs="12" md="3" className="text-primary mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">NAME</div>
                  navcolor
                </Col>
                <Col xs="12" md="2" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">TYPE</div>
                  string
                </Col>
                <Col xs="12" md="2" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DEFAULT</div>
                  default
                </Col>
                <Col xs="12" md="5" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DESCRIPTION</div>
                  Navcolor override, possible values are default, "light", "dark".
                </Col>
              </Row>
              <Row className="gx-2 px-3 py-4 py-md-3 rounded-md bg-separator-light">
                <Col xs="12" md="3" className="text-primary mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">NAME</div>
                  secondary
                </Col>
                <Col xs="12" md="2" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">TYPE</div>
                  string
                </Col>
                <Col xs="12" md="2" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DEFAULT</div>
                  hide
                </Col>
                <Col xs="12" md="5" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DESCRIPTION</div>
                  Secondary menu visibility, possible values are "hide", "show".
                </Col>
              </Row>
              <Row className="gx-2 px-3 py-4 py-md-3 rounded-md">
                <Col xs="12" md="3" className="text-primary mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">NAME</div>
                  storagePrefix
                </Col>
                <Col xs="12" md="2" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">TYPE</div>
                  string
                </Col>
                <Col xs="12" md="2" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DEFAULT</div>
                  acorn-standard-
                </Col>
                <Col xs="12" md="5" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DESCRIPTION</div>
                  Local storage key
                </Col>
              </Row>
              <Row className="gx-2 px-3 py-4 py-md-3 rounded-md bg-separator-light">
                <Col xs="12" md="3" className="text-primary mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">NAME</div>
                  show
                </Col>
                <Col xs="12" md="2" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">TYPE</div>
                  boolean
                </Col>
                <Col xs="12" md="2" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DEFAULT</div>
                  true
                </Col>
                <Col xs="12" md="5" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DESCRIPTION</div>
                  Hides settings button and panel when set to false.
                </Col>
              </Row>
            </div>

            <div className="mb-7">
              <div className="mb-3 heading">Methods</div>
              <p>
                Dragée bear claw halvah. Ice cream chocolate cotton candy cotton candy biscuit chocolate bar powder. Sugar plum cookie cake. Tart apple pie
                sesame snaps cake biscuit cookie candy croissant. Candy canes jelly beans donut gummies gummi bears halvah oat cake marzipan. Bear claw apple
                pie dragée gummi bears soufflé toffee. Tiramisu bear claw jelly-o marshmallow topping jelly beans ice cream candy canes cake. Soufflé cheesecake
                dessert halvah lemon drops liquorice topping soufflé. Dragée bear claw halvah.
              </p>
              <p>
                Cheesecake pie dessert bear claw caramels tiramisu cotton candy. Pastry powder dragée croissant gingerbread sesame snaps. Lemon drops sesame
                snaps lemon drops chocolate bar tiramisu. Ice cream chocolate cotton candy cotton candy biscuit chocolate bar powder. Sugar plum cookie cake.
                Tart apple cookie candy croissant. Biscuit tiramisu bonbon lemon drops croissant.
              </p>
              <Row className="g-2 py-2 px-3 rounded-md mb-2 d-none d-md-flex">
                <Col xs="3" className="text-small text-muted">
                  NAME
                </Col>
                <Col xs="2" className="text-small text-muted">
                  TYPE
                </Col>
                <Col xs="2" className="text-small text-muted">
                  DEFAULT
                </Col>
                <Col xs="5" className="text-small text-muted">
                  DESCRIPTION
                </Col>
              </Row>
              <Row className="gx-2 px-3 py-4 py-md-3 rounded-md bg-separator-light">
                <Col xs="12" md="3" className="text-primary mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">NAME</div>
                  updateAttribute
                </Col>
                <Col xs="12" md="2" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">TYPE</div>
                  (id: string, value: string)
                </Col>
                <Col xs="12" md="2" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DEFAULT</div>
                  void
                </Col>
                <Col xs="12" md="5" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DESCRIPTION</div>
                  Receives an id, value and updates the attribute
                </Col>
              </Row>
              <Row className="gx-2 px-3 py-4 py-md-3 rounded-md">
                <Col xs="12" md="3" className="text-primary mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">NAME</div>
                  getAttribute
                </Col>
                <Col xs="12" md="2" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">TYPE</div>
                  (attribute: string)
                </Col>
                <Col xs="12" md="2" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DEFAULT</div>
                  string
                </Col>
                <Col xs="12" md="5" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DESCRIPTION</div>
                  Receives an id and returns attribute
                </Col>
              </Row>
            </div>

            <div className="mb-7">
              <div className="mb-3 heading">Events</div>
              <p>
                Topping cotton candy halvah marshmallow jujubes chupa chups macaroon cookie croissant. Marshmallow tiramisu marshmallow gummi bears dragée oat
                cake fruitcake dessert. Topping bonbon gingerbread chocolate apple pie cheesecake liquorice muffin pudding. Jelly beans marshmallow dessert
                biscuit biscuit gummies ice cream chupa chups cotton candy.
              </p>
              <Row className="g-2 py-2 px-3 rounded-md mb-2 d-none d-md-flex">
                <Col xs="3" className="text-small text-muted">
                  NAME
                </Col>
                <Col xs="4" className="text-small text-muted">
                  DETAIL
                </Col>
                <Col xs="5" className="text-small text-muted">
                  DESCRIPTION
                </Col>
              </Row>
              <Row className="gx-2 px-3 py-4 py-md-3 rounded-md bg-separator-light">
                <Col xs="12" md="3" className="text-primary mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">NAME</div>
                  Globals.menuPlacementChange
                </Col>
                <Col xs="12" md="4" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DETAIL</div>
                  (value: string)
                </Col>
                <Col xs="12" md="5" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DESCRIPTION</div>
                  Fired when placement value changes. Carries value in detail variable.
                </Col>
              </Row>
              <Row className="gx-2 px-3 py-4 py-md-3 rounded-md">
                <Col xs="12" md="3" className="text-primary mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">NAME</div>
                  Globals.menuBehaviourChange
                </Col>
                <Col xs="12" md="4" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DETAIL</div>
                  (value: string)
                </Col>
                <Col xs="12" md="5" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DESCRIPTION</div>
                  Fired when behaviour value changes. Carries value in detail variable.
                </Col>
              </Row>
              <Row className="gx-2 px-3 py-4 py-md-3 rounded-md bg-separator-light">
                <Col xs="12" md="3" className="text-primary mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">NAME</div>
                  Globals.colorAttributeChange
                </Col>
                <Col xs="12" md="4" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DETAIL</div>
                  (value: string)
                </Col>
                <Col xs="12" md="5" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DESCRIPTION</div>
                  Fired when color value changes. Carries value in detail variable.
                </Col>
              </Row>
              <Row className="gx-2 px-3 py-4 py-md-3 rounded-md">
                <Col xs="12" md="3" className="text-primary mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">NAME</div>
                  Globals.borderRadiusChange
                </Col>
                <Col xs="12" md="4" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DETAIL</div>
                  (value: string)
                </Col>
                <Col xs="12" md="5" className="text-alternate mb-3 mb-md-0">
                  <div className="text-small text-muted d-block d-md-none">DESCRIPTION</div>
                  Fired when border radius changes. Carries value in detail variable.
                </Col>
              </Row>
            </div>
          </Card.Body>
        </Card>
        {/* Api Reference End */}
      </Col>
    </>
  );
};

export default SupportDocsDetail;

import { H3, H4 } from "../../../../AbstractElements";
import { CartEmpty, ExploreShortlistItems } from "../../../../Constant";
import { Col, Container, Row } from "reactstrap";

const EmptyCart = () => {
  return (
      <section className="cart-section section-b-space">
        <Container fluid={true}>
          <Row>
            <Col sm="12">
              <div>
                <Col sm="12" className="empty-cart-cls text-center">
                  <H3>
                    <strong>{CartEmpty}</strong>
                  </H3>
                  <H4>{ExploreShortlistItems}</H4>
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
};
export default EmptyCart;

import { useState } from 'react';
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import {  P } from '../../../../AbstractElements';
import HeadingCommon from '../../../../Common/HeadingCommon';

const PillDangerTab = () => {
const span =`Add <code>.nav-danger</code> class with nav class`
  const [dangerTab, setdangerTab] = useState('1');

  return (
    <Col sm="12" xl="6 xl-100">
      <Card className="height-equal">
      <HeadingCommon Heading="Danger Color" dangerouslySetInnerHTML={span} />
        <CardBody>
          <Nav className="nav-danger">
            <NavItem><NavLink href="#javascript" className={dangerTab === '1' ? 'active' : ''} onClick={() => setdangerTab('1')}><i className="icofont icofont-ui-home"></i>Home</NavLink></NavItem>
            <NavItem ><NavLink href="#javascript" className={dangerTab === '2' ? 'active' : ''} onClick={() => setdangerTab('2')}><i className="icofont icofont-man-in-glasses"></i>Profile</NavLink></NavItem>
            <NavItem><NavLink href="#javascript" className={dangerTab === '3' ? 'active' : ''} onClick={() => setdangerTab('3')}><i className="icofont icofont-contacts"></i>Contact</NavLink></NavItem>
          </Nav>
          <TabContent activeTab={dangerTab}>
            <TabPane className="fade show" tabId="1">
              <P  className= 'mb-0 m-t-30' >{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,It has survived not only five'}</P>
            </TabPane>
            <TabPane tabId="2">
              <P  className= 'mb-0 m-t-30' >{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'}</P>
            </TabPane>
            <TabPane tabId="3">
              <P  className= 'mb-0 m-t-30' >{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'}</P>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillDangerTab;
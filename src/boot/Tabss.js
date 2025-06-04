import {useState} from 'react'
import { Container, Row, Col, Nav, Tab, Tabs } from "react-bootstrap";

function Tabss(){
//상태관리는 최상단에 사용해야 됩니다
const [key, setKey] = useState('home');

    return(
        <>
 <Container fluid>
    <Row>
    <Col md={4}>
<h1 className="mt-4 mb-3">Basic</h1>
<Tabs
activeKey={key}
onSelect={(k) => setKey(k)}
className='mb-3'
>
    <Tab eventKey="home" title="Home">
        sweet h..
    </Tab>

    <Tab eventKey="profile" title="Profile">
        sweet p..
    </Tab>

    <Tab eventKey="contact" title="Contact">
        sweet C..
    </Tab>
</Tabs>
    </Col>
    <Col md={4}>
<h1 className="mt-4 mb-3">justify</h1>
<Tabs
defaultActiveKey="profile"
className='mb-3'
fill
>
<Tab eventKey="home" title="Home">Home</Tab>
<Tab eventKey="profile" title="Profile">Profile</Tab>
<Tab eventKey="longer" title="Longer">Longer</Tab>
<Tab eventKey="contact" title="Contact">Contact</Tab>
</Tabs>
    </Col>
    <Col md={4}>
<h1 className="mt-4 mb-3">pills</h1>
<Tab.Container defaultActiveKey="first">
<Row>
    <Col sm={3}>
<Nav variant="pills" className='flex-column'>
    <Nav.Item>
        <Nav.Link eventKey="first">Tab 1</Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link eventKey="second">Tab 2</Nav.Link>
    </Nav.Item>
</Nav>
    </Col>
    <Col sm={9}>
    <Tab.Content>
        <Tab.Pane eventKey="first">first content</Tab.Pane>
        <Tab.Pane eventKey="second">Second content</Tab.Pane>
    </Tab.Content>
    </Col>
</Row>
</Tab.Container>
    </Col>
    </Row>
</Container> 
    
        </>


    );
}
export default Tabss;
import {useState} from 'react'
import { Container, Row, Col, Nav, Tab, Tabs } from "react-bootstrap";

function Tabss(){
//상태관리는 최상단에 사용해야 됩니다
const [key, setKey] = useState('home');

    return(
        <>
 <Container>
    <Row>
    <Col md={4}>
<h1>Basic</h1>
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
<h1></h1>
    </Col>
    <Col md={4}>
<h1></h1>
    </Col>
    </Row>
</Container> 
<Tab.Container>

</Tab.Container>      
        </>


    );
}
export default Tabss;
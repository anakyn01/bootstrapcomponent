import {Accordion, Container, Row, Col} from 'react-bootstrap';

const Acc = () => {
    return(
<>
<Container>
    <Row>
        <Col>
<Accordion defaultActiveKey="0">
    
    <Accordion.Item eventKey="0">
        <Accordion.Header>Item 1</Accordion.Header>
        <Accordion.Body>
        Adipisicing enim in laborum consequat laborum aliquip commodo elit cupidatat ullamco est Lorem. Cillum consequat nulla reprehenderit proident amet cillum dolore. Irure dolor voluptate aliquip enim aute consequat anim cillum quis magna aliquip amet. Proident adipisicing pariatur elit nulla proident culpa adipisicing quis sint labore in. Aute occaecat elit Lorem eu veniam in. Ipsum ex qui irure non Lorem eiusmod veniam eu laborum mollit consequat non qui.
        Ullamco pariatur ad eu aute nulla eu labore laborum sit veniam duis. Incididunt adipisicing laborum minim ipsum culpa qui Lorem qui. Labore dolore deserunt id ullamco est aute labore excepteur culpa do. Anim enim laboris in sint occaecat ut ea. Amet nostrud anim do ex proident sunt. Incididunt dolore quis esse incididunt ea eu magna proident qui ipsum.
        </Accordion.Body>
    </Accordion.Item>

    <Accordion.Item eventKey="1">
        <Accordion.Header>Item 2</Accordion.Header>
        <Accordion.Body>
        Adipisicing enim in laborum consequat laborum aliquip commodo elit cupidatat ullamco est Lorem. Cillum consequat nulla reprehenderit proident amet cillum dolore. Irure dolor voluptate aliquip enim aute consequat anim cillum quis magna aliquip amet. Proident adipisicing pariatur elit nulla proident culpa adipisicing quis sint labore in. Aute occaecat elit Lorem eu veniam in. Ipsum ex qui irure non Lorem eiusmod veniam eu laborum mollit consequat non qui.
        Ullamco pariatur ad eu aute nulla eu labore laborum sit veniam duis. Incididunt adipisicing laborum minim ipsum culpa qui Lorem qui. Labore dolore deserunt id ullamco est aute labore excepteur culpa do. Anim enim laboris in sint occaecat ut ea. Amet nostrud anim do ex proident sunt. Incididunt dolore quis esse incididunt ea eu magna proident qui ipsum.
        </Accordion.Body>
    </Accordion.Item>

</Accordion>        
        </Col>
    </Row>
</Container>
</>
    );
}

export default Acc;
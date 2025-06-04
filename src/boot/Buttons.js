import {Button, ButtonGroup, Container, Row, Col} from 'react-bootstrap';

const Buttons = () => {
    return(
        <>
<Container>
    <Row>
        <Col sm={4}>
<Button variant='primary'>primary</Button><br/>
<Button variant='secondary'>secondary</Button><br/>
<Button variant='success'>success</Button><br/>
<Button variant='warning'>warning</Button><br/>
<Button variant='danger'>danger</Button><br/>
<Button variant='info'>info</Button><br/>
<Button variant='light'>light</Button><br/>
<Button variant='dark'>dark</Button><br/>
<Button variant='link'>link</Button><br/>
        </Col>
        <Col sm={4}>
<Button variant='outline-primary'>primary</Button><br/>
<Button variant='outline-secondary'>secondary</Button><br/>
<Button variant='outline-success'>success</Button><br/>
<Button variant='outline-warning'>warning</Button><br/>
<Button variant='outline-danger'>danger</Button><br/>
<Button variant='outline-info'>info</Button><br/>
<Button variant='outline-light'>light</Button><br/>
<Button variant='outline-dark'>dark</Button><br/>
        </Col>
        <Col sm={4}>
<h1>Button group</h1>
<ButtonGroup>
    <Button variant='outline-primary' size='sm'>write</Button>
    <Button variant='outline-success'>edit</Button>
    <Button variant='outline-danger' size='lg'>delete</Button>
</ButtonGroup>
        </Col>
    </Row>
</Container>
        </>
    );
}
export default Buttons;
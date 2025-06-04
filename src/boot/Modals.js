import {useState} from 'react';
import {Button, Modal,
Container, Row, Col
} from 'react-bootstrap';

const Modals = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
<>
<Container>
    <Row>
        <Col>
<Button variant='primary' onClick={handleShow}>open</Button>

<Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
        <Modal.Title>modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>Proident veniam aute dolor amet.</Modal.Body>
    <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
            Close
        </Button>
        <Button variant='primary' onClick={handleClose}>
            save changes
        </Button>
    </Modal.Footer>
</Modal>
        </Col>
    </Row>
</Container>
</>
    );
}
export default Modals;
import { Container, Row, Col } from "react-bootstrap";

const Layer = () => {
    return(
<Container>
    <Row>
        <Col md={3}>
        <h1>basic</h1>
<button 
className="btn btn-primary" 
data-bs-toggle="modal"
data-bs-target="#one"
>기본 모달열기</button>

<div className="modal" id="one">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h4 className="modal-title">heading</h4>
                <button className="btn-close"
                data-bs-dismiss="modal"
                ></button>
            </div>
            <div className="modal-body">
                .....
            </div>
            <div className="modal-footer">
                <button className="btn btn-danger"
                data-bs-dismiss="modal"
                >
                close
                </button>
            </div>
        </div>
    </div>
</div>
        </Col>
        <Col md={3}>
        <h1></h1>
        </Col>
        <Col md={3}>
        <h1></h1>
        </Col>
        <Col md={3}>
        <h1></h1>
        </Col>
    </Row>
</Container>
    );
}
export default Layer;
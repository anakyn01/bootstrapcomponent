import { Container, Row, Col } from "react-bootstrap";

const Btn = () => {
    return(
<>
<Container>
    <Row>
        <Col md={3}>
<h1 className="my-5">일반버튼</h1>
<button className="btn ">btn</button><br/>
<button className="btn btn-primary">btn-primary</button><br/>
<button className="btn btn-secondary">btn-secondary</button><br/>
<button className="btn btn-success">btn-success</button><br/>
<button className="btn btn-info">btn-info</button><br/>
<button className="btn btn-warning">btn-warning</button><br/>
<button className="btn btn-danger">btn-danger</button><br/>
<button className="btn btn-light">btn-light</button><br/>
<button className="btn btn-link">btn-link</button>
        </Col>
        <Col md={3}>
<h1 className="my-5">테두리버튼</h1>
<button className="btn btn-outline-primary">btn-outline-primary</button><br/>
<button className="btn btn-outline-secondary">btn-outline-secondary</button><br/>
<button className="btn btn-outline-warning">btn-outline-warning</button><br/>
<button className="btn btn-outline-danger">btn-outline-danger</button><br/>
<button className="btn btn-outline-success">btn-outline-success</button><br/>
<button className="btn btn-outline-dark">btn-outline-dark</button><br/>
<button className="btn btn-outline-info">btn-outline-info</button><br/>
<button className="btn btn-outline-light text-dark">btn-outline-light</button><br/>
        </Col>
        <Col md={3}>
<h1 className="my-5">블록버튼</h1>
<div className="d-grid">
<button className="btn btn-warning btn-block">블록버튼</button>
</div>
        </Col>
        <Col md={3}>
<h1 className="my-5">버튼사이즈</h1>
<button className="btn btn-danger ">노멀</button>
<button className="btn btn-danger btn-lg">큰</button>
<button className="btn btn-danger btn-sm">작은</button>

        </Col>
    </Row>
    <Row>
        <Col>
        <h1>버튼 그룹</h1>
<div className="d-flex justify-content-end my-5">
    <div className="btn-group">
        <button className="btn btn-outline-primary">쓰기</button>
        <button className="btn btn-outline-success">수정</button>
        <button className="btn btn-outline-danger">삭제</button>
    </div>
</div>
        </Col>
    </Row>
</Container>
</>
    );
}
export default Btn;
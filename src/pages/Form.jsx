import { Container, Row, Col } from "react-bootstrap";

const Form = () => {
    return(
<>
<Container fluid>{/*<div class="container-fluid">*/}
    <Row>
<Col md={2}>
<h1>select</h1>
<select name="" id="" className="form-select">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
</select>
</Col> 
<Col md={2}>
</Col>
<Col md={2}>
</Col>
<Col md={2}>
</Col>
<Col md={2}>
</Col>
<Col md={2}>
</Col>       
    </Row>
    <Row>
        <Col md={12}>
        <h1>form 반응형으로 만들기</h1>
        </Col>
    </Row>
    <Row>
<Col sm={6}>
<input type="text" className="form-control" placeholder="Enter email"/>
</Col>
<Col sm={6}>
<input type="password" className="form-control" placeholder="Enter Password"/>
</Col>
    </Row>
    <Row>
        <Col md={4}>
<h1>Color Picker</h1>
<input type="color" className="form-control form-control-color" value="#ccc"/>
        </Col>
        <Col md={4}>
<h1>Stacked Form</h1>
<form action="/action.js" method="post">
<div className="mb-3 mt-3">
    <label htmlFor="email">Email :</label>'
    <input type="email" 
    className="form-control" 
    id="email" 
    placeholder="아이디로 이메일을 적어주세요" 
    name="email"/>
</div>

<div className="mb-3 mt-3">
    <label htmlFor="pwd">password :</label>'
    <input type="password" 
    className="form-control" 
    id="pwd" 
    placeholder="패스워드를 입력해 주세요" 
    name="pwd"/>
</div>

<div className="form-check mb-3">
    <label className="form-check-label">
        <input type="checkbox" 
        name="remember" 
        className="form-check-input"/>Remember me
    </label>
</div>
<input type="submit" className="btn btn-primary" value="전송"/>
</form>
        </Col>
        <Col md={4}>
<div className="mb-3 mt-3">
    <label htmlFor="comment">Comments:</label>
<textarea className="form-control" rows="5" id="comment" name="text">내용을 적어 주세요</textarea>
</div>
        </Col>
    </Row>
</Container>
</>
    );
}
export default Form;
import { Container, Row, Col } from "react-bootstrap";

const Form = () => {
    return(
<>
<Container fluid>{/*<div class="container-fluid">*/}
<Row>
    <Col sm={6}>
<h1>form-floating</h1>
<div className="form-floating mb-3 mt-3">
    <input type="text" className="form-control" />
    <label htmlFor="email">Email</label>
</div>
<div className="form-floating mb-3 mt-3">
<textarea className="form-control" id="coment" name="text"></textarea>
    <label htmlFor="comment">Comments</label>
</div>
    </Col>
    <Col sm={6}>
<h1>Validation</h1>
<form action="" className="was-validated">
    <div className="">
        <label htmlFor="">이름 :</label>
        <input type="text" className="form-control" name="" required/>
        <div className="valid-feedback">Okay</div>
        <div className="invalid-feedback">잘못됨</div>
    </div>
</form>
    </Col>
</Row>
<Row>
    <Col sm={4}>
    <div className="input-group mb-3">
        <span className="input-group-text">One</span>
        <span className="input-group-text">Two</span>
        <span className="input-group-text">Three</span>
        <input type="text" className="form-control"/>
    </div>
    </Col>
    <Col sm={4}>
    <h1>이름쓰기</h1>
<div className="input-group mt-3 mb-3">
    <span className="input-group-text">Person</span>
    <input type="text" className="form-control" placeholder="First Name"/>
    <input type="text" className="form-control" placeholder="Last Name"/>
</div>
    </Col>
    <Col sm={4}>
    <h1>check</h1>
    <div className="input-group">
        <div className="input-group-text">
            <input type="checkbox" />
        </div>
        <input type="text" className="form-control" placeholder="Some text"/>
    </div>
    </Col>
</Row>

    <div className="row">
        <div className="col-md-4">
            <h1>Input Group</h1>
<div className="input-group">
    <span className="input-group-text">@</span>
    <input type="text" className="form-control" placeholder="Username"/>
</div>
        </div>
        <div className="col-md-4">
<div className="input-group">
    <input type="text" className="form-control" placeholder="Your Email"/>
    <span className="input-group-text">@example.com</span>    
</div>
        </div>
        <div className="col-md-4">
<h1>Input Group Size</h1>
<div className="input-group input-group-lg">
    <input type="text" className="form-control" placeholder="Your Email"/>
    <span className="input-group-text">@example.com</span>    
</div>            
        </div>
    </div>
    <Row>
<Col md={2}>
<h1>select</h1>
<select name="" id="" className="form-select form-select-lg">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
</select>
</Col> 
<Col md={2}>
<h1>select</h1>
<select multiple name="" id="" className="form-select">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
</select>
</Col>
<Col md={2}>
<h1>datalist</h1>
<label htmlFor="browser" className="form-label">
    좋아하는 브라우저를 적어주세요
</label>
<input className="form-control" list="browsers" name="browser" id="browser"/>
<datalist id="browsers">
    <option value={"Edge"}/>
    <option value={"Firefox"}/>
    <option value={"Chrome"}/>
    <option value={"Opera"}/>
    <option value={"Safari"}/>
</datalist>
</Col>
<Col md={2}>
<h1>Checkboxes</h1>
<div className="form-check">
    <input type="checkbox" className="form-check-input" id="check1" checked/>
    <label className="form-check-label" htmlFor="check1">man</label>
</div>
<div className="form-check">
    <input type="checkbox" className="form-check-input" id="check2"/>
    <label className="form-check-label" htmlFor="check2">woman</label>
</div>
<h1>Radio buttons</h1>
<div className="form-check">
    <input type="radio" className="form-check-input" id="radio1" checked/>
    <label className="form-check-label" htmlFor="radio1">man</label>
</div>
<div className="form-check">
    <input type="radio" className="form-check-input" id="radio2"/>
    <label className="form-check-label" htmlFor="radio2">woman</label>
</div>
</Col>
<Col md={2}>
<h1>Toggle Switch</h1>
<div className="form-check form-switch">
<input className="form-check-input" 
type="checkbox" id="mySwitch" 
name="darkmode" 
value="yes" 
checked/>
<label className="form-check-label" for="mySwitch"></label>
</div>
</Col>
<Col md={2}>
<h1>Range</h1>
<label htmlFor="customRange" className="form-label">
    Custom range
</label>
<input type="range" 
className="form-range" 
id="customRange"
step="10"
name="points"/>
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
import { Container, Row, Col } from "react-bootstrap";

const Cards = () => {
    return(
<>
<Container>
    <Row>
<Col sm={3}>
<h1>basic</h1>
<div className="card">
    <div className="card-body">Basic card</div>
</div>
</Col>
<Col sm={3}>
<h1 className="h3">header and footer</h1>
<div className="card">
    <div className="card-header">header</div>
    <div className="card-body">Content</div>
    <div className="card-footer">Footer</div>
</div>
</Col>
<Col sm={3}>
<h1 className="h3">title text and links</h1>
<div className="card">
    <div className="card-body">
        <h4 className="card-title">Card title</h4>
        <p className="card-text">Lorem ipsum dolor sit amet.</p>
        <a href="#" className="card-link">card link</a>
        <a href="#" className="card-link">Another link</a>
    </div>
</div>
</Col>
<Col sm={3}>
<h1>card image</h1>
<div className="card">
    <img src="../img/img_avatar1.png" alt="" className="card-img-top"/>
<div className="card-body">
    <h4 className="card-title">hyi</h4>
    <p className="card-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, asperiores!
    </p>
    <a href="#" className="btn btn-outline-primary">more</a>
    
</div>
<img src="../img/img_avatar6.png" alt="" className="card-img-bottom"/>
</div>
</Col>
    </Row>
</Container>
</>
    );
}
export default Cards;
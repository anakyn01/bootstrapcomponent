import {Container, Row, Col} from 'react-bootstrap';

const Progress = () => {
    return(
        <>
<Container>
    <Row>
        <Col md={3}>
        <h1>Basic</h1>
    <div className="progress">{/*style=width:70%; */}
        <div className="progress-bar" style={{width:"70%"}}>70%</div>
    </div>        
        </Col>
        <Col md={3}>
        <h1>Striped</h1>
<div className="progress">{/*style=width:70%; */}
<div className="progress-bar bg-warning progress-bar-striped" style={{width:"70%"}}>70%</div>
</div> 
        </Col>
        <Col md={3}>
<h1>Animated</h1>
<div className="progress">
<div className="progress-bar bg-success progress-bar-striped progress-bar-animated" 
style={{width:"70%"}}>70%</div>
</div>
        </Col>
        <Col md={3}>
        <h1>Multiple </h1>
<div className="progress">
<div className="prpgress-bar bg-success" style={{width:"40%"}}>free</div>
<div className="prpgress-bar bg-warning" style={{width:"10%"}}>warning</div>
<div className="prpgress-bar bg-danger" style={{width:"20%"}}>danger</div>
</div>
        </Col>
    </Row>
    <Row>
<Col md={3}>
<h1>basic</h1>
<div className="spinner-border"></div>
</Col>  
<Col md={3}>
<h1>color</h1>
<div class="spinner-border text-muted"></div>
  <div class="spinner-border text-primary"></div>
  <div class="spinner-border text-success"></div>
  <div class="spinner-border text-info"></div>
  <div class="spinner-border text-warning"></div>
  <div class="spinner-border text-danger"></div>
  <div class="spinner-border text-secondary"></div>
  <div class="spinner-border text-dark"></div>
  <div class="spinner-border text-light"></div>
</Col>
<Col md={3}>
<h1>Growing</h1>
<div className="spinner-grow text-muted"></div>
<div className="spinner-grow text-muted spinner-grow-sm"></div>
</Col>  
<Col md={3}>
<h1>Spinner Button</h1>
<button className='btn btn-success'>
    <span className='spinner-border spinner-border-sm'></span>
    btn
</button><br/>
<button className='btn btn-danger '>
<span className='spinner-border spinner-border-sm'></span>
피젯스피너
</button>
</Col>    
    </Row>
</Container>
        </>
    )
}
export default Progress;
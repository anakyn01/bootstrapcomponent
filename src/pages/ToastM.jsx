import React,{useState} from 'react';
import { Container, Row, Col, Toast, Button } from "react-bootstrap";

const ToastM = () => {

    const [showA, setShowA] = useState(true)
    const [showB, setShowB] = useState(true)

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);

    return(
<>
<Container>
    <Row>
        <Col md={3}>
<h1>show</h1>
<div className="toast show">
    <div className="toast-header">
        <strong class="me-auto">
            이삭토스트
        </strong>
        <button className="btn-close" data-bs-dismiss="toast"></button>
    </div>
    <div className="toast-body">
        Lorem ipsum dolor sit amet.
    </div>
</div>
        </Col>
        <Col md={3}>
<h1>리액트에서 스크립트를 사용할때는 우리가 알고 있는 것과 다르다</h1>
<button className="btn btn-warning" id="toastbtn">show Toast</button>
<div className="toast">
    <div className="toast-header">
        <strong class="me-auto">
            이삭토스트
        </strong>
        <button className="btn-close" data-bs-dismiss="toast"></button>
    </div>
    <div className="toast-body">
        Lorem ipsum dolor sit amet.
    </div>
</div>
{/*<script> 리액트에서 기존에  html하는 스크립트 넣은 방법으로는 리액트에서 스크립트를 사용할수 없다
    document.getElementById("toastbtn").onclick= function(){
        let toastElList = [].slice.call(document.querySelectorAll('.toast'))
    }
</script>*/}
        </Col>
        <Col md={3}>
        <h1>최초 리액트 부트스트랩 사용</h1>
<Button 
variant='success'
onClick={toggleShowA}
className='mb-2'
>
Toggle Toast <strong>with</strong> Animation
</Button>
<Toast show={showA} onClose={toggleShowA}>
    <Toast.Header>
        <h2>헤더이므니다</h2>
    </Toast.Header>
    <Toast.Body>lorem ....
    </Toast.Body>
</Toast>
        </Col>
        <Col md={3}></Col>
    </Row>
</Container>
</>
    );
}

export default ToastM;
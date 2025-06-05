import {useState} from 'react';
import {Form, Toast, ToastContainer, Container, Row, Col} from 'react-bootstrap'

const Ts = () => {

    const [position, setPosition] = useState('top-start');
    //셀렉트 박스로 포지션 변경을 하는데 최초에 페이지가 로드될때 상단에 왼쪽이 초기값

    return(
<>
<Container fluid>
    <Row>
<Col lg="12" md="12" sm="12">
<h1 className='mt-4 mb-2'>셀렉트박스로 토스트 포지션 변경</h1>
<label htmlFor="selectToastPlacement">토스트 포지션</label>
<Form.Select onChange={(e) => setPosition(e.currentTarget.value)}>
{[
'top-start','top-center','top-end','middle-start','middle-center',
'middle-end','bottom-start','bottom-center','bottom-end',    
].map((p) => (
    <option key={p} value={p}>
        {p}
    </option>
))}
</Form.Select>

{/*토스트 생성 */}
<div
className='bg-dark position-relative'
style={{minHeight:'240px'}}
>
<ToastContainer
className='p-3' position={position}
style={{ zIndex: 1}}
>
<Toast>
    <Toast.Header closeButton={false}>
        <strong className='me-auto'>이삭</strong>
    </Toast.Header>
    <Toast.Body>Incididunt fugiat duis qui aliqua enim officia aute sunt incididunt consectetur fugiat velit.</Toast.Body>
</Toast>
</ToastContainer>
</div>
</Col>        
    </Row>
</Container>
</>
    );
}

export default Ts;
/*
.map() : 자바스크립트에서 배열의 각 요소를 순회하면서 콜백함수를 
적용하고 그결과를 새로운 배열을 만들어 반환하는 매서드
특징 원래 배열상태가 바뀌지 않는다
*/
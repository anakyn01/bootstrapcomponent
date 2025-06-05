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
]}
</Form.Select>
</Col>        
    </Row>
</Container>
</>
    );
}

export default Ts;
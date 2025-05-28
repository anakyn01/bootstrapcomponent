import {Container, Row, Col} from "react-bootstrap";

const Home = () => {
    return(
<>
<Container>
    <Row>
        <Col lg={12} md={12} sm={6}>
<h1 className="mt-3 mb-2">What is React?</h1>
<pre>
- javascript 라이브러리 입니다
- facebook 엔지니어 조던 워크가 개발
- reactjs와 네이티브 두가지 종류가 있음
- UI 구성요소를 구축하기 위한 도구
- SPA    
- 필요한 것만 변경하여 메모리 소요가 적다
- 리액트를 사용하려면 npm이 필요합니다
- 리액트 18버전 설치 
npm i react@latest react-dom@latest

<code>
import ReactDOM from 'react-dom';
ReactDOM.render(, document.getElementById('root'));
</code>
<code>
// After
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render();
</code>
</pre>
        </Col>
    </Row>
</Container>
</>
    );
}
export default Home;
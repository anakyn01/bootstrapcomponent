import { Container, Row, Col } from "react-bootstrap";

const Ref = () => {
    return(
        <>
<Container>
    <Row>
        <Col>
<h1 className="mt-4 mb-2">useRef Hook</h1>
<p>
- useRef를 사용하면 렌더링간에 값을 유지 할수 있다
- 업데이트시에 다시 렌더링을 발생시키지 않는 변경 가능한 값을 저장하는데 사용할수 있습니다
- 불필요한 렌더링을 방지하기 위해 사용
</p>
        </Col>
    </Row>
</Container>
        </>
    )
}

export default Ref;
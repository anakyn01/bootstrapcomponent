import { Container, Row, Col } from "react-bootstrap";
import React, {useState, useEffect} from "react";//함수형 컴포넌트에 상태를 추적합니다
//hook useEffect를 사용하면 컴포넌트에 부수적인 작용을 수행할수 있다[데이터,타이머 등]
const Effect = () => {

    const[count, setCount] = useState(0);//초기값이 0
    const[calculation, setCalculation] = useState(0);

    useEffect(() => {
        /*setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);*/
        setCalculation(() => count * 2);
    },[count]);/* empty 브라켓을 사용해야됨*/

    return(
        <>
   <Container>
        <Row>
            <Col md={12}>
            <h1>I've rendered {count} times!</h1>
<button onClick={() => setCount((c) => c + 1 )} className="btn btn-outline-success">
+
</button>      
<p className="display-1 text-success">Calculation:{calculation}</p>      
            </Col>
        </Row>
    </Container>
        </>
    )
}
export default Effect;
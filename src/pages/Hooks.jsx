import { Container, Row, Col } from "react-bootstrap";
//hooks
import React, {useState} from "react";//함수형 컴포넌트에 상태를 추적합니다

const Hooks = () => {

const [car, setCar] = useState({
    brand : "빈폴",
    model : "리어카",
    year : "1960",
    color: "black"
})

const updateColor = () => {
    setCar(previousState => {
        return{...previousState, color:"violet"}
    })
}

const [color, setColor] = useState("red");

    return(
<>
<Container>
    <Row>
        <Col md={12}>
<button onClick={updateColor}>violet</button>       
<h1>리액트에 이론에 가장 중요한 메모리 소요방지 ...[자바스크립트의 스프레드 연산자]</h1>
<p>state가 업데이트 되면 전체 상태를 덮어쒸운다 변경되는 것만 덮어쒸울때 ..</p>

<h2>My {car.brand}</h2>   
<p>It is a {car.color} {car.model} from {car.year}.</p>     
<h1>My favorite color is <span className="text-danger">{color}</span>!</h1>
<p>
    <button 
    className="btn btn-primary"
    onClick={()=> setColor("blue")}
    >파랑색으로 </button>
</p>
<p>
<button 
    className="btn btn-danger"
    onClick={()=> setColor("red")}
    >빨강색으로 </button>
</p>
<p>
<button 
    className="btn btn-danger"
    onClick={()=> setColor("pink")}
    >pink </button>
</p>
<h1>후크</h1>
<pre>
- react 16.8버전에서 추가 되었습니다<br/>
- hooks를 사용하면 함수형 컴포넌트가 상태 및 기타 React기능에 접근할수 있습니다<br/>
- 이로 인해 클래스형 컴포넌트는 더이상 필요하지 않지만<br/>
- 후크에 3가지 규칙 -
1) 함수형 컴포넌트 내부에서만  호출될수 있습니다
2) 구성요소의 최상위 레벨에서만 호출될수 있습니다
3) 조건적일수 없습니다
</pre>
        </Col>
    </Row>
</Container>
</>
    );
}
export default Hooks;
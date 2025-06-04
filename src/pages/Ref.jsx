import{useState, useEffect, useRef} from 'react';
/*
useState : 상태를 관리하는 훅 입니다
useEffect : 특정상태가 변경될때 어떤 부수효과(side effect) 를 실행하기 위한 훅
useRef : 참조값을 저장하는 훅으로 렌더링 간에 값이 유지되지만 변경되어도 리렌더링이 발생하지 
않습니다
*/
import { Container, Row, Col } from "react-bootstrap";

const Ref = () => {
const [inputValue, setInputValue] = useState("");
//inputValue 현재 인풋박스의 값입니다, setInputValue값을 변경하는 함수
//useState(""); 초기값은 빈 문자열 입니다
const previousInputValue = useRef("");
//컴포넌트가 리렌더링 되어도 변하지 않는 참조 객체입니다
//const count = useRef(0);

useEffect(() => {
    //count.current = count.current + 1;
    previousInputValue.current = inputValue;
},[inputValue]);
/*current 사용하여 이전 입력 값을 저장합니다
inputValue가 변경될때 마다 useEffect가 실행됩니다
현재 입력값을 previousInputValue.current에 저장합니다
따라서 렌더링 중에는 직전 입력 값을 참조할수 있습니다
*/

    return(
        <>
<Container>
    <Row>
        <Col>
<input type="text" 
value={inputValue} 
onChange={(e) => setInputValue(e.target.value)}
className='form-control my-5'
/>
<h1>현재값 : {inputValue}</h1>
<h1>이전값 : {previousInputValue.current}</h1>
<h1 className="mt-4 mb-2">useRef Hook</h1>
<p>
- useRef를 사용하면 렌더링간에 값을 유지 할수 있다
- 업데이트시에 다시 렌더링을 발생시키지 않는 변경 가능한 값을 저장하는데 사용할수 있습니다
- 불필요한 렌더링을 방지하기 위해 사용
- 상태변경을 추적할수 있습니다
</p>
        </Col>
    </Row>
</Container>
        </>
    )
}

export default Ref;
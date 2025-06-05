import ReactDOM from 'react-dom/client';
//라우터 선언
import {BrowserRouter, Routes, Route} from "react-router-dom";
//부트스트랩을 사용하기 위한 cdn선언
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './include/Header';
import Home from './pages/Home';
import Cont from './pages/Cont';
import Typo from './pages/Typo';
import Color from './pages/Color';
import TableRef from './pages/Table';
import Img from './pages/Img';
import Jumbo from './pages/Jumbo';
import Alerts from './pages/Alerts';
import Btn from './pages/Btn';
import Badges from './pages/Badges';
import Progress from './pages/Progress';
import Cards from './pages/Cards';
import Layer from './pages/Layer';
import ToastM from './pages/ToastM';
import Pagination from './pages/Pagination';
import List from './pages/List';
import Collapse from './pages/Collapse';
import Form from './pages/Form';
import Flex from './pages/Flex';
import Flex2 from './pages/Flex2';
import Hooks from './pages/Hooks';
import Effect from './pages/Effect';
import Acc from './boot/Acc';
import Tabss from './boot/Tabss';
import Buttons from './boot/Buttons';
import Fig from './boot/Fig';
import Tb from './boot/Tb';
import Ref from './pages/Ref';
import Modals from './boot/Modals';
import Pagen from './boot/Pagen';
import Ts from './boot/Ts';


export default function App(){
  return(
    <>
<BrowserRouter>
  <Routes>
      <Route path="/" element={<Header/>}>{/*헤더 */}
        <Route index element={<Home/>}/>{/*body */}
        <Route path="container" element={<Cont/>}/>
        <Route path="typo" element={<Typo/>}/>
        <Route path="color" element={<Color/>}/>
        <Route path="table" element={<TableRef/>}/>
        <Route path="img" element={<Img/>}/>
        <Route path="jumbo" element={<Jumbo/>}/>
        <Route path="alerts" element={<Alerts/>}/>
        <Route path="button" element={<Btn/>}/>
        <Route path="badges" element={<Badges/>}/>
        <Route path="progress" element={<Progress/>}/>
        <Route path="cards" element={<Cards/>}/>
        <Route path="layer" element={<Layer/>}/>
        <Route path="toastm" element={<ToastM/>}/>
        <Route path="pagination" element={<Pagination/>}/>
        <Route path="list" element={<List/>}/>
        <Route path="collapse" element={<Collapse/>}/>
        <Route path="form" element={<Form/>}/>
        <Route path="flex" element={<Flex/>}/>
        <Route path="flex2" element={<Flex2/>}/>
        <Route path="hooks" element={<Hooks/>}/>
        <Route path="effect" element={<Effect/>}/>
        <Route path="acc" element={<Acc/>}/>
        <Route path="tabs" element={<Tabss/>}/>
        <Route path="buttons" element={<Buttons/>}/>
        <Route path="ref" element={<Ref/>}/>
        <Route path="fig" element={<Fig/>}/>
        <Route path="tb" element={<Tb/>}/>
        <Route path="modal" element={<Modals/>}/>
        <Route path="pagen" element={<Pagen/>}/>
        <Route path="ts" element={<Ts/>}/>
      </Route>
  </Routes>
</BrowserRouter>
</>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);
/*위에 이 문법은 리액트 18버전부터 */
import {Outlet, Link} from "react-router-dom";

const Header = () => {
    return(
        <>
<nav className="navbar navbar-expand-sm bg-light">
<div className="container-fluid">

<a className="navbar-brand" href="/">리액트레퍼런스</a>

{/*햄버거 메뉴 */}
<button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#target">
    <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="target">
    <ul className="navbar-nav me-auto">{/*margin end-auto 오른쪽 여백을 자동으로 조절 */}
        <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
            <Link to="/container" className="nav-link">부트스트랩 컨테이너</Link>
        </li>
        <li className="nav-item">
            <Link to="/typo" className="nav-link">타이포그래픽</Link>
        </li>
        <li className="nav-item">
            <Link to="/color" className="nav-link">부트스트랩 기본컬러</Link>
        </li>
<li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
    부트스트랩 컴포넌트
    </a>
    <ul className="dropdown-menu">
        <li className="nav-item">
            <Link to="/table" className="nav-link">테이블</Link>
        </li>
        <li className="nav-item">
            <Link to="/img" className="nav-link">이미지</Link>
        </li>
        <li className="nav-item">
            <Link to="/jumbo" className="nav-link">점보트론</Link>
        </li>
        <li className="nav-item">
            <Link to="/alerts" className="nav-link">경고창</Link>
        </li>
        <li className="nav-item">
            <Link to="/button" className="nav-link">버튼</Link>
        </li>
        <li className="nav-item">
            <Link to="/badges" className="nav-link">뱃지</Link>
        </li>
        <li className="nav-item">
            <Link to="/progress" className="nav-link">프로그레스 바</Link>
        </li>
        <li className="nav-item">
            <Link to="/cards" className="nav-link">카드</Link>
        </li>
        <li className="nav-item">
            <Link to="/layer" className="nav-link">모달창</Link>
        </li>
        <li className="nav-item">
            <Link to="/toastm" className="nav-link">토스트메세지</Link>
        </li>
        <li className="nav-item">
            <Link to="/pagination" className="nav-link">페이지네이션</Link>
        </li>
    </ul>
</li>       
        
    </ul>
</div>
</div>
</nav>
<Outlet/>{/*선언하지 않으면 제대로 작동하지 않습니다 */}
        </>
    )

}
export default  Header;
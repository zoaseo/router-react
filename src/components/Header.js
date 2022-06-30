import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>GreenMall</h1>
            <ul>
                {/* a 태그와는 다르게 새로고침되지 않는다 */}
                {/* <li><a href="/">메인페이지</a></li> */}
                {/* <li><Link to="/">메인페이지</Link></li>
                <li><Link to="/product">상품페이지</Link></li>
                <li><Link to="/detail">상품 자세히보기</Link></li> */}
                {/* <NavLink> 링크 클릭 시 컴포넌트에 active클래스를 붙여줌 */}
                {/* ({isActive})=>isActive? "class" : "" : Active일 때 class를 붙여줌 */}
                <li><NavLink to="/" className={({isActive})=>isActive? "okay" : ""}>메인페이지</NavLink></li>
                <li><NavLink to="/product/*/*" className={({isActive})=>"green" + (isActive? "okay" : "")}>상품페이지</NavLink></li>
                <li><NavLink to="/detail" className={({isActive})=>isActive? "okay" : ""}>상품 자세히보기</NavLink></li>
                <li><NavLink to="/detail/detail1" className={({isActive})=>isActive? "okay" : ""}>1번 상품 자세히보기</NavLink></li>
                <li><NavLink to="/detail/detail2" className={({isActive})=>isActive? "okay" : ""}>2번 상품 자세히보기</NavLink></li>
                <li><NavLink to="/info" className={({isActive})=>isActive? "okay" : ""}>info 정보보기</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;
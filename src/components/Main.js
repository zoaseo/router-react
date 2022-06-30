import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            메인 페이지입니다.
            <ul>
                <li><Link to="/product/1/abc?search=productName&q=demo#text">1번 상품</Link></li>
                <li><Link to="/product/2/def?search=greengreen&q=demo#2번text">2번 상품</Link></li>
            </ul>
        </div>
    );
};

export default Main;
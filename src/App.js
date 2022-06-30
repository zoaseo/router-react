import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Product from './components/Product';
import DetailProduct from './components/DetailProduct';
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail1 from './components/Detail1';
import Detail2 from './components/Detail2';
import Info from './components/Info';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
        {/* Routed컴포넌트는 여러 Route를 감싸서 그 중 url이 일치하는 라우트 단 하나만 렌더링 시켜줌
        Route는 path 속성에 경로, element 속성에 컴포넌트를 넣어줌 */}
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/product/:productId/:productName" element={<Product/>}/>
        <Route path="/detail" element={<DetailProduct/>}>
          <Route path="detail1" element={<Detail1/>}/>
          <Route path="detail2" element={<Detail2/>}/>
        </Route>
        <Route path="info/*" element={<Info/>}/>
        {/* 상단에 위치하는 경로를 모두 확인, 일치하는 경로가 없는 경우 처리 */}
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;

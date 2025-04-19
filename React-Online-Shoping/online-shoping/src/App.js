import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from './register/Register';
import Login from './login/Login';
import AllProducts from './pages/all products/All Products';
import SingleProduct from './single product/SingleProduct';

function App() {
  return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/register' element={<Register/>} />
            <Route path='/Login' element={<Login />} />
            <Route path='/products' element={<AllProducts/>} />
            <Route path='/products/:id' element={<SingleProduct/>} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;

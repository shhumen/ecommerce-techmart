import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./layouts/header/Navbar";
import Error from "./pages/error/Error";
import Products from "./pages/products/Products";
import Footer from "./layouts/footer/Footer";
import Cart from './pages/cart/Cart'
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer} from "react-toastify";
import {useState} from "react";
import ProductPage from "./pages/productPage/ProductPage";


function App() {
    const [login, setLogin] = useState(false)
    return (
        <div className="app">
            <Router>
                <ToastContainer/>
                <Navbar/>
                <Routes>
                    <Route path='/'>
                        <Route index element={<Home/>}/>
                        <Route path="products/:category" element={<Products/>}/>
                        <Route path='products/:category/:id' element={<ProductPage/>}/>
                        <Route path='cart' element={<Cart/>}/>
                        <Route path='*' element={<Error/>}/>
                    </Route>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;

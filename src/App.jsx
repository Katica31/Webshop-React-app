import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Product from "./pages/Product.jsx";
import Register from "./pages/Register.jsx";
import Cart from "./pages/Cart.jsx";
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import Searchbar from "./pages/Searchbar.js";

function App() {
    return (
            <Routes>
            <Route path="searchbar" element={<Searchbar/>}></Route>
            <Route path="/" element={<Cart/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login"element={<Login/>}> </Route>
            <Route path="/Cart"element={<Cart/>}></Route>
            </Routes> 
    )
    
}

export default App;
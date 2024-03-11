
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Home from "../../pages/home" 
import Product from "../../pages/product"
import About from "../../pages/about" 
import HeaderNavigation from "./headerNavigation"
const Header = () => {
    return (
        <BrowserRouter>
        <HeaderNavigation/>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/product" Component={Product} />
                <Route path="/about" Component={About} />
            </Routes>
        </BrowserRouter>
    )
}
export default Header
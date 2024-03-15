
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Header from './view/layout/header'
import Footer from './view/layout/footer'
import Home from './view/pages/home'
import Product from './view/pages/product' 
import About from './view/pages/about' 
import NotFound from "./view/pages/notFound"
function App() {

  return (
      <BrowserRouter>
            <Header />
            <Footer />
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/product" Component={Product} />
                <Route path="/about" Component={About} />
                <Route path="*" Component={NotFound}/>
            </Routes>
        </BrowserRouter>
      )
}

export default App

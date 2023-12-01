import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import About from './pages/about'
import ProductLists from './pages/productList'
import Products from './pages/products'
import SingleProduct from './pages/singleProduct'
import NavBar from './components/navBar'
function App() {
  

  return (
  <BrowserRouter>
  <NavBar />
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}>
          <Route index element={<ProductLists />}/>
          <Route path=':id' element={<SingleProduct/>} />
          </Route>
        </Routes>
    </BrowserRouter>

   
  )
}

export default App

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import About from './pages/About';
import Cart from './pages/Cart';
import Collection from './pages/Collection';
import Contact from "./pages/Contact"
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Product from './pages/Product';
import Orders from './pages/Orders';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <NavBar/>
      <SearchBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/collections' element={<Collection/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/login' element={<Orders/>}/>
      <Route path='/placeorder' element={<PlaceOrder/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/product/:productId' element={<Product/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;

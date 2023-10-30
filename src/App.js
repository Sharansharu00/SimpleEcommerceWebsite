 // import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from './components/navbar';
import Shop from './pages/shop/shop';
import Cart from './pages/shop/cart/cart';
import ShopContextProvider from './pages/shop/shopContext';
import Iphone from './components/Iphone';
import CartItem from './pages/shop/cart/cartItem';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <Shop/> }/>
      <Route path="/cart"  element={<Cart/>}/>
      <Route path='/iphone' element={<Iphone/>}></Route>
    </Routes>

     </Router>
        </ShopContextProvider>
    
    
    </div>
  );
}

export default App;

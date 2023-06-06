
import './App.css';
import Home from './pages/Homepage/home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signin from './pages/SignInPage/signin';
import Create_amazon from './pages/Create_amazon/create_amazon';
import PrimePage from './pages/PrimePage/PrimePage';
import Cart from './pages/Cart/cart';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/signin' element={<Signin/>}/>
    <Route exact path='/create-amazon' element={<Create_amazon/>}/>
    <Route exact path='/prime' element={<PrimePage/>}/>
    <Route exact path='/cart' element={<Cart/>}/>
    
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;

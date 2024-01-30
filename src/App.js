import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarMain from './Components/NavbarMain/NavbarMain';
import Home from './Router/Home/Home';
import Login from './Router/Login/Login';
import Wishes from './Router/Wishes/Wishes';
import Katalog from './Router/Katalog/Katalog';
import Cart from './Router/Cart/Cart';
 

function App() {
  return (
    <div className="App">
      <NavbarMain/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='Login' element={<Login/>}/>
    <Route path='Wishes' element={<Wishes/>}/>
    <Route path='Katalog' element={<Katalog/>}/>
    <Route path='Cart' element={<Cart/>}/>
   </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Router/Home/Home';
import Login from './Router/Login/Login';
import Wishes from './Router/Wishes/Wishes';
import Katalog from './Router/Katalog/Katalog';
import Cart from './Router/Cart/Cart';
import Footer from './Components/Footer/Footer';
// import Headroom from 'react-headroom';
import NavbarBottom from './Components/NavbarBottom/NavbarBottom';
import SubHeader from './Components/SubHeader/SubHeader';
import NavbarMain from './Components/NavbarMain/NavbarMain'; 
// import GetUpTopButton from './Components/GetUpTopButton/GetUpTopButton';
import  {PRODUCTS} from "./Static"
import NavbarNone from './Components/NavbarNone/NavbarNone';
import SingilPage from './Router/SingilPage/SingilPage';
 

function App() {
  
  return (
    <div className="App">
      
      <SubHeader/>
      <NavbarNone>

      {/* <Headroom> */}
        {/* <div className="background"> */}


      <Navbar/>
      <hr />
        {/* </div> */}
      {/* </Headroom> */}
      </NavbarNone>


      <NavbarMain/>
      <NavbarBottom/>
   <Routes>
    <Route path='/' element={<Home data={PRODUCTS}/>}/>
    <Route path='Login' element={<Login/>}/>
    <Route path='Wishes' element={<Wishes/>}/>
    <Route path='Katalog' element={<Katalog/>}/>
    <Route path='Cart' element={<Cart/>}/>
    <Route path='product/:_id' element={<SingilPage data={PRODUCTS} />} />
   </Routes>
   {/* <GetUpTopButton/> */}
   <Footer/>
    </div>
  );
}

export default App;

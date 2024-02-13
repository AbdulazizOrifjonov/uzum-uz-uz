import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './Components/Navbar/Navbar';
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
      <NavbarNone data={PRODUCTS}/>


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














// Modal.js



// import './App.css';
// import React, { useState } from 'react';
 

// function Modal({ image }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleModal = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <img src={image} alt="modal" onClick={toggleModal} />

//       {isOpen && (
//         <div  className="modal-background">
//           <div  onClick={toggleModal} className="modal-content">
//             <img src={image} alt="modal" />
//             <button onClick={toggleModal}>Close Modal</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Modal;
















// import React, { useState } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';

// function App() {
//   const [items, setItems] = useState(Array.from({ length: 20 }));

//   const fetchMoreData = () => {
//     // Ma'lumotlarni yuklash uchun yorliq qo'shib yuborish
//     setTimeout(() => {
//       setItems(items.concat(Array.from({ length: 20 })));
//     }, 1500);
//   };

//   return (
//     <div>
//       <h1>Infinite Scroll Example</h1>
//       <hr />
//       <InfiniteScroll
//         dataLength={items.length}
//         next={fetchMoreData}
//         hasMore={true}
//         loader={<h4>Loading...</h4>}
//       >
//         {items.map((item, index) => (
//           <div key={index} style={{ border: '1px solid gray', margin: '6px', padding: '20px' }}>
//             Item {index + 1}
//           </div>
//         ))}
//       </InfiniteScroll>
//     </div>
//   );
// }

// export default App;

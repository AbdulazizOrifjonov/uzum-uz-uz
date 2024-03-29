// import React from 'react'
// import "./CartProduct.css"
// import { incCart, decCart } from '../../Context/cartSlice'
// import { Link } from 'react-router-dom'
// // import { useDispatch } from 'react-redux'
// import FaRegTrashAlt from"react-icons/fa"
// function CartProduct () {
//   return (
//     <div className="container">
//     <div className="cart__wrapper">
//       <div className="cart__products">
//         {data?.map((el) => (
//           <div key={el.title} className="cart__item">
//             <Link to={`/product/${el.id}`} className="cart__item-left">
//               <img src={el.url} alt={el.title} />
//               <div>
//                 <h4>{el.title}</h4>
//                 <p>Kategoriya: {el.category}</p>
//               </div>
//             </Link>
//             <div className="cart__item-right">
//               <div className="cart__item-btns">
//                 <button onClick={() => dispatch(decCart(el))}>-</button>
//                 <button>{el.quantity}</button>
//                 <button onClick={() => dispatch(incCart(el))}>+</button>
//               </div>
//               <div>
//                 <button className="cart__trash-btn">
//                   <FaRegTrashAlt />
//                 </button>
//                 <h3>{el.price?.brm()} so'm</h3>
//                 <p> {(el.price * el.quantity)?.brm()} so'm</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="cart__register">
//         <div className="input__reg">
//           <h3>Ma'lumotlarni to'ldiring:</h3>
//           <form action="">
//             <input type="text" placeholder="To'liq ismingiz" />
//             <input type="text" placeholder="+998 00-000-00-00" />
//             <input type="text" placeholder="Manzilingiz" />
//             <input required type="text" placeholder="Habar yo'llash" />
//             <div className="total">
//               <p>Umumiy narx:</p>
//               <b> so'm</b>
//             </div>
//             <button className="btn-reg"> Rasmiylashtirishga o'tish</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default CartProduct 
import React from 'react';
import "./CartProduct.css"

import { incCart, decCart,  removCart } from '../../Context/cartSlice';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Fixed import statement
import { FaRegTrashAlt } from 'react-icons/fa';
import CartForm from './CartForm';

function CartProduct({ data }) { // Modified to accept props
  const dispatch = useDispatch();




  return (
    <div className="container">
      <div className="cart__wrapper">
        <div className="cart__products">
          {data?.map((el) => (
            <div key={el.title} className="cart__item">
              <Link to={`/product/${el._id}`} className="cart__item-left">
                <img src={el.url} alt={el.title} />
                <div>
                  <h4>{el.title}</h4>
                  <p>Kategoriya: {el.category}</p>
                </div>
              </Link>
              <div className="cart__item-right">
                <div className="cart__item-btns">
                  <button disabled={el.quontitiy < 1} onClick={() => dispatch(decCart(el))}>-</button>
                  <button>{el.quontitiy}</button>
                  <button onClick={() => dispatch(incCart(el))}>+</button>
                </div>
                <div>
                  <button onClick={()=> dispatch(removCart(el))} className="cart__trash-btn">
                    <FaRegTrashAlt />
                  </button>
                  <h3>{el.price?.brm()} so'm</h3>
                  <p> {(el.price * el.quontitiy)?.brm()} so'm</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart__register">
        <CartForm data={data}/>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
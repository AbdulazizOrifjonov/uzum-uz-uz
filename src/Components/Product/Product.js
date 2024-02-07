// import React from 'react'
// import "./Product.css"
// import { CiHeart } from "react-icons/ci";
// import { IoBagAddOutline } from "react-icons/io5";
// import { useDispatch, useSelector } from 'react-redux';
// import { addToWishes, remoweFromWishes } from '../../Context/wishesSlice';
// function Product({ data  }) {
//     const dispatch = useDispatch()
//     let wishes = useSelector(state=> state.wishes.value)

//     console.log(data);
//     return (
//         <div className='container'>
//             <h2 className='product__heanding' >Arzon narxlar
//                 <span>&#10095;</span></h2>
//             <div className="warpper">
//                 {
//                     data?.map((el) =>
//                         <div className="card">
//                             <div className="card__image">
//                                 <img src={el.url} alt="" />
//                                 {
// wishes?.some((item)=> item._id ===  el.id)?
// <div
// onClick={() => dispatch(addToWishes(el))}
// className="card__heart">
// <CiHeart />
// </div>: 
//                                 <div
//                                     onClick={() => dispatch(remoweFromWishes(el))}
//                                     className="card__heart">
//                                     <CiHeart />
//                                 </div>
//                                 }
//                             </div>
//                             <div className="card__body">
//                                 {/* <h3 className='card__title'></h3> */}
//                                 <span className='card__title'>{el.title}</span><mark>
//                                     {(el.price * 1.5 / 12)?.brm()} so'm
//                                 </mark>
//                                 <div className="card__prices">
//                                     <div className="card__price-item">
//                                         <del>{(el.price * 1.2)?.brm()} so'm</del>
//                                         <p>{el.price?.brm()} so'm</p>
//                                     </div>
//                                     <div>

//                                     </div>
//                                     <div className='card__cart'>
//                                         <IoBagAddOutline />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 }

//             </div>
//         </div>
//     )
// }

// export default Product


// Product.js

// import React from 'react';
// import "./Product.css";
// import { IoIosHeartEmpty , IoIosHeart } from "react-icons/io";
// import { BsBagPlus } from "react-icons/bs";
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleWishes } from '../../Context/wishesSlice';
// import { NavLink } from 'react-router-dom';
// import {incCart} from "../../Context/cartSlice"

// function Product({ data }) {
//     const dispatch = useDispatch();
//     const wishes = useSelector(state => state.wishes.value);



//     return (
//         <div className='containera'>
//             {/* <h2 className='product__heading'>Arzon narxlar
//                 <span>&#10095;</span>
//             </h2> */}
//             <div className="wrapper">
//                 {data?.map((el) => (
//                     <div className="card" key={el._id}>
//                         <div  className="card__image">

//                         <NavLink to={`/product/${el._id}`} className="card__image">
//                             <img src={el.url} alt="internetingiz yaxshi emasa !!!..." />
//                             </NavLink>

//                             <div
//                                 onClick={() => dispatch(toggleWishes(el))}
//                                 className={`card__heart ${wishes?.some((item) => item._id === el._id)}`}
//                                 >
//                                 {wishes?.some((item) => item._id === el._id) ? (
//                                     <IoIosHeart  className='heart' style={{ color: "var(--bg-py)" }} />
//                                     ) : (
//                                     <IoIosHeartEmpty className='heart' />
//                                 )}
//                             </div>
//                                     </div>
//                         <div className="card__body">
//                             <span className='card__title'>{el.title}</span>
//                             <mark>
//                                 <p>
//                                 {(el.price * 1.5 / 12)?.brm()} so'm /oyiga
//                                 </p>


//                             </mark>
//                             <div className="card__prices">
//                                 <div className="card__price-item">
//                                     <del>{(el.price * 1.2)?.brm()} so'm</del>
//                                     <p>{el.price?.brm()} so'm</p>
//                                 </div>
//                                 <button onClick={()=> dispatch(incCart(el))} className='card__cart'>

//                                     <BsBagPlus />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Product;



// Product.js
import React from 'react';
import "./Product.css";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { BsBagPlus } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishes } from '../../Context/wishesSlice';
import { NavLink } from 'react-router-dom';
import { incCart } from "../../Context/cartSlice";

function Product({ data }) {
    const dispatch = useDispatch();
    const wishes = useSelector(state => state.wishes.value);

    return (
        <div className='containera'>
            <div className="wrapper">
                {data?.map((el) => (
                    <div className="card" key={el._id}>
                        <div className="card__image">
                            <NavLink to={`/product/${el._id}`} className="card__image">
                                <img src={el.url} alt="internetingiz yaxshi emasa !!!..." />
                            </NavLink>
                            <div
                                onClick={() => dispatch(toggleWishes(el))}
                                className={`card__heart ${wishes?.some((item) => item._id === el._id)}`}
                            >
                                {wishes?.some((item) => item._id === el._id) ? (
                                    <IoIosHeart className='heart' style={{ color: "var(--bg-py)" }} />
                                ) : (
                                    <IoIosHeartEmpty className='heart' />
                                )}
                            </div>
                        </div>
                        <div className="card__body">
                            <span className='card__title'>{el.title}</span>
                            <mark>
                                <p>
                                    {(el.price * 1.5 / 12)?.brm()} so'm /oyiga
                                </p>
                            </mark>
                            <div className="card__prices">
                                <div className="card__price-item">
                                    <del>{(el.price * 1.2)?.brm()} so'm</del>
                                    <p>{el.price?.brm()} so'm</p>
                                </div>
                                <button onClick={() => dispatch(incCart(el))} className='card__cart'>
                                    <BsBagPlus />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;

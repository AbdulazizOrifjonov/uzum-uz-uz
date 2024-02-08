 
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
                                <img src={el.url[0]} alt="internetingiz yaxshi emasa !!!..." />
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







// import React, { useState } from 'react';
// import "./Product.css";
// import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
// import { BsBagPlus } from "react-icons/bs";
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleWishes } from '../../Context/wishesSlice';
// import { NavLink } from 'react-router-dom';
// import { incCart } from "../../Context/cartSlice";
// import InfiniteScroll from 'react-infinite-scroll-component'; // Infinite Scrollni import qilish

// function Product({ data }) {
//     const dispatch = useDispatch();
//     const wishes = useSelector(state => state.wishes.value);

//     return (
//         <div className='containera'>
//             <div className="wrapper">
//                 <InfiniteScroll
//                     dataLength={data.length}
//                     next={() => console.log('Loading more...')} // Ma'lumotlarni yuklash uchun funksiya
//                     hasMore={true} // Agar true bo'lsa, yana ma'lumotlar borligi ko'rsatiladi
//                     loader={<h4>Loading...</h4>} // Ma'lumotlar yuklanayotgan vaqtda ko'rsatiladigan chiziqli
//                     endMessage={<p>No more items to load</p>} // Agar ma'lumotlar tugagani bo'lsa, ko'rsatiladigan matn
//                 >
//                            {data?.map((el) => (
//                     <div className="card" key={el._id}>
//                         <div className="card__image">
//                             <NavLink to={`/product/${el._id}`} className="card__image">
//                                 <img src={el.url[0]} alt="internetingiz yaxshi emasa !!!..." />
//                             </NavLink>
//                             <div
//                                 onClick={() => dispatch(toggleWishes(el))}
//                                 className={`card__heart ${wishes?.some((item) => item._id === el._id)}`}
//                             >
//                                 {wishes?.some((item) => item._id === el._id) ? (
//                                     <IoIosHeart className='heart' style={{ color: "var(--bg-py)" }} />
//                                 ) : (
//                                     <IoIosHeartEmpty className='heart' />
//                                 )}
//                             </div>
//                         </div>
//                         <div className="card__body">
//                             <span className='card__title'>{el.title}</span>
//                             <mark>
//                                 <p>
//                                     {(el.price * 1.5 / 12)?.brm()} so'm /oyiga
//                                 </p>
//                             </mark>
//                             <div className="card__prices">
//                                 <div className="card__price-item">
//                                     <del>{(el.price * 1.2)?.brm()} so'm</del>
//                                     <p>{el.price?.brm()} so'm</p>
//                                 </div>
//                                 <button onClick={() => dispatch(incCart(el))} className='card__cart'>
//                                     <BsBagPlus />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//                 </InfiniteScroll>
//             </div>
//         </div>
//     );
// }

// export default Product;




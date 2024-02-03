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





import React from 'react';
import "./Product.css";
import { CiHeart } from "react-icons/ci";
import { IoBagAddOutline } from "react-icons/io5";
import { FaHeart } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishes, remoweFromWishes } from '../../Context/wishesSlice';

function Product({ data }) {
    const dispatch = useDispatch();
    let wishes = useSelector(state => state.wishes.value);

    console.log(data);
    return (
        <div className='container'>
            <h2 className='product__heanding'>Arzon narxlar
                <span>&#10095;</span></h2>
            <div className="warpper">
                {data?.map((el) =>
                    <div className="card" key={el.id}>
                        <div className="card__image">
                            <img src={el.url} alt="" />
                            {wishes?.some((item) => item._id === el.id) ?
    <div
        onClick={() => dispatch(remoweFromWishes(el))}
        className="card__heart filled">
        <CiHeart />
    </div> :
    <div
        onClick={() => dispatch(addToWishes(el))}
        className="card__heart">
        <FaHeart />
    </div>
}

                        </div>
                        <div className="card__body">
                            <span className='card__title'>{el.title}</span>
                            <mark>
                                {(el.price * 1.5 / 12)?.brm()} so'm
                            </mark>
                            <div className="card__prices">
                                <div className="card__price-item">
                                    <del>{(el.price * 1.2)?.brm()} so'm</del>
                                    <p>{el.price?.brm()} so'm</p>
                                </div>
                                <div className='card__cart'>
                                    <IoBagAddOutline />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Product;

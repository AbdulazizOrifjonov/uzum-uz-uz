import React from 'react'
import "./Product.css"
function Product({ data }) {
    console.log(data);
    return (
        <div className='container'>
            <h2 className='product__heanding' >Arzon narxlar
                <span>&#10095;</span></h2>
            <div className="warpper">
                {
                    data?.map((el) =>
                        <div className="card">
                            <div className="card__image">
                                <img src={el.url} alt="" />
                            </div>
                            <div className="card__body">
                                {/* <h3 className='card__title'></h3> */}
                                <span className='card__title'>{el.title}</span><mark>
                                    {(el.price * 1.5 / 12)?.brm()} so'm
                                </mark>
                                <div className="card__prices">
<div className="">
    <del>{(el.price * 1.2 )?.brm()} so'm</del>
    <p>{el.price?.brm()}</p>
</div>
                                    <div>
                                    
                                    </div>
                                    <div className='card__cart-btn'></div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Product

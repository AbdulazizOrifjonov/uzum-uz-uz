import React, { useEffect } from 'react'
import Empty from '../../Components/Empty/Empty'
import { useDispatch, useSelector } from 'react-redux';
import {incCart, decCart, removCart, removAllCart} from "../../../src/Context/cartSlice"

function Cart() {
  const dispatch = useDispatch();

  const carts = useSelector(state => state.carts.value)
  console.log(carts);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>
      {
        carts ? (

        <div className="container">
          {carts.map((el) => (
            <div key={el._id} className="consjt">
              <img width={100} src={el.url[0]} alt="" />
              <p>{el.title}</p>
              <p>{el.quontitiy}</p>
              <button  onClick={()=> dispatch(incCart(el))}>+</button>
           
              <button onClick={()=> dispatch(decCart(el))}>-</button>
          
              <button onClick={()=> dispatch(removCart(el))}>🗑 in </button>
              

              <br />
              <button onClick={()=> dispatch(removAllCart(el))}>🗑</button>
            </div>
          ))}
        </div>) :
          <Empty
            title="Savatda hozircha mahsulot yoʻq"
            url="https://uzum.uz/static/img/shopocat.490a4a1.png"
            desc="Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
            btnTitle="Bosh sahifa"
            link="/"
          />
      }

    </div>
  )
}
export default Cart





 
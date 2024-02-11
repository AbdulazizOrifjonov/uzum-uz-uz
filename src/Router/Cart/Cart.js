import React, { useEffect } from 'react'
import Empty from '../../Components/Empty/Empty'
import {  useSelector } from 'react-redux';
// import {incCart, decCart, removCart, removAllCart} from "../../../src/Context/cartSlice"
import CartProduct from '../../Components/Cart-product/CartProduct';

function Cart() {

  const carts = useSelector(state => state.carts.value)
  console.log(carts);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className='h-700'>
      {
        carts.length  ? (
          <CartProduct data={carts}/>

        )
         :(

           <Empty
           title="Savatda hozircha mahsulot yoʻq"
            url="https://uzum.uz/static/img/shopocat.490a4a1.png"
            desc="Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
            btnTitle="Bosh sahifa"
            link="/"
          />
            )
      }

    </div>
  )
}
export default Cart





 
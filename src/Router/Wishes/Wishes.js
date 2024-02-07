import React, {useEffect} from 'react';
import Empty from '../../Components/Empty/Empty';
import { useSelector } from 'react-redux';
import Product from '../../Components/Product/Product';

function Wishes() {
  const wishes = useSelector(state => state.wishes.value);
  useEffect(()=>{
    window.scrollTo(0, 0); 
  },[])

  return (
    <div>
      {wishes.length ? (
        <Product data={wishes} />
      ) : (
        <Empty
          title="Savatda hozircha mahsulot yoʻq"
          url=" "
          desc="Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
          btnTitle="Bosh sahifa"
          link="/"
        />
      )}
    </div>
  );
}

export default Wishes;

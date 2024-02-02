import React from 'react'
import Empty from '../../Components/Empty/Empty'
function Wishes() {
  return (
    <div>
      <Empty
        title="Sizga yoqqanini qoʻshing"
        url="https://uzum.uz/static/img/hearts.cf414be.png"
        desc="Mahsulotdagi belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi"
        btnTitle="Akkountga kirish"
        link="/login"
      />
    </div>
  )
}

export default Wishes

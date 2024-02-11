// import React, { useState, useRef } from 'react'

// function CartForm({ data }) {
//   const [fulName, setFulName] = useState("")
//   const tel = useRef()
//   console.log("Card Forem");
//   console.log(fulName);
//   console.log(tel.current);

//   const handlesubmit = (e) => {
//     e.preventDefault()
//     console.log("useState", fulName);
//     console.log("useRef", tel.current.value)
//   }
//   return (
//     <div>
//       <div className="input__reg">
//         <h3>Ma'lumotlarni to'ldiring:</h3>
//         <form onSubmit={handlesubmit} action="">
//           <input value={fulName} onSubmit={(e) => setFulName(e.target.value)} type="text" placeholder="To'liq ismingiz" />
//           <input ref={tel} type="text" placeholder="+998 00-000-00-00" />
//           <input type="text" placeholder="Manzilingiz" />
//           <input type="text" placeholder="Habar yo'llash" />
//           <div className="total">
//             <p>Umumiy narx: </p>
//             <b> {data?.reduce((a, b) => a + b.price + b.quantity, 0)?.brm()}  so'm</b>
//           </div>
//           <button className="btn-reg"> Rasmiylashtirishga o'tish</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default CartForm









import React, { useState, useRef, memo } from 'react';

function CartForm({ data }) {


const BOT_TOLKEN = "6381301389:AAGXlLt7EtrGl91tBaa6LLU89Uk-Kn-fteA"

const CHAT_ID =  -4133336220

// const USER_ID = 1594150529
//https://api.telegram.org/bot6381301389:AAGXlLt7EtrGl91tBaa6LLU89Uk-Kn-fteA/getUpdates
  const [fullName, setFullName] = useState("");
  const tel = useRef();
  const adress = useRef();
  const message = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
 let text = "<b>Buyurtmachi<b/> %0A%0A"
 text += `<b>Ismi<b/>: 👨‍✈️  ${fullName} %0A`
 text += `<b>Tellefoni<b/>: 📞  ${tel.current.value} %0A `
 text += `<b>Manzil<b/>:📮  ${adress.current.value}  %0A `
 text += `<b>Xabar<b/>:📜  ${message.current.value}  %0A `
    let url = `https://api.telegram.org/bot${BOT_TOLKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`

     let api = new XMLHttpRequest()
     api.open("Get" , url, true )
     api.send ()

  };
  return (
    <div>
      <div className="input__reg">
        <h3>Ma'lumotlarni to'ldiring:</h3>
        <form onSubmit={handleSubmit} action="">
          <input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" placeholder="To'liq ismingiz" />
          <input ref={tel} type="text" placeholder="+998 00 000 00 00" />
          <input ref={adress} type="text" placeholder="Manzilingiz" />
          <input ref={message} type="text" placeholder="Habar yo'llash" />
          <div className="total">
            <p>Umumiy narx: </p>
            <b> {data?.reduce((a, b) => a + b.price + b.quontitiy, 0)?.brm()}  so'm</b>
          </div>
          <button className="btn-reg"> Rasmiylashtirishga o'tish</button>
        </form>
      </div>
    </div>
  );
}

export default memo(CartForm)

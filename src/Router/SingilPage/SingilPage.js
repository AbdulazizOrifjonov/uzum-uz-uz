// import React from 'react'
// import "./SingilPage.css"
// import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
// function SingilPage({data}) {
//   return (
//     <div className='container'>
//       {
//         data?.map((el)=>
//       <div key={el} className="singlPage">
//         <div className="singleft">
//           <div className="singlpage_slider_image">
//             <button>
// <IoIosArrowUp className='arrow_up'/>
//             </button>


//         <img src={el.url} width={100} alt="" />
//         <img src={el.url} width={100} alt="" />
//         <img src={el.url} width={100} alt="" />
//         <img src={el.url} width={100} alt="" />
//         <img src={el.url} width={100} alt="" />
//         <img src={el.url} width={100} alt="" />
//         <button>

//             <IoIosArrowDown className='arrow_down'/>
//         </button>
//           </div>
// <div className="singlpage_main_image">
//         <img src={el.url} width={300} alt="" />
// </div>

//         </div>
//         <div className="singlright">

//         <h1>{el.title}</h1>
//         </div>
//       </div>
//       )
//       }
//     </div>
//   )
// }

// export default SingilPage
// SingilPage.js


import React from 'react';
import { useParams } from 'react-router-dom';
import {
  //  IoIosArrowUp, IoIosArrowDown,
   IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./SingilPage.css"
import { HiPlus, HiMinus } from "react-icons/hi";
// import { ImFire } from "react-icons/im";


function SingilPage({ data }) {

  const { _id } = useParams();
  const product = data.find((el) => el._id === _id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>

      <div className='container'>

        <div className="singlPage">
          <div className="singleft">
            <div className="singlpage_slider_image">
              {/* <button className='arrow_up'>
                <IoIosArrowUp />
              </button> */}
              <div className="slider_images">



                <img className='singl__slider_images' src={product.url} alt="" />
                <img className='singl__slider_images' src={product.url} alt="" />
                <img className='singl__slider_images' src={product.url} alt="" />
                <img className='singl__slider_images' src={product.url} alt="" />
                <img className='singl__slider_images' src={product.url} alt="" />
                <img className='singl__slider_images' src={product.url} alt="" />
              </div>
              {/* <button className='arrow_down'>

                <IoIosArrowDown />
              </button> */}
            </div>
            <div className="singlpage_main_image">
              <button className='arrow_left_main'>
                <IoIosArrowForward />
              </button>
              <img className='singlpage_main_image_img' src={product.url} alt="" />
              <button className='arrow_right_main'>
                <IoIosArrowBack />
              </button>
            </div>

          </div>
          <div className="singlright">
            <div className="name_none">

              <h1>{product.title}</h1>
              <p>Sotuvchi: xechki</p>
              <div>Yetkazib berish:
                1 kun, bepul</div>
            </div>

            <hr />
            <div className="center_singlepage">
              <div className="singilpage_color">

                <p>Rang:
                </p>
                <div className="imgs">
                  <img src={product.url} alt="" />
                  <img src={product.url} alt="" />
                </div>
              </div>
              <div className="singlePage_quontitiy">

                <p>Miqdor:</p>
                <div className="quontitiy">
                  <HiMinus />
                  1
                  <HiPlus />
                </div>

              </div>
              <div className="price">
                <p>Narx:</p>
                <div className="bottom">

                  <h3>{product.price?.brm()} so'm</h3>
                  <s>
                    {(product.price * 1.5 / 12)?.brm()} so'm /oyiga
                  </s>
                  <button className='correct_clac'>Aksiya</button>
                </div>
              </div>
              <div className="add_cart">
                <button className='add_to_cart'>Savatga qoʻshish</button>
                <button className='add_to_cart'>Tugmani 1 bosishda xarid qilish</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SingilPage;





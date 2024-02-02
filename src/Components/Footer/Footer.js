// import React from 'react'
// import "./Footer.css"
// import facebook from "../../Assets/facebook.png"
// import youtube from "../../Assets/youtube.png"
// import telegram from "../../Assets/telegram.png"
// import instagram from "../../Assets/instagram.png"
// import apple from "../../Assets/apple.png"
// import googleplay from "../../Assets/google-play (1).png"
// import { useLocation } from 'react-router-dom';
// function Footer() {
//   const location = useLocation();

//     if (location.pathname.includes('login') || location.pathname.includes('admin')) {
//       return  <></> 
//     }

//   return (
//     <div className='container'>
//       <div className="Footer__head">
//         <div className="footer__main">
//           <span>Biz haqimizda</span>
//           <p>
//             Topshirish punktlari</p>
//           <p>Vakansiyalar</p>
//         </div>
//         <div className="footer__main">
//           <span>Foydalanuvchilarga</span>
//           <p>
//             Biz bilan bog'lanish</p>
//           <p>Savol-Javob</p>
//         </div>
//         <div className="footer__main">
//           <span>Tadbirkorlarga</span>
//           <p>
// Uzumda soting</p>
// <p>Sotuvchi kabinetiga kirish</p>
//         </div>
//         <div className="footer__main two">
//           {/* <div className="instoll">

//           </div> */}
// <div className="dowland">
//           <span>Ilovani yuklab olish
// </span>
// <div className="dowlond__in">

// <p><img width={20} src={apple} alt="" />AppStore
// </p>

// <p><img width={20} src={googleplay} alt="" />Google Play
// </p>

// </div>
// </div>
// <div className="box">
//   <p>Uzum ijtimoiy tarmoqlarda
// </p>
// <div className="img">

//   <img width={35} src={instagram} alt="" />
//   <img width={35} src={telegram} alt="" />
//   <img width={35} src={youtube} alt="" />
//   <img width={35} src={facebook} alt="" />
// </div>
// </div>
//         </div>
//       </div>
//       <div className="footer__food">
//         <div className="footer__end_right">
          
//           <p>Maxfiylik kelishuvi</p>
//         <p>Foydalanuvchi kelishuvi
// </p>
//           </div>
//           <div className="footer__end__left">
//             <p>«2024© XK MCHJ «UZUM MARKET».
                
//               </p>
//               <p>
//                STIR 309376127. Barcha huquqlar himoyalangan»</p>
//           </div>
//       </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import "./Footer.css";
import facebook from "../../Assets/facebook.png";
import youtube from "../../Assets/youtube.png";
import telegram from "../../Assets/telegram.png";
import instagram from "../../Assets/instagram.png";
import apple from "../../Assets/apple.png";
import googleplay from "../../Assets/google-play (1).png";
import { useLocation } from 'react-router-dom';

function Footer() {
    const location = useLocation();

    if (location.pathname.toLowerCase().includes('login') || location.pathname.includes('admin')) {
        return null; // or <></> if you prefer
    }

    return (
        <div className='container'>
            <div className="Footer__head">
                <div className="footer__main">
                    <span>Biz haqimizda</span>
                    <p>Topshirish punktlari</p>
                    <p>Vakansiyalar</p>
                    <div className="displayNone">
                  
                    </div>
                </div>
                <div className="footer__main">
                    <span>Foydalanuvchilarga</span>
                    <p>Biz bilan bog'lanish</p>
                    <p>Savol-Javob</p>
                </div>
                <div className="footer__main">
                    <span>Tadbirkorlarga</span>
                    <p>Uzumda soting</p>
                    <p>Sotuvchi kabinetiga kirish</p>
                </div>
                <div className="footer__main two">
                    <div className="dowland">
                        <span>Ilovani yuklab olish</span>
                        <div className="dowlond__in">
                            <p><img width={20} src={apple} alt="" />AppStore</p>
                            <p><img width={20} src={googleplay} alt="" />Google Play</p>
                        </div>
                    </div>
                    <div className="box">
                        <p>Uzum ijtimoiy tarmoqlarda</p>
                        <div className="img">
                            <img width={35} src={instagram} alt="" />
                            <img width={35} src={telegram} alt="" />
                            <img width={35} src={youtube} alt="" />
                            <img width={35} src={facebook} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__food">
                <div className="footer__end_right">
                    <p>Maxfiylik kelishuvi</p>
                    <p>Foydalanuvchi kelishuvi</p>
                </div>
                <div className="footer__end__left">
                    <p>«2024© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;



// import React from 'react';
// import "./Footer.css";
// import facebook from "../../Assets/facebook.png";
// import youtube from "../../Assets/youtube.png";
// import telegram from "../../Assets/telegram.png";
// import instagram from "../../Assets/instagram.png";
// import apple from "../../Assets/apple.png";
// import googleplay from "../../Assets/google-play (1).png";
// import { useLocation } from 'react-router-dom';

// function Footer() {
//   const location = useLocation();
//   const isRestrictedPage = location.pathname.includes('login') || location.pathname.includes('admin');

//   if (isRestrictedPage) {
//     return <></>;
//   }

//   return (
//     <div className='container'>
//       <div className="footer__head">
//         <div className="footer__section">
//           <span>Biz haqimizda</span>
//           <p>Topshirish punktlari</p>
//           <p>Vakansiyalar</p>
//         </div>
//         <div className="footer__section">
//           <span>Foydalanuvchilarga</span>
//           <p>Biz bilan bog'lanish</p>
//           <p>Savol-Javob</p>
//         </div>
//         <div className="footer__section">
//           <span>Tadbirkorlarga</span>
//           <p>Uzumda soting</p>
//           <p>Sotuvchi kabinetiga kirish</p>
//         </div>
//         <div className="footer__section two">
//           <div className="download">
//             <span>Ilovani yuklab olish</span>
//             <div className="download__info">
//               <p><img width={20} src={apple} alt="" />AppStore</p>
//               <p><img width={20} src={googleplay} alt="" />Google Play</p>
//             </div>
//           </div>
//           <div className="social-box">
//             <p>Uzum ijtimoiy tarmoqlarda</p>
//             <div className="social-icons">
//               <img width={35} src={instagram} alt="" />
//               <img width={35} src={telegram} alt="" />
//               <img width={35} src={youtube} alt="" />
//               <img width={35} src={facebook} alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="footer__bottom">
//         <div className="footer__bottom__right">
//           <p>Maxfiylik kelishuvi</p>
//           <p>Foydalanuvchi kelishuvi</p>
//         </div>
//         <div className="footer__bottom__left">
//           <p>«2024© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;


// import React from 'react'

// function Footer() {
//   return (
    
//       <div className="container">
// jk
    
//     </div>
//   )
// }

// export default Footer

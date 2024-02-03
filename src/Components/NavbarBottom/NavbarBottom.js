// import React from 'react'
// import "./NavbarBottom.css"
// function NavbarBottom() {
//   return (
//     <div>
//         NavbarBottom
      
//     </div>
//   )
// }

// export default NavbarBottom


import React from 'react'
import "./NavbarBottom.css"
import { NavLink, useLocation } from 'react-router-dom';
 
function NavbarBottom() {
  const location = useLocation();
  if (location.pathname.toLowerCase().includes('login') || location.pathname.includes('admin')) {

    return <></>;
  }

  return (
    <div className='container'>
      <div className="slesh">

        {/* <div className="tur">

          <h3 className='rooms'>Muddatli to'lov</h3>
        </div> */}
        <div className="navbar__bottom">
          {/* {
                DATA?.map((el, inx)=><p key={inx}>{el}</p>)
              } */}
 
          <NavLink className="gold" to={'/Elektronika'} >                 <div className="turkumlardir"><div className='johan'>       <p className='joha' >                          Elektronika                                     </p> </div>      </div>                        </NavLink>
          <NavLink className="gold" to={'/Maishiy'} >                 <div className="turkumlardir"><div className='johan'>     <p className='joha' >                          Maishiy ehnika                                      </p> </div>      </div>                      </NavLink>
          <NavLink className="gold" to={'/Kiyim'} >                 <div className="turkumlardir"><div className='johan'>   <p className='joha' >                          Kiyim                                     </p> </div>      </div>                                  </NavLink>
          <NavLink className="gold" to={'/Poyabzallar'} >                 <div className="turkumlardir"><div className='johan'>     <p className='joha' >                          Poyabzallar                                     </p> </div>      </div>                          </NavLink>
          <NavLink className="gold" to={'/Aksessuarlar'} >                 <div className="turkumlardir"><div className='johan'>   <p className='joha' >                          Aksessuarlar                                     </p> </div>      </div>                           </NavLink>
          <NavLink className="gold" to={'/Gozallik'} >                 <div className="turkumlardir"><div className='johan'>               <p className='joha' >                          Goʻzallik va parvarish                                     </p> </div>      </div>     </NavLink>
          <NavLink className="gold" to={'/Salomatlik'} >                 <div className="turkumlardir"><div className='johan'>        <p className='joha' >                          Salomatlik                                     </p> </div>      </div>                        </NavLink>
          <NavLink className="gold" to={'/UyRozgor'} >                 <div className="turkumlardir"><div className='johan'><p className='joha' >                          Uy-roʻzgʻor buyumlari                                     </p> </div>      </div>                     </NavLink>
          <NavLink className="gold" to={'/Qurilish'} >                 <div className="turkumlardir"><div className='johan'>     <p className='joha' >                          Qurilish va taʼmirlash                                     </p> </div>      </div>               </NavLink>
          <NavLink className="gold" to={'/Avtotovarlar'} >                 <div className="turkumlardir"><div className='johan'>            <p className='joha' >                          Avtotovarlar                                     </p> </div>      </div>                  </NavLink>
          <NavLink className="gold" to={'/Bolalar'} >                 <div className="turkumlardir"><div className='johan'>              <p className='joha' >                          Bolalar tovarlari                                     </p> </div>      </div>           </NavLink>
          <NavLink className="gold" to={'/Xobbi'} >                 <div className="turkumlardir"><div className='johan'>        <p className='joha' >                          Xobbi va ijod                                     </p> </div>      </div>                     </NavLink>
          <NavLink className="gold" to={'/Sport'} >                 <div className="turkumlardir"><div className='johan'>   <p className='joha' >                          Sport va hordiq                                     </p> </div>      </div>                        </NavLink>
          <NavLink className="gold" to={'/OziqOvqat'} >                 <div className="turkumlardir"><div className='johan'>  <p className='joha' >                          Oziq-ovqat mahsulotlari                                     </p> </div>      </div>                 </NavLink>
          <NavLink className="gold" to={'/MaishiyKimyo'} >                 <div className="turkumlardir"><div className='johan'>      <p className='joha' >                          Maishiy kimyoviy                                       </p> </div>      </div>                  </NavLink>
          <NavLink className="gold" to={'/Kanselyariya'} >                 <div className="turkumlardir"><div className='johan'>  <p className='joha' >                          Kanselyariya tovarlari                                     </p> </div>      </div>                  </NavLink>
          <NavLink className="gold" to={'/Hayvonlar'} >                 <div className="turkumlardir"><div className='johan'>    <p className='joha' >                          Hayvonlar uchun tovarlar                                     </p> </div>      </div>              </NavLink>
          <NavLink className="gold" to={'/Kitoblar'} >                 <div className="turkumlardir"><div className='johan'>   <p className='joha' >                          Kitoblar                                     </p> </div>      </div>                               </NavLink>
          <NavLink className="gold" to={'/Dacha'} >                 <div className="turkumlardir"><div className='johan'>    <p className='joha' >                          Dacha, bogʻ va tomorqa                                     </p>  </div>     </div>                </NavLink>

 
        </div>
      </div>
    </div>
  )
}

export default NavbarBottom
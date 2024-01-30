import React from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser , FaRegHeart } from "react-icons/fa6";
import { BiHome } from "react-icons/bi";
import { RiMenuSearchLine } from "react-icons/ri";
 
function Navbar() {
    return (
        <div className='container'>
     
            <div className="navbar">
                <div className="navbar__loga">
                    <NavLink to={"/"}>

                    <svg   className='navbar__loga'  viewBox="0 0 216 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_18506)">
                        <path d="M32.594 16.708C32.594 7.87801 25.4358 0.719849 16.6058 0.719849C7.77571 0.719849 0.617554 7.87801 0.617554 16.708C0.617554 25.5381 7.77571 32.6962 16.6058 32.6962C25.4358 32.6962 32.594 25.5381 32.594 16.708Z" fill="#FFFF00" />
                        <path d="M4.36953 15.5131C3.8973 12.835 3.66119 11.4959 4.00202 10.3811C4.30182 9.40049 4.90437 8.53997 5.72331 7.92286C6.65431 7.22129 7.99337 6.98518 10.6715 6.51296L18.7616 5.08645C21.4397 4.61422 22.7788 4.37811 23.8936 4.71894C24.8742 5.01874 25.7347 5.62129 26.3518 6.44023C27.0534 7.37123 27.2895 8.71029 27.7617 11.3884L28.8713 17.6809C29.3435 20.3591 29.5796 21.6981 29.2388 22.8129C28.939 23.7935 28.3364 24.6541 27.5175 25.2712C26.5865 25.9727 25.2474 26.2088 22.5693 26.6811L14.4792 28.1076C11.8011 28.5798 10.462 28.8159 9.34722 28.4751C8.36661 28.1753 7.50608 27.5727 6.88897 26.7538C6.18741 25.8228 5.95129 24.4837 5.47907 21.8056L4.36953 15.5131Z" fill="#7000FF" />
                        <path d="M21.1663 11.8037C21.6487 11.9099 22.1155 12.0006 22.5735 12.1178C23.0602 12.2417 23.5425 12.3922 24.0248 12.5271C24.0934 12.547 24.12 12.5736 24.12 12.651C24.1177 14.1577 24.1332 15.6666 24.1133 17.1733C24.0912 18.7928 23.5801 20.2574 22.5956 21.545C21.4982 22.9809 20.0623 23.9057 18.3057 24.3261C17.6132 24.492 16.9074 24.5473 16.1972 24.5053C14.5091 24.4057 13.0135 23.8106 11.7347 22.7066C10.416 21.5716 9.58416 20.1424 9.25008 18.4299C9.15495 17.9432 9.11734 17.4498 9.11734 16.9542C9.11512 15.5272 9.11735 14.1024 9.11292 12.6754C9.11292 12.5802 9.1439 12.547 9.23018 12.5205C10.1506 12.2262 11.0887 11.9939 12.0378 11.8214C12.0467 11.8191 12.0555 11.8214 12.0776 11.8191C12.0776 11.8568 12.0776 11.8944 12.0776 11.9298C12.0776 13.7196 12.071 15.5117 12.0821 17.3016C12.0887 18.2043 12.2104 19.0959 12.5179 19.9521C12.7613 20.6313 13.1219 21.2375 13.6595 21.7287C14.164 22.1867 14.7547 22.4765 15.4162 22.6181C16.3521 22.8194 17.2857 22.8039 18.2039 22.5141C19.288 22.1734 20.0402 21.4521 20.5225 20.4366C20.7814 19.8946 20.9363 19.3193 21.0336 18.7286C21.142 18.0715 21.1686 17.4078 21.1686 16.744C21.1686 15.1467 21.1686 13.5471 21.1686 11.9497C21.1663 11.9076 21.1663 11.8678 21.1663 11.8037Z" fill="white" />
                        <path d="M17.9338 15.1225C17.051 15.1225 16.1771 15.1225 15.2988 15.1225C15.2988 13.065 15.2988 11.0096 15.2988 8.95644C15.5731 8.87015 17.4117 8.86351 17.9338 8.9498C17.9338 11.0074 17.9338 13.065 17.9338 15.1225Z" fill="white" />
                        <path d="M21.1663 11.8037C21.6487 11.9099 22.1155 12.0006 22.5735 12.1178C23.0602 12.2417 23.5425 12.3922 24.0248 12.5271C24.0934 12.547 24.12 12.5736 24.12 12.651C24.1177 14.1577 24.1332 15.6666 24.1133 17.1733C24.0912 18.7928 23.5801 20.2574 22.5956 21.545C21.4982 22.9809 20.0623 23.9057 18.3057 24.3261C17.6132 24.492 16.9074 24.5473 16.1972 24.5053C14.5091 24.4057 13.0135 23.8106 11.7347 22.7066C10.416 21.5716 9.58416 20.1424 9.25008 18.4299C9.15495 17.9432 9.11734 17.4498 9.11734 16.9542C9.11512 15.5272 9.11735 14.1024 9.11292 12.6754C9.11292 12.5802 9.1439 12.547 9.23018 12.5205C10.1506 12.2262 11.0887 11.9939 12.0378 11.8214C12.0467 11.8191 12.0555 11.8214 12.0776 11.8191C12.0776 11.8568 12.0776 11.8944 12.0776 11.9298C12.0776 13.7196 12.071 15.5117 12.0821 17.3016C12.0887 18.2043 12.2104 19.0959 12.5179 19.9521C12.7613 20.6313 13.1219 21.2375 13.6595 21.7287C14.164 22.1867 14.7547 22.4765 15.4162 22.6181C16.3521 22.8194 17.2857 22.8039 18.2039 22.5141C19.288 22.1734 20.0402 21.4521 20.5225 20.4366C20.7814 19.8946 20.9363 19.3193 21.0336 18.7286C21.142 18.0715 21.1686 17.4078 21.1686 16.744C21.1686 15.1467 21.1686 13.5471 21.1686 11.9497C21.1663 11.9076 21.1663 11.8678 21.1663 11.8037Z" fill="white" />
                        <path d="M17.9338 15.1225C17.051 15.1225 16.1771 15.1225 15.2988 15.1225C15.2988 13.065 15.2988 11.0096 15.2988 8.95644C15.5731 8.87015 17.4117 8.86351 17.9338 8.9498C17.9338 11.0074 17.9338 13.065 17.9338 15.1225Z" fill="white" />
                        <path d="M21.1663 11.8037C21.6487 11.9099 22.1155 12.0006 22.5735 12.1178C23.0602 12.2417 23.5425 12.3922 24.0248 12.5271C24.0934 12.547 24.12 12.5736 24.12 12.651C24.1177 14.1577 24.1332 15.6666 24.1133 17.1733C24.0912 18.7928 23.5801 20.2574 22.5956 21.545C21.4982 22.9809 20.0623 23.9057 18.3057 24.3261C17.6132 24.492 16.9074 24.5473 16.1972 24.5053C14.5091 24.4057 13.0135 23.8106 11.7347 22.7066C10.416 21.5716 9.58416 20.1424 9.25008 18.4299C9.15495 17.9432 9.11734 17.4498 9.11734 16.9542C9.11512 15.5272 9.11735 14.1024 9.11292 12.6754C9.11292 12.5802 9.1439 12.547 9.23018 12.5205C10.1506 12.2262 11.0887 11.9939 12.0378 11.8214C12.0467 11.8191 12.0555 11.8214 12.0776 11.8191C12.0776 11.8568 12.0776 11.8944 12.0776 11.9298C12.0776 13.7196 12.071 15.5117 12.0821 17.3016C12.0887 18.2043 12.2104 19.0959 12.5179 19.9521C12.7613 20.6313 13.1219 21.2375 13.6595 21.7287C14.164 22.1867 14.7547 22.4765 15.4162 22.6181C16.3521 22.8194 17.2857 22.8039 18.2039 22.5141C19.288 22.1734 20.0402 21.4521 20.5225 20.4366C20.7814 19.8946 20.9363 19.3193 21.0336 18.7286C21.142 18.0715 21.1686 17.4078 21.1686 16.744C21.1686 15.1467 21.1686 13.5471 21.1686 11.9497C21.1663 11.9076 21.1663 11.8678 21.1663 11.8037Z" fill="white" />
                        <path d="M17.9338 15.1225C17.051 15.1225 16.1771 15.1225 15.2988 15.1225C15.2988 13.065 15.2988 11.0096 15.2988 8.95644C15.5731 8.87015 17.4117 8.86351 17.9338 8.9498C17.9338 11.0074 17.9338 13.065 17.9338 15.1225Z" fill="white" />
                        <path d="M21.1663 11.8037C21.6487 11.9099 22.1155 12.0006 22.5735 12.1178C23.0602 12.2417 23.5425 12.3922 24.0248 12.5271C24.0934 12.547 24.12 12.5736 24.12 12.651C24.1177 14.1577 24.1332 15.6666 24.1133 17.1733C24.0912 18.7928 23.5801 20.2574 22.5956 21.545C21.4982 22.9809 20.0623 23.9057 18.3057 24.3261C17.6132 24.492 16.9074 24.5473 16.1972 24.5053C14.5091 24.4057 13.0135 23.8106 11.7347 22.7066C10.416 21.5716 9.58416 20.1424 9.25008 18.4299C9.15495 17.9432 9.11734 17.4498 9.11734 16.9542C9.11512 15.5272 9.11735 14.1024 9.11292 12.6754C9.11292 12.5802 9.1439 12.547 9.23018 12.5205C10.1506 12.2262 11.0887 11.9939 12.0378 11.8214C12.0467 11.8191 12.0555 11.8214 12.0776 11.8191C12.0776 11.8568 12.0776 11.8944 12.0776 11.9298C12.0776 13.7196 12.071 15.5117 12.0821 17.3016C12.0887 18.2043 12.2104 19.0959 12.5179 19.9521C12.7613 20.6313 13.1219 21.2375 13.6595 21.7287C14.164 22.1867 14.7547 22.4765 15.4162 22.6181C16.3521 22.8194 17.2857 22.8039 18.2039 22.5141C19.288 22.1734 20.0402 21.4521 20.5225 20.4366C20.7814 19.8946 20.9363 19.3193 21.0336 18.7286C21.142 18.0715 21.1686 17.4078 21.1686 16.744C21.1686 15.1467 21.1686 13.5471 21.1686 11.9497C21.1663 11.9076 21.1663 11.8678 21.1663 11.8037Z" fill="white" />
                        <path d="M17.9338 15.1225C17.051 15.1225 16.1771 15.1225 15.2988 15.1225C15.2988 13.065 15.2988 11.0096 15.2988 8.95644C15.5731 8.87015 17.4117 8.86351 17.9338 8.9498C17.9338 11.0074 17.9338 13.065 17.9338 15.1225Z" fill="white" />
                        <path d="M136.81 10.1558C134.422 10.1558 132.617 11.1295 131.718 12.597C130.812 11.1295 128.838 10.1558 126.779 10.1558C122.732 10.1558 120.667 12.7136 120.667 15.8886V23.5004H124.447V16.4235C124.447 14.9149 125.249 13.5708 127.074 13.5708C128.906 13.5708 129.853 14.8531 129.853 16.3686V23.5004H133.647V16.3686C133.647 14.8463 134.538 13.5708 136.356 13.5708C138.188 13.5708 139.039 14.9149 139.039 16.4235V23.5004H142.819V15.8886C142.812 12.7136 140.864 10.1558 136.81 10.1558Z" fill="#7000FF" />
                        <path d="M159.669 18.9059V10.4095H155.93L155.958 12.4736C155.141 11.2598 153.714 10.1558 151.176 10.1558C146.812 10.1558 144.569 13.5434 144.569 16.9447C144.487 20.3871 147.025 23.809 150.991 23.809C153.09 23.809 155.011 22.8764 155.93 21.2375C156.301 22.3209 157.241 23.5073 159.189 23.5073H161.35V20.3323H160.746C159.992 20.3323 159.669 20.0511 159.669 18.9059ZM151.965 20.5311C149.817 20.5311 148.212 19.0499 148.212 16.9721C148.212 14.9217 149.817 13.4679 151.965 13.4679C154.181 13.4679 155.786 14.9217 155.786 16.9721C155.786 19.0499 154.181 20.5311 151.965 20.5311Z" fill="#7000FF" />
                        <path d="M163.758 14.8738V23.5005H167.538V17.7128C167.538 15.4704 169.164 14.0303 171.236 14.0303H173.706V10.1353H171.854C169.569 10.1353 167.902 12.0828 167.538 13.2143V12.8165V10.4027H163.758V14.8738Z" fill="#7000FF" />
                        <path d="M175.943 23.5004H179.723V17.0886L185.596 23.5004H190.055L183.97 16.7732L189.589 10.4095H185.143L179.723 16.5469V6.35669H175.943V23.5004Z" fill="#7000FF" />
                        <path d="M194.479 17.9802C194.479 19.4202 195.227 20.874 197.642 20.874C199.858 20.874 200.18 19.5437 200.18 19.5437H204.331C204.331 19.5437 203.947 23.809 197.642 23.809C193.251 23.809 190.5 21.354 190.5 16.9721C190.5 12.5833 193.251 10.1558 197.601 10.1558C201.889 10.1558 204.654 12.5833 204.654 16.9721C204.654 17.4521 204.571 17.987 204.571 17.987H194.479V17.9802ZM194.527 15.676H200.613C200.613 14.6063 199.995 13.0908 197.594 13.0908C195.227 13.0908 194.527 14.6131 194.527 15.676Z" fill="#7000FF" />
                        <path d="M213.279 20.2157C211.982 20.2157 211.515 19.6396 211.515 17.8155V13.2005H215.611V10.1626H211.515V7.54993H209.471L205.828 11.0335V13.2073H207.735V18.3161C207.735 21.9849 209.526 23.5278 213.279 23.5278H215.618V20.2225H213.279V20.2157Z" fill="#7000FF" />
                        <path d="M84.2978 17.2052C84.2978 19.2762 83.1246 20.2362 81.382 20.2362C79.6394 20.2362 78.5074 19.2968 78.5074 17.2052V10.3615H74.7477V17.3355C74.7477 21.882 78.5485 23.6581 81.4094 23.6581C84.2703 23.6581 88.078 21.8752 88.078 17.3355V10.3615H84.3183L84.2978 17.2052Z" fill="#7000FF" />
                        <path d="M71.5644 13.5365V10.3615H59.3456V13.5365H66.5836L59.0574 20.2431V23.4181H72.0309V20.2431H64.052L71.5644 13.5365Z" fill="#7000FF" />
                        <path d="M106.904 10.1147C104.523 10.1147 102.726 11.0816 101.834 12.556C100.928 11.0816 98.9589 10.1147 96.9144 10.1147C92.8941 10.1147 90.8016 12.6726 90.8016 15.8407V23.4182H94.5612V16.3688C94.5612 14.8533 95.357 13.5229 97.182 13.5229C97.5525 13.5023 97.9229 13.5572 98.2728 13.6875C98.6227 13.8178 98.9383 14.0235 99.199 14.2909C99.4597 14.5515 99.6655 14.8738 99.7959 15.2236C99.9263 15.5733 99.9811 15.9436 99.9606 16.3139V23.4182H103.721V16.3139C103.721 14.7984 104.613 13.5229 106.417 13.5229C108.221 13.5229 109.093 14.8533 109.093 16.3688V23.4182H112.852V15.8476C112.852 12.6863 110.911 10.1216 106.87 10.1216L106.904 10.1147Z" fill="#7000FF" />
                        <path d="M52.8142 17.2052C52.8142 19.2762 51.6411 20.2362 49.9122 20.2362C48.1833 20.2362 47.0238 19.2968 47.0238 17.2052V10.3615H43.2642V17.3355C43.2642 21.882 47.0513 23.6581 49.9259 23.6581C52.8005 23.6581 56.5807 21.8752 56.5807 17.3355V10.3615H52.8211L52.8142 17.2052Z" fill="#7000FF" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_18506">
                            <rect width="215" height="32" fill="white" transform="translate(0.617554 0.719849)" />
                        </clipPath>
                    </defs>
                </svg>
                </NavLink>

                </div>
                <button className="navbar__catagory_btns">
                    <NavLink  className="navbar__catagory_btn" to={"katalog"}>

                    {/* <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="4.3175" y="10.2198" width="17" height="11" rx="1.5" fill="#7000FF" />
                        <rect x="4.3175" y="10.2198" width="17" height="11" rx="1.5" stroke="#7000FF" />
                        <rect x="5.41748" y="11.3198" width="14.8" height="8.8" rx="1" fill="#F0F0FF" />
                        <mask id="path-3-inside-1_1_18531" fill="white">
                            <path d="M5.82751 5.31985C5.82751 4.43619 6.54386 3.71985 7.42751 3.71985H18.2175C19.1012 3.71985 19.8175 4.43619 19.8175 5.31985H5.82751Z" />
                        </mask>
                        <path d="M5.82751 5.31985C5.82751 3.55254 7.2602 2.11985 9.02751 2.11985H16.6175C18.3848 2.11985 19.8175 3.55254 19.8175 5.31985C19.8175 5.31985 19.1012 5.31985 18.2175 5.31985H7.42751C6.54386 5.31985 5.82751 5.31985 5.82751 5.31985ZM19.8175 5.31985H5.82751H19.8175ZM5.82751 5.31985V3.71985V5.31985ZM19.8175 3.71985V5.31985V3.71985Z" fill="#7000FF" mask="url(#path-3-inside-1_1_18531)" />
                        <mask id="path-5-inside-2_1_18531" fill="blue">
                            <path d="M4.82751 8.31985C4.82751 7.43619 5.54386 6.71985 6.42751 6.71985H19.2075C20.0912 6.71985 20.8075 7.43619 20.8075 8.31985H4.82751Z" />
                        </mask>
                        <path d="M4.82751 8.31985C4.82751 7.43619 5.54386 6.71985 6.42751 6.71985H19.2075C20.0912 6.71985 20.8075 7.43619 20.8075 8.31985H4.82751Z" fill="#7000FF" />
                        <path d="M4.82751 8.31985C4.82751 6.55254 6.2602 5.11985 8.02751 5.11985H17.6075C19.3748 5.11985 20.8075 6.55254 20.8075 8.31985C20.8075 8.31985 20.0912 8.31985 19.2075 8.31985H6.42751C5.54386 8.31985 4.82751 8.31985 4.82751 8.31985ZM20.8075 8.31985H4.82751H20.8075ZM4.82751 8.31985V6.71985V8.31985ZM20.8075 6.71985V8.31985V6.71985Z" fill="#7000FF" mask="url(#path-5-inside-2_1_18531)" />
                    </svg> */}
                    <IoMenu style={{width:"23px", height:"23px"}}/>


                    {/* <IoMenu /> */}
                    <p className="mushroom">

                    katalog 
                    </p>
                    </NavLink>
                </button>
                <div className="navbar__search"><input type="text" placeholder='Mahsulotlar va turkumlar izlash ' name="" id="" /><button>
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0551 6.5C12.0551 9.2614 9.81645 11.5 7.05505 11.5C4.29363 11.5 2.05505 9.2614 2.05505 6.5C2.05505 3.73858 4.29363 1.5 7.05505 1.5C9.81645 1.5 12.0551 3.73858 12.0551 6.5ZM10.8949 11.7451C9.81905 12.5341 8.49145 13 7.05505 13C3.4652 13 0.555054 10.0899 0.555054 6.5C0.555054 2.91015 3.4652 0 7.05505 0C10.645 0 13.5551 2.91015 13.5551 6.5C13.5551 7.9364 13.0892 9.264 12.3002 10.3398L16.2641 14.3036C16.6521 14.6917 16.6521 15.3209 16.2641 15.709C15.876 16.097 15.2468 16.097 14.8587 15.709L10.8949 11.7451Z" fill="#595B66" />
                </svg>
          

                </button></div>
                <ul className="navbar__collaction">
                        <li className='navbar__item' id='none'>
                            <NavLink className="Navlink link" to={"/"}>

                        {/* <svg data-v-b2fd8610="" width="28" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="ui-icon ">
<g id="Icon">
<g id="Icon_2">
<path d="M14.5001 7.54553C14.1116 7.54553 13.7296 7.562 13.351 7.59492L13.3444 12.9357H15.6493V7.59492C15.2706 7.54553 14.8887 7.54553 14.5001 7.54553Z" fill="#1F2026"></path>
<path d="M19.0543 19.1165C20.2621 17.9087 20.9407 16.2705 20.9407 14.5623V10.7065C20.1054 10.4275 19.2516 10.2075 18.3855 10.048V14.5393C18.3855 17.7694 17.0158 19.4586 14.5001 19.4586C11.9845 19.4586 10.618 17.7694 10.618 14.5393V10.048C9.75095 10.2079 8.89607 10.4279 8.05957 10.7065V14.5623C8.05957 16.2705 8.73813 17.9087 9.94597 19.1165C11.1538 20.3243 12.792 21.0029 14.5001 21.0029C16.2083 21.0029 17.8465 20.3243 19.0543 19.1165Z" fill="#000"></path>
<path d="M14.5 2C7.87258 2 2.5 7.37258 2.5 14C2.5 20.6274 7.87258 26 14.5 26C21.1274 26 26.5 20.6274 26.5 14C26.5 7.37258 21.1274 2 14.5 2ZM4 14C4 8.20101 8.70101 3.5 14.5 3.5C20.299 3.5 25 8.20101 25 14C25 19.799 20.299 24.5 14.5 24.5C8.70101 24.5 4 19.799 4 14Z" fill="#1F2026"></path>
</g>
</g>
</svg> */}
    <BiHome />
<p className='navbar__bottom__bar'>

Bosh sahifa
</p>
                            </NavLink>

                        </li>
                        <li className='navbar__item' id='none'>
                            <NavLink className="Navlink link" to={"Katalog"}>

                        {/* <svg data-v-b2fd8610="" width="28" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="ui-icon ">
<g id="Icon">
<g id="Icon_2">
<path d="M1.5 12.5C1.5 7.25329 5.75329 3 11 3C16.2467 3 20.5 7.25329 20.5 12.5C20.5 14.853 19.6445 17.0062 18.2276 18.6656L24.2795 24.6993C24.5728 24.9917 24.5735 25.4666 24.2811 25.7599C23.9886 26.0532 23.5138 26.054 23.2204 25.7615L17.1671 19.7264C15.5075 21.144 13.3537 22 11 22C5.75329 22 1.5 17.7467 1.5 12.5ZM11 4.5C6.58172 4.5 3 8.08172 3 12.5C3 16.9183 6.58172 20.5 11 20.5C15.4183 20.5 19 16.9183 19 12.5C19 8.08172 15.4183 4.5 11 4.5Z" fill="#1F2026"></path>
<path d="M22.75 6.00003C22.3358 6.00003 22 6.33582 22 6.75003C22 7.16424 22.3358 7.50003 22.75 7.50003H26.75C27.1642 7.50003 27.5 7.16424 27.5 6.75003C27.5 6.33582 27.1642 6.00003 26.75 6.00003H22.75Z" fill="#1F2026"></path>
<path d="M22.75 11.75C22.3358 11.75 22 12.0858 22 12.5C22 12.9142 22.3358 13.25 22.75 13.25H26.75C27.1642 13.25 27.5 12.9142 27.5 12.5C27.5 12.0858 27.1642 11.75 26.75 11.75H22.75Z" fill="#1F2026"></path>
<path d="M22.75 17.5C22.3358 17.5 22 17.8358 22 18.25C22 18.6642 22.3358 19 22.75 19H26.75C27.1642 19 27.5 18.6642 27.5 18.25C27.5 17.8358 27.1642 17.5 26.75 17.5H22.75Z" fill="#1F2026"></path>
</g>
</g>
</svg> */}
<RiMenuSearchLine />

<p className='navbar__bottom__bar'>

 
Katalog
</p>
</NavLink>
                        </li>
                        <li className='navbar__item'>
                            <NavLink className="Navlink" to={"Login"}>

                        {/* <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5478 3C10.3387 3 8.54785 4.79086 8.54785 7V8C8.54785 10.2091 10.3387 12 12.5478 12C14.7569 12 16.5478 10.2091 16.5478 8V7C16.5478 4.79086 14.7569 3 12.5478 3ZM10.0478 7C10.0478 5.61929 11.1671 4.5 12.5478 4.5C13.9285 4.5 15.0478 5.61929 15.0478 7V8C15.0478 9.38071 13.9285 10.5 12.5478 10.5C11.1671 10.5 10.0478 9.38071 10.0478 8V7ZM6.05017 19.3686C6.52106 16.2577 9.56588 14.5 12.55 14.5C15.5336 14.5 18.5788 16.2577 19.0497 19.3686C19.0524 19.3866 19.0503 19.3972 19.0478 19.4048C19.0448 19.4137 19.0381 19.4269 19.0237 19.442C18.9931 19.4741 18.9372 19.5039 18.8649 19.5039H6.23503C6.16272 19.5039 6.10683 19.4741 6.07623 19.442C6.06179 19.4269 6.05511 19.4137 6.05212 19.4048C6.04959 19.3972 6.04746 19.3865 6.05017 19.3686ZM12.55 13C9.12106 13 5.18822 15.0404 4.56707 19.1441C4.40409 20.2208 5.30512 21.0039 6.23503 21.0039H18.8649C19.7948 21.0039 20.6958 20.2208 20.5328 19.1441C19.9116 15.0404 15.9784 13 12.55 13Z" fill="#1F2026"/>
</svg> */}
<FaRegUser/>
<p className='navbar__bottom__bar'>

 
Kirish
</p>
</NavLink>
                        </li>
                        <li className='navbar__item'>
                            <NavLink className="Navlink" to={"Wishes"}>

                        {/* <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.10785 5.5C5.8772 5.5 4.10785 7.30906 4.10785 9.5C4.10785 10.4282 4.48469 11.4436 5.15655 12.5105C5.82477 13.5716 6.74933 14.6274 7.75912 15.6219C9.16554 17.007 10.6396 18.1879 11.7786 19.1003C12.0812 19.3427 12.3601 19.5661 12.6078 19.7694C12.8555 19.5661 13.1344 19.3427 13.437 19.1003C14.576 18.1879 16.0501 17.007 17.4565 15.6219C18.4663 14.6274 19.3909 13.5716 20.0591 12.5105C20.731 11.4436 21.1078 10.4282 21.1078 9.5C21.1078 7.30898 19.3392 5.5 17.1078 5.5C14.9551 5.5 13.6816 7.20226 13.334 7.74742C12.9967 8.27655 12.2189 8.27653 11.8816 7.74742C11.534 7.20225 10.2606 5.5 8.10785 5.5ZM2.60785 9.5C2.60785 6.49094 5.0385 4 8.10785 4C10.3393 4 11.8327 5.30207 12.6078 6.21581C13.3829 5.30207 14.8764 4 17.1078 4C20.178 4 22.6078 6.49102 22.6078 9.5C22.6078 10.8218 22.0784 12.1189 21.3284 13.3098C20.5747 14.5066 19.5618 15.6539 18.5091 16.6906C17.0507 18.1269 15.4158 19.4384 14.258 20.3672C13.7727 20.7565 13.3712 21.0786 13.1017 21.3144C12.8189 21.5619 12.3967 21.5619 12.1139 21.3144C11.8444 21.0786 11.4429 20.7565 10.9576 20.3672C9.79986 19.4384 8.16497 18.1269 6.70658 16.6906C5.65387 15.6539 4.64093 14.5066 3.88727 13.3098C3.13726 12.1189 2.60785 10.8218 2.60785 9.5Z" fill="#1F2026"/>
</svg> */}
<FaRegHeart/>
<p className='navbar__bottom__bar'>

 
Saralangan
</p>
</NavLink>
                        </li>
                        <li className='navbar__item'>
                            <NavLink className="Navlink" to={"Cart"}>

                        {/* <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.65784 6.5C9.65784 4.88779 10.898 3.5 12.6578 3.5C14.4176 3.5 15.6578 4.88779 15.6578 6.5V7.5H9.65784V6.5ZM8.15784 9V11.5H9.65784V9H15.6578V11.5H17.1578V9H19.1578V19.75C19.1578 20.1642 18.822 20.5 18.4078 20.5H6.90784C6.49363 20.5 6.15784 20.1642 6.15784 19.75V9H8.15784ZM8.15784 7.5V6.5C8.15784 4.11221 10.0177 2 12.6578 2C15.298 2 17.1578 4.11221 17.1578 6.5V7.5H19.9078H20.6578V8.25V19.75C20.6578 20.9926 19.6504 22 18.4078 22H6.90784C5.6652 22 4.65784 20.9926 4.65784 19.75V8.25V7.5H5.40784H8.15784Z" fill="#1F2026"/>
</svg> */}
<FiShoppingCart />

<p className='navbar__bottom__bar'>

 
Savat
</p>
</NavLink>
                        </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar

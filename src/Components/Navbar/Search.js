import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosCloseCircle } from "react-icons/io";
import { useLocation } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
function Search({ data }) {
    const [inputValue, setInputValue] = useState('');
    const [search, setSearch] = useState([]);

    useEffect(() => {
        if (inputValue.trim()) {
            let filterData = data.filter(el => el.title.toLowerCase().includes(inputValue.toLowerCase().trim()));
            setSearch(filterData);
        } else {
            setSearch([])
        }
    }, [inputValue, data]);

    const handleClearInput = () => {
        setInputValue('');
    };

    const location = useLocation();

    if (location.pathname.toLowerCase().includes('login') || location.pathname.includes('admin')) {
        return null;
    }

    return (
        
            <div className="navbar__search">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder='Mahsulotlar va turkumlar izlash '
                    className='input_in'
                />
                {
                  inputValue.length > 0 && <img src="https://uzum.uz/static/img/penguin.a739ac8.png" alt="" />
                }
                {inputValue.trim().length > 0 && (
                    <button className='d' onClick={handleClearInput}>
                        <IoIosCloseCircle className='svg' />
                    </button>
                )}
                {inputValue.trim() && search.length > 0 && (
                    <div className="navbr_search_dropDovn">
                        {search.map((el) => (
                            <NavLink to={`product/${el._id}`} key={el._id} className='nav__search-item'>
                                <img src={el.url[0]} width={40} alt="" />
                                <div className="qidirish">
                                    <p>{el.title}</p>
                                    <b>{el.price.brm()} so'm</b>
                                </div>
                            </NavLink>
                        ))}
                        
                    </div>
                    
                )}
                <button className='searchs'>
                <IoSearchOutline />
                </button>
            </div>
        
    )
}

export default Search;

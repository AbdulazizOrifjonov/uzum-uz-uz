import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";
function GetUpTopButton() {
    const [goTop, setGoTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setGoTop(true);
            } else {
                setGoTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {goTop && (
                <button className='goTop' onClick={scrollUp} style={{ position: 'fixed', bottom: '60px', right: '60px', zIndex: '999' }}>
                    <IoIosArrowUp />

                </button>
            )}
        </div>
    );
}

export default GetUpTopButton;

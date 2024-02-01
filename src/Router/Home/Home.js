import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Product from '../../Components/Product/Product';

function Home({ data }) {
    console.log(data);
    return (
        <div className='container'>
            <Banner />
            {/* manashu yo'l hato */}
           <Product data={data}/>
            {/* manashu yo'l hato */}


        </div>
    )
}

export default Home

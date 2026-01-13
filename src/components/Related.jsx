import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const Related = ({category, subCategory}) => {
    const {products} = useContext(ShopContext)
    const [related, setRelated] = useState([])

    useEffect(()=>{
        if(products.length>0){
            let productsCopy = products.slice()
            productsCopy = productsCopy.filter((item)=>category === item.category)
            productsCopy = productsCopy.filter((item)=>subCategory  === item.subCategory)
            setRelated(productsCopy.slice(0,5));
        }
    },[])


    return (
        <div className='my-24'>
        <div className='text-center py-2 text-3xl'>
            <Title text1={'Related'} text2={'Products'}/>
        </div>
        {/**Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {related.map((item)=>
            <ProductItem key={item?._id} productData={item}/>
            )}
        </div>
    </div>
  )
}

export default Related
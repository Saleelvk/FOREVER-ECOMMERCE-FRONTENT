import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import product from '../pages/product'
import Titles from './Titles'
import ProductItem from './ProductItem'

function RelatedProduct({categories,subCategories}) {

    const {products}=useContext(ShopContext)
    const[related,SetRelated]=useState([])

    useEffect(()=>{
        if(products.length >0){
            
            let productsCopy =products.slice()

            productsCopy=productsCopy.filter((item)=>categories === item.category)
            productsCopy=productsCopy.filter((item)=>subCategories === item.subCategory)
            SetRelated(productsCopy.slice(0,5))
        }
    },[products])

  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Titles  text1={'RELATED'} text2={'PRODUCTS'}/>
        </div>
+
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {related.map((item,index)=>(
            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
        ))}
        </div>
      
    </div>
  )
}

export default RelatedProduct

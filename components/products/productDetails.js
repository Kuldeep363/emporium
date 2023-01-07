import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import LoadingProduct from '../extraComponents/LoadingProduct'
import NoProducts from '../extraComponents/NoProducts'
import ProductDetailsData from './productDetailsData'

const ProductDetails = () => {
    const [productDetails, setProductDetails] = useState(null)
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    const fetchProductDetails = async()=>{
        setLoading(true)
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json()
        if (data){
            setProductDetails(data);
            setLoading(false);
        }
    }
    
    useEffect(()=>{
        fetchProductDetails();
    },[id])
  return (
    <div id='product__details' className='mt padding'>
        {
            loading?
            <LoadingProduct/>
            :
            (
                productDetails.message?
                <NoProducts searchPage={false}/>
                :
                <ProductDetailsData data={productDetails}/>
            )
        }
    </div>
  )
}

export default ProductDetails

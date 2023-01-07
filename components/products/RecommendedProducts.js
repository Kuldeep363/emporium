import React, { useEffect, useState } from 'react'
import Product from './product';

const RecommendedProducts = ({category,id}) => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async()=>{
        const res = await fetch(`https://dummyjson.com/products/category/${category}`)
        const data = await res.json()

        if(data && data.products){
            setProducts(data.products.filter((p)=>p.id!==id))
        }
    }
    useEffect(()=>{
        fetchProducts();
    },[id])
  return (
    <div>
        {
            products.length>0?
            <div id='recommended__products'>
              {
                products.map((product)=>{
                  return (
                    <Product key={product.id} id={product.id} title={product.title} img={product.thumbnail} price={product.price} rating={product.rating} recommended={true}  />
                  )
                })
              }
            </div>
            :
            null
        }
    </div>
  )
}

export default RecommendedProducts

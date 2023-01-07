import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Loading from '../components/extraComponents/Loading';
import Footer from '../components/footer/Footer';
const NoProducts = lazy(()=>import('../components/extraComponents/NoProducts'));
const Product = lazy(()=>import('../components/products/product'));

const Category = () => {
    const {category} = useParams()
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const fetchProducts = async()=>{
        const res = await fetch(`https://dummyjson.com/products/category/${category}`);
        const data = await res.json()

        if(data && data.products){
            setProducts(data.products)
        }
        setLoading(false)
    }

    useEffect(()=>{
        fetchProducts();
    },[category])
  return (
    <>
      <Suspense>
      <div id='product__listing' className='mt padding'>
        <h3>{category}</h3>
        {
          loading?
          <Loading/> 
          :
          products.length>0 ?
            <div className='product__listing'>
                {
                  products.map((product)=>{
                    return (
                      <Product key={product.id} id={product.id} title={product.title} img={product.thumbnail} price={product.price} rating={product.rating}  />
                    )
                  })
                }
            </div>
            :
            <NoProducts searchPage={false}/>
        }
      </div>
    </Suspense>
    <Footer/>
    </>
  )
}

export default Category

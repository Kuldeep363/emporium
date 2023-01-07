import React, { lazy, Suspense } from 'react'
import Banner from '../components/banner/banner'
import Footer from "../components/footer/Footer";
const ProductListing = lazy(()=>import('../components/products/productListing'))

const Home = () => {
  return (
    <div>
        <Banner/>
        <Suspense fallback={<>Loading...</>}>
          <ProductListing/>
        </Suspense>
        <Footer/>
    </div>
  )
}

export default Home
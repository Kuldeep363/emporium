import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NoProducts = ({searchPage=true}) => {
  return (
    <div className="d-flex justify-center ">
        <div id='no__product' className='search__form'>
            <Image src={'/assets/images/no-product-found.webp'} alt="No products! --by  kuldeep rawat" width='300' height='300' />
            <h3>No products found...</h3>
            <p>Search for the products you want.</p>
            {
                searchPage ?
                null:
                <Link className='add__to__cart' href='/Search' as='/search'>
                    Search products
                </Link>
            }
        </div>
    </div>
  )
}

export default NoProducts

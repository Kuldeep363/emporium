import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { lazy, Suspense, useEffect, useState } from "react";
import Loading from "../extraComponents/Loading";
const NoProducts = lazy(()=> import("../extraComponents/NoProducts"))      ;
const Product  = lazy(()=>import('./product'))

const ProductListing = () => {

  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const fetchProducts = async()=>{
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${(page-1)*10}&select=title,price,thumbnail,rating`)
    const data = await res.json();

    if(data && data.products){
      setProducts(data.products);
      setTotalPages(data.total/10)
      setLoading(false)
      window.scrollTo(0,150)
    }
  };

  const handlePageChange = (pageSelected)=>{
    if(pageSelected>=1 && pageSelected<=totalPages && pageSelected!==page){
      setPage(pageSelected)
    }
  }  
// console.log(products)
  useEffect(()=>{
    fetchProducts();
  },[page])

  return (
    <div id='product__listing' className='padding'>
      <h3>Recommended products</h3>
      {
        loading?
        <Loading/> 
        :
        <Suspense fallback={null}>
          {
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
              <NoProducts/>

          }
        </Suspense>
      }
      
      <div>
        <div className="pagination__tabs">
          {
            totalPages>0 && 
              [...Array(totalPages)].map((_,i)=>{
                return (
                  <div onClick={()=>handlePageChange(i+1)} className={`pagination__tab ${page===i+1?'pagination__selected':''}`} key={i+1}>
                    <span>{i+1}</span>
                  </div>
                )
              })
          }
        </div>
        <div className="pagination__tabs">
          <div onClick={()=>handlePageChange(page-1)} className={`pagination__btns ${page>1?'':'pagination__btns__disabled'}`}>
            <NavigateBeforeRoundedIcon/>
          </div>
          <div onClick={()=>handlePageChange(page+1)} className={`pagination__btns ${page<totalPages?'':'pagination__btns__disabled'}`}>
            <NavigateNextRoundedIcon/>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default ProductListing;

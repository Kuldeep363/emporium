import Header from '../components/header/Header'
import '../styles/globals.css';
import ScrollToTop from "../components/extraComponents/ScrollToTop";
import { createContext, lazy, Suspense, useContext, useEffect, useReducer } from "react";
import reducer from "../store/reducer";
// import Login from "./pages/Login";
// import UserAccount from "./pages/UserAccount";
// import CheckoutPage from "./pages/CheckoutPage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
// const Home = lazy(()=>import("./pages/Home"));
// const Category = lazy(()=>import("./pages/Category"));
// const Search = lazy(()=> import("./pages/Search"));
// const ProductDetails = lazy(()=> import("./components/products/productDetails"));


let CartContext = createContext();

export default function App({ Component, pageProps }) {
  let data = {
    "user":null,
    "cart" :{
      'products':[],
      'totalPrice':0
    }
  };
  let [state, dispatch] = useReducer(reducer,data);

  const addToStore = (data)=>{
    dispatch({
      type:'INIT_STORE',
      payload:data
    })
  }

  useEffect(()=>{

      data = JSON.parse(localStorage.getItem('data'))
      if(!data){
        data = {
          "user":null,
          "cart" :{
            'products':[],
            'totalPrice':0
          }
        }
        dispatch({
          type:'INIT_STORE',
          payload:data
        })
      }else{
        data = {
          "user":data.user,
          "cart" :data.cart
        }
        dispatch({
          type:'INIT_STORE',
          payload:data
        })
      }
      // addToStore(data)
    
    },[])

  return (
    <>
      <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/logo.webp" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#0590ec" />
          <meta
            name="description"
            content="Welcome to Emporium, the premier online destination for all your shopping needs. With a wide selection of products ranging from fashion and home goods to electronics and gifts, we have something for everyone. Our site is easy to navigate and features secure checkout, making it the perfect place to shop from the comfort of your own home. Shop now and discover the endless possibilities at Emporium."
          />

          <meta property="og:image" content="data:image/png;base64,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" />
          <meta property="og:title" content="Emporium | A place to sell goods | Sale on top brands" />
          <meta property="og:description" content="Welcome to Emporium, the premier online destination for all your shopping needs. With a wide selection of products ranging from fashion and home goods to electronics and gifts, we have something for everyone. Our site is easy to navigate and features secure checkout, making it the perfect place to shop from the comfort of your own home. Shop now and discover the endless possibilities at Emporium." />
          <meta property="og:url" content="https://kr-emporium.vercel.app/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="data:image/png;base64,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" />
          <meta name="twitter:title" content="Emporium | A place to sell goods | Sale on top brands" />
          <meta name="twitter:description" content="Welcome to Emporium, the premier online destination for all your shopping needs. With a wide selection of products ranging from fashion and home goods to electronics and gifts, we have something for everyone. Our site is easy to navigate and features secure checkout, making it the perfect place to shop from the comfort of your own home. Shop now and discover the endless possibilities at Emporium." />
          <link rel="apple-touch-icon" href="../assets/images/logo.webp" />
          {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
          <title>Emporium | A place to sell goods | Sale on top brands</title>
      </Head>
      <CartContext.Provider value={{state, dispatch}}>
        <ScrollToTop/>
        <Header />
        <ToastContainer 
        position="bottom-center"
        autoClose={700}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
        />
        <Component {...pageProps} />
      </CartContext.Provider>
    </>
  )
}

export const CartState = ()=>{
  return useContext(CartContext);
}
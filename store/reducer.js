const reducer = (state,action)=>{
    let data;
    switch (action.type){
        case "ADD_TO_CART":
            if(navigator.vibrate){
                navigator.vibrate(75)
            }
            data = {...state,cart:{...state.cart,products:[...state.cart.products,{...action.payload}]}}
            localStorage.setItem('data',JSON.stringify(data))
            return data
            
        case "REMOVE_FROM_CART":
            data = {...state,cart:{...state.cart, products:[...state.cart.products.filter(product=>product.id!==action.payload.id)]}}
            localStorage.setItem('data',JSON.stringify(data))
            return data
            
        case "EMPTY_CART":
            data={...state,cart:{products:[],totalPrice:0}}
            localStorage.setItem('data',JSON.stringify(data))
            return data

        case 'CHANGE_QUANTITY':
            data = {...state,
                cart:{
                    ...state.cart,
                    products:[...state.cart.products.filter((product)=>(
                        product.id === action.payload.id?
                            product.quantity = action.payload.quantity
                            :product.quantity
                        
                    ))]
                }
            }
            localStorage.setItem('data',JSON.stringify(data))
            return data
            
        case 'SET_TOTAL':
            data={...state,
                cart:{
                    ...state.cart,
                    totalPrice: action.payload.price
                }
            }
            localStorage.setItem('data',JSON.stringify(data))
            return data
            
        case 'LOGIN':
            data = {
                ...state,
                user:{...action.payload}
            }
            localStorage.setItem('data',JSON.stringify(data))
            return data
        case 'LOGOUT':
            data = {
                ...state,
                user:null
            }
            localStorage.setItem('data',JSON.stringify(data))
            return data

        case 'INIT_STORE':
            data = {
                ...action.payload
            }
            return data
        default:
            return state
    }
}

export default reducer
import { CartState } from "../pages/_app";


const Auth = ()=> {
    const {state} = CartState();
    return state.user !== null?true:false
}

export default Auth
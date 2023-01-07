import {CartState} from "../../pages/_app";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { toast} from 'react-toastify';
import { useRouter } from "next/router";
import Image from "next/image";

const Product = ({
    id,
    title,
    img,
    price,
    rating
}) => {

    const navigate = useRouter()
    const {state, dispatch} = CartState()

    const addToCart = (e) => {
        e.stopPropagation()
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                id,
                title,
                img,
                price,
                quantity: 1
            }
        })
        toast.success('Added to cart')
    }
    const removeFromCart = (e) => {
        e.stopPropagation()

        dispatch({type: 'REMOVE_FROM_CART', payload: {
                id
            }})
            toast.error('Removed from cart')
    }

    const navigateToProduct = () => {
        navigate.push(`/product/${id}/${title}`)
    }

    return (
        <div className='product'
            onClick={
                () => navigateToProduct()
        }>
            <div className="product__img">
                <Image src={img}
                    alt={title} width='300' height='300' />
            </div>
            <div className="product__data">
                <div className='d-flex justify-between'>
                    <h5>{title}</h5>
                    <small className="product__rating">
                        <StarRateRoundedIcon/>
                        <span> {
                            (Math.round((rating * 10)) / 10).toFixed(1)
                        } </span>
                    </small>
                </div>
                <p>${price}</p>
            </div>
            <div className="product__data">
                {
                state.cart.products.some(product => product.id === id) ? <div className="remove__from__cart"
                    onClick={
                        (e) => removeFromCart(e)
                }>
                    <RemoveShoppingCartOutlinedIcon/>
                    <span>
                        Remove from cart
                    </span>
                </div> : <div className="add__to__cart"
                    onClick={
                        (e) => addToCart(e)
                }>
                    <AddShoppingCartOutlinedIcon/>
                    <span>
                        Add to cart
                    </span>
                </div>
            } </div>
        </div>
    );
};
export default Product;

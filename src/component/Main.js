import React from 'react'

import { useDispatch } from 'react-redux'
import { addToCart , removeToCart } from '../redux/action';
import { productList } from '../redux/productAction';
import { useSelector } from 'react-redux';

export default function Main() {
const dispatch = useDispatch() ;

const productInfo = useSelector((state) => state.productList)
console.log('product info : ', productInfo);


const data = {
     type:'ADD_TO_CART' ,
     Name:'Rahul Kumar Singh' ,
     Roll:'91'
}

  return (
    <div>
        <div>
            <button onClick={()=>{dispatch(addToCart(data))}}>
               Increase 
            </button>
        </div>

        <div>
            <button onClick={()=>{
                 dispatch(removeToCart())
            }}>
                Decrease
            </button>
        </div>       

        <div>
            <button onClick={()=>{dispatch(productList())}}>
                showProductList
            </button>
        </div>
    </div>
  )
}

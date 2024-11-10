export  const addToCart  = (data)=>
 {
    console.log('yeh rha data :' , data) ;

    return {
        type:data.type ,
        data
    }
 }

export const removeToCart = ()=>{
    console.log('remove to cart call hua ');

    return{
        type:"REMOVE_TO_CART" 
    }
}
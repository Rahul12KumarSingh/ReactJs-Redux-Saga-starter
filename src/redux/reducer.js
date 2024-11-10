// const data = [] ;

export const cartData = (data = [] , action)=>{

    console.log("action call hua" , action.type) ;
      
    switch(action.type)
     {
        case "ADD_TO_CART" :
            //add to cart logic
            return [action.data , ...data] ;
       
        case "REMOVE_TO_CART" :
              return data.slice(0  , -1) ;
        default :
           //no case matched
            console.log('cardData ka default case')
           return  data ;
     }
 }


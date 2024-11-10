

const productList = ( data=[] , action)=>{
      switch(action.type){
        case  'SET_PRODUCT_LIST' :
            console.log('set product list is called inside the productReducer.js file') ;
            console.log('data : ', action.data);
            return [...data , action.data] 
        default:
             console.log('default case is called inside the proioductReducer File') ;
             return data
      }
}

export {productList}; 


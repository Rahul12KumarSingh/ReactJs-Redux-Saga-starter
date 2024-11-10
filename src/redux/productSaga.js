
import { takeEvery , put} from 'redux-saga/effects'

function* getProducts() {
  //here i can  make the api call... 
    
  const url = 'https://fakestoreapi.com/products/2' ;
  var apiData =  yield fetch(url) ;
  apiData = yield apiData.json() ;
 
  yield put({
      type : 'SET_PRODUCT_LIST' ,
      data : apiData 
   })
}



function* testCart() {
    //test cart... 
    console.log('add to Cart is called inside the productSaga');
}

function* productSaga() //generator function
 {
    yield takeEvery('PRODUCT_LIST', getProducts);
    yield takeEvery('ADD_TO_CART' , testCart) ;
 }

export default productSaga;
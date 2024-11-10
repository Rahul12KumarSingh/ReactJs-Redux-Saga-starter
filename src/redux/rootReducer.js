import { productList } from './productReducer'
import {cartData} from './reducer'

import { combineReducers } from 'redux'

export default combineReducers({
      cartData ,
      productList
})


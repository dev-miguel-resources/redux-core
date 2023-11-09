import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import accountReducer from './redux/features/accounts/account.reducer'
import customerReducer from './redux/features/customers/customer.reducer'

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

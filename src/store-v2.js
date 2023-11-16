import { configureStore } from '@reduxjs/toolkit'

import accountReducer from './redux/features/accounts/account.slice'
import customerReducer from './redux/features/customers/customer.slice'

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
})

export default store;

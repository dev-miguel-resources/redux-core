import { legacy_createStore as createStore, combineReducers } from 'redux'

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
}

const initialStateCustomer = {
  fullName: '',
  nationalID: '',
  createdAt: '',
}

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case 'account/deposit':
      return { ...state, balance: state.balance + action.payload }
    case 'account/withdraw':
      return { ...state, balance: state.balance - action.payload }
    case 'account/requestLoan':
      if (state.loan > 0) return state
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      }
    case 'account/payLoan':
      return {
        ...state,
        loan: 0,
        loanPurpose: '',
        balance: state.balance - state.loan,
      }
    default:
      return state
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case 'customer/createCustomer':
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
})

export const store = createStore(rootReducer)

/*console.log(store.getState())
store.dispatch({ type: 'account/deposit', payload: 1000 })
console.log(store.getState())
store.dispatch({ type: 'account/withdraw', payload: 200 })
console.log(store.getState())
store.dispatch({
  type: 'account/requestLoan',
  payload: { amount: 1000, purpose: 'Buy a Iphone 15' },
})
console.log(store.getState())
store.dispatch({ type: 'account/payLoan' })
console.log(store.getState())
store.dispatch({
  type: 'customer/createCustomer',
  payload: {
    fullName: 'Miguel JS',
    nationalID: '182150908',
    createdAt: new Date().toISOString(),
  },
})
console.log(store.getState())*/

// ACTIONS CREATORS: GOOD PRACTICE
function deposit(amount) {
  return { type: "account/deposit", payload: amount }
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}

function payLoan() {
  return { type: "account/payLoan" };
}

store.dispatch(deposit(500));
store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(1000, "Buy a TV"));
console.log(store.getState());
store.dispatch(payLoan())
console.log(store.getState())

function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() }
  }
}

store.dispatch(createCustomer("Miguel VueJS", "182150908"));
store.dispatch(deposit(250))
console.log(store.getState());





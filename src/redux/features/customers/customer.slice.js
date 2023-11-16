import { createSlice } from '@reduxjs/toolkit'

// EXAMPLE WITH REDUX-TOOLKIT
const initialState = {
  fullName: '',
  nationalID: '',
  createdAt: '',
}

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName
        state.nationalID = action.payload.nationalID
        state.createdAt = action.payload.createdAt
      },
    },
  },
});

console.log(customerSlice)

export const { createCustomer } = customerSlice.actions

export default customerSlice.reducer

// EXAMPLE WITH REDUX-CORE
/*const initialStateCustomer = {
  fullName: '',
  nationalID: '',
  createdAt: '',
}

export default function customerReducer(state = initialStateCustomer, action) {
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

// ACTIONS CREATORS: GOOD PRACTICE
export function createCustomer(fullName, nationalID) {
    return {
      type: "customer/createCustomer",
      payload: { fullName, nationalID, createdAt: new Date().toISOString() }
    }
}*/

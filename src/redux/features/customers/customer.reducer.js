const initialStateCustomer = {
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
}
  

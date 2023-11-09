import { useSelector } from 'react-redux'

// VERSION CON REDUX-CORE CON HOOKS
const Customer = () => {
  const customer = useSelector((state) => state.customer.fullName)

  return <h2>👋 Welcome, {customer}</h2>
}

export default Customer

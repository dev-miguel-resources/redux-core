import { useSelector } from 'react-redux'
import CreateCustomer from './atoms/CreateCustomer'
import Customer from './atoms/Customer'
import AccountOperations from './atoms/AccountOperations'
import BalanceDisplay from './atoms/BalanceDisplay'

function App() {
  const fullName = useSelector((state) => state.customer.fullName)

  return (
    <>
      <h1>🏦 The React-Redux Bank Example ⚛️</h1>
      {fullName === '' ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </>
  )
}

export default App

import CreateCustomer from './atoms/CreateCustomer'
import Customer from './atoms/Customer'
import AccountOperations from './atoms/AccountOperations'
import BalanceDisplay from './atoms/BalanceDisplay'

function App() {
  return (
    <>
      <h1>The React-Redux Bank Example</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </>
  )
}

export default App

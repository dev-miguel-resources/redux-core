import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  deposit,
  withdraw,
  requestLoan,
  payLoan,
} from '../redux/features/accounts/account.reducer'

const AccountOperations = () => {
  const [depositAmount, setDepositAmount] = useState('')
  const [withdrawalAmount, setWithdrawalAmount] = useState('')
  const [loanAmount, setLoanAmount] = useState('')
  const [loanPurpose, setLoanPurpose] = useState('')
  const [currency, setCurrency] = useState('USD')

  const dispatch = useDispatch()
  const {
    loan: currentLoan,
    loanPurpose: currentLoanPurpose,
    isLoading,
  } = useSelector((store) => store.account)

  // functions
  function handleDeposit() {
    if (!depositAmount) return

    dispatch(deposit(depositAmount, currency))
    setDepositAmount('')
    setCurrency('USD')
  }

  function handleWithdrawal() {
    if (!withdrawalAmount) return
    dispatch(withdraw(withdrawalAmount))
    setWithdrawalAmount('')
  }

  function handleRequestLoan() {
    if (!loanAmount || !loanPurpose) return
    dispatch(requestLoan(loanAmount, loanPurpose))
    setLoanAmount('')
    setLoanPurpose('')
  }

  function handlePayLoan() {
    dispatch(payLoan())
  }

  return (
    <>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit} disabled={isLoading}>
            {isLoading ? 'Converting...' : `Deposit ${depositAmount}`}
          </button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label>Request Loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan Amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request Loan</button>
        </div>

        <div>
          <span>
            Pay back $ {currentLoan} ({currentLoanPurpose})
          </span>
          <button onClick={handlePayLoan}>Pay loan</button>
        </div>
      </div>
    </>
  )
}

export default AccountOperations

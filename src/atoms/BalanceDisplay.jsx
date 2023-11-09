import PropTypes from 'prop-types';
import { connect } from 'react-redux'

function formatCurrency(value) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(value)
}

// VERSION CON REACT-REDUX DE MANERA NATIVA SIN HOOKS
// const BalanceDisplay = ({ balance, createCustomer }) => ( con mapDispatchToProps
const BalanceDisplay = ({ balance }) => (
  <div className="balance">{formatCurrency(balance)}</div>
)

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  }
}

/*function mapDispatchToProps(dispatch) {
  return {
    createCustomer: (fullName, nationalId) => dispatch({ type: 'customer/createCustomer' }),
  }
}*/

// connect HOC
//export default connect(mapStateToProps, mapDispatchToProps)(BalanceDisplay);
export default connect(mapStateToProps)(BalanceDisplay);

BalanceDisplay.propTypes = {
  balance: PropTypes.number,
  createCustomer: PropTypes.func
};

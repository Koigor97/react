const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      //LATER
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

// creating deposit action creators
export function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
// creating deposit action creators
export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
// creating deposit action creators
export function requestLoan(amount) {
  return {
    type: "account/requestLoan",
    payload: { amount: amount, purpose: "To buy a car" },
  };
}

export function payLoan() {
  return { type: "account/payLoan" };
}

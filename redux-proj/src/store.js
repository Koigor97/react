import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  ntlID: "",
  createdAt: "",
};

function reducer(state = initialState, action) {
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

const store = createStore(reducer);

// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "To buy a car" },
// });

// creating deposit action creators
function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
// creating deposit action creators
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
// creating deposit action creators
function requestLoan(amount) {
  return {
    type: "account/requestLoan",
    payload: { amount: amount, purpose: "To buy a car" },
  };
}
// creating deposit action creators
// function payLoan() {}
store.dispatch(deposit(500));
console.log(store.getState());
store.dispatch(withdraw(100));
console.log(store.getState());
store.dispatch(requestLoan(1500));
console.log(store.getState());

// action creator for customer
function createCustomer(fullName, ntlID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, ntlID, createdAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return { type: "account/updatName", payload: fullName };
}

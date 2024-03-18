import { createStore, combineReducers } from "redux";

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

function accountReducer(state = initialState, action) {
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

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        ntlID: action.payload.ntlID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

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
store.dispatch(withdraw(100));
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

store.dispatch(createCustomer("Samuel Turay", "266#badd7i"));
store.dispatch(updateName("Sarah Alpha"));

console.log(store.getState());

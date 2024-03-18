import { createStore, combineReducers } from "redux";
import accountReducer, {
  deposit,
  withdraw,
  requestLoan,
  payLoan,
} from "./features/accounts/accountSlice";
import customerReducer, {
  createCustomer,
  updateName,
} from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

export default store;

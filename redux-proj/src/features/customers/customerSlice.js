const initialStateCustomer = {
  fullName: "",
  ntlID: "",
  createdAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
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

// action creator for customer
export function createCustomer(fullName, ntlID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, ntlID, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return { type: "account/updatName", payload: fullName };
}

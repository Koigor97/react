import { useState } from "react";
import { Button } from "./Button";

export function FormSplitBill({ theSelectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [userPayment, setUserPayment] = useState("");
  const paidByFriend = bill ? bill - userPayment : "";
  const [whoIsPaying, setWhoIsPaying] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !userPayment) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -userPayment);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {theSelectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />

      <label>👤 Your expense</label>
      <input
        type="text"
        value={userPayment}
        onChange={(e) =>
          setUserPayment(+e.target.value > bill ? userPayment : +e.target.value)
        }
      />

      <label>👥 {theSelectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>💸 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{theSelectedFriend.name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

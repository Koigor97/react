import { useState } from "react";

function PrioritySelect({ selectPriority }) {
  const [priority, setPriority] = useState("");

  function handleSelectedPriority(e) {
    setPriority(e.target.value);
    selectPriority(e.target.value);
  }

  return (
    <select onChange={handleSelectedPriority}>
      <option value="0">Select Priority</option>
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </select>
  );
}

export default PrioritySelect;

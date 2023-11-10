import { useState } from "react";
import { Button } from "./Button";

export function FormAddFriend({ friendsList, addToFriendsList }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleAddFriendToFriendsList(e) {
    e.preventDefault();
    const newFriend = {
      id: crypto.randomUUID(),
      name,
      image: `https://i.pravatar.cc/48?u=${image}`,
      balance: 0,
    };
    addToFriendsList([...friendsList, newFriend]);

    setName("");
    setImage("");
  }

  return (
    <form className="form-add-friend">
      <label>👫 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌁 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      {name && <Button onClick={handleAddFriendToFriendsList}>Add</Button>}
    </form>
  );
}

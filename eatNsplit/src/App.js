import { useState } from "react";

export default function App() {
  const [showFriendForm, setShowFriendForm] = useState(false);

  const [selectedFriend, setSelectedFriend] = useState(null);

  const [initialFriends, setInitialFriends] = useState([
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ]);

  function handleShowFriendForm() {
    setShowFriendForm((show) => !show);
  }

  function handleFriendSelection(friend) {
    setSelectedFriend((curSelection) =>
      curSelection?.id === friend.id ? null : friend
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friendsList={initialFriends}
          onSelectFriend={handleFriendSelection}
          selectedFriend={selectedFriend}
        />

        {showFriendForm && (
          <FormAddFriend
            friendsList={initialFriends}
            addToFriendsList={setInitialFriends}
          />
        )}

        <Button onClick={handleShowFriendForm}>
          {showFriendForm ? "Close" : "Add friend"}
        </Button>
      </div>

      {selectedFriend && <FormSplitBill theSelectedFriend={selectedFriend} />}
    </div>
  );
}

function FriendsList({ friendsList, onSelectFriend, selectedFriend }) {
  const friends = friendsList;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelectFriend={onSelectFriend}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelectFriend, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          Your {friend.name} ows you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button onClick={() => onSelectFriend(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FormAddFriend({ friendsList, addToFriendsList }) {
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

      <labe>🌁 Image URL</labe>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      {name && <Button onClick={handleAddFriendToFriendsList}>Add</Button>}
    </form>
  );
}

function FormSplitBill({ theSelectedFriend }) {
  const [bill, setBill] = useState("");
  const [userPayment, setUserPayment] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("");

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {theSelectedFriend.name}</h2>

      <labe>💰 Bill value</labe>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      <labe>👤 Your expense</labe>
      <input
        type="text"
        value={userPayment}
        onChange={(e) => setUserPayment(e.target.value)}
      />

      <labe>👥 {theSelectedFriend.name}'s expense</labe>
      <input type="text" disabled />

      <labe>💸 Who is paying the bill</labe>
      <select>
        <option value={"user"}>You</option>
        <option value={"friend"}>X</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

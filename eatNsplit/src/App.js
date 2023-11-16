import { useState } from "react";
import { FriendsList } from "./FriendsList";
import { Button } from "./Button";
import { FormAddFriend } from "./FormAddFriend";
import { FormSplitBill } from "./FormSplitBill";

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

  function handleSplitBill(value) {
    // console.log(value);
    setInitialFriends((initialFriends) =>
      initialFriends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
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

      {selectedFriend && (
        <FormSplitBill
          theSelectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

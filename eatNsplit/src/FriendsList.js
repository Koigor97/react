import { Friend } from "./Friend";

export function FriendsList({ friendsList, onSelectFriend, selectedFriend }) {
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

import { useState } from "react";
import Friend from "./Friend";
import AddFriend from "./AddFriend";
export default function ListOfFriends({
  friends,
  setActiveFriend,
  activeFriend,
  setListFriends,
}) {
  const [toggleFriend, setToggleFriend] = useState(false);
  return (
    <>
      {friends.map((friend) => (
        <Friend
          key={friend.name}
          setActiveFriend={setActiveFriend}
          activeFriend={activeFriend}
          friend={friend}
        />
      ))}
      <div className="add-friend-wrapper">
        {toggleFriend ? (
          <AddFriend
            friends={friends}
            setListFriends={setListFriends}
            setToggleFriend={setToggleFriend}
          />
        ) : (
          <button
            className="add-friend"
            onClick={() => setToggleFriend((toggled) => !toggled)}
          >
            Add Friend
          </button>
        )}
      </div>
    </>
  );
}

import "./App.css";
import ListOfFriends from "./ListFriends";
import Bill from "./Bill";
import { useState } from "react";
function App() {
  const friends = [
    {
      name: "Clark",
      message: "You and Clark are even",
      url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      active: false,
    },
    {
      name: "Sarah",
      message: "You and Sarah are even",
      url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      active: false,
    },
    // {
    //   name: "Anthony",
    //   message: "You and Anthony are even",
    //   url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    //   active: false,
    // },
  ];
  const [listFriends, setListFriends] = useState(friends);
  const [activeFriend, setActiveFriend] = useState(null);
  return (
    <div className="main">
      <div className="friend-wrapper">
        <ListOfFriends
          friends={listFriends}
          setActiveFriend={setActiveFriend}
          setListFriends={setListFriends}
          activeFriend={activeFriend}
        />
      </div>
      <div className="bill-wrapper">
        <Bill
          activeFriend={activeFriend}
          friends={listFriends}
          setListFriends={setListFriends}
          setActiveFriend={setActiveFriend}
        />
      </div>
    </div>
  );
}

export default App;

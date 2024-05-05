import { useState } from "react";

export default function AddFriend({ setListFriends, setToggleFriend }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  function addNewFriend(e) {
    e.preventDefault();
    const newFriend = {
      name,
      url,
      active: false,
      message: `You and ${name} are even`,
    };
    setToggleFriend((toggle) => !toggle);
    setListFriends((list) => [...list, newFriend]);
  }

  function cancelNewFriend() {
    setToggleFriend((toggle) => !toggle);
  }

  return (
    <form className="new-friend" onSubmit={addNewFriend}>
      <div className="name-wrapper">
        <label>Name</label>
        <input
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="url-wrapper">
        <label>url</label>
        <input
          type="text"
          value={url}
          required
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <input type="submit" className="confirm" value={"confirm"} />
      <button className="cancel" onClick={cancelNewFriend}>
        {" "}
        cancel
      </button>
    </form>
  );
}

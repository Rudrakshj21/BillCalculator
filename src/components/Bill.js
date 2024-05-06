import { useState } from "react";

export default function Bill({
  activeFriend,
  friends,
  setListFriends,
  setActiveFriend,
}) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const friendExpense = bill - myExpense;
  const [whoPays, setWhoPays] = useState("You");
  // console.log(whoPays);
  function splitBill() {
    // here set owe or debt

    // bill - state
    // your expense - bill - friendExpense
    // who pays
    // change friend  using active friend
    const updatedFriendList = friends.filter(
      (friend) => friend.name !== activeFriend.name
    );

    if (whoPays === "You") {
      activeFriend.message = `${activeFriend.name} is  $${friendExpense} in your debt `;
    } else if (whoPays === "Friend") {
      activeFriend.message = `You owe them $${myExpense}`;
    }
    // console.log(activeFriend);
    activeFriend.active = false;
    updatedFriendList.push(activeFriend);
    // console.log(updatedFriendList);
    setListFriends(updatedFriendList);
    setActiveFriend(null);
    setMyExpense("");
    setBill("");
  }
  if (!activeFriend)
    return (
      <div className="default-tag-wrapper">
        <h3 className="default-tag">Split Bill With? </h3>
      </div>
    );
  return (
    <>
      <h1>Split A bill with {activeFriend.name}</h1>
      <div className="bill">
        <div>💰 Bill value</div>
        <input
          type="number"
          value={bill}
          placeholder="Bill Value"
          onChange={(e) => {
            if (+e.target.value < 0) {
              return alert("bill should be greater than 0");
            }
            setBill(+e.target.value);
          }}
          required
        />
      </div>
      <div>
        <div>🧔‍♂️ Your Expense</div>
        <input
          type="number"
          value={myExpense}
          required
          onChange={(e) => {
            setMyExpense(Number(e.target.value));
            console.log(bill, myExpense);
            // setFriendExpense(bill - myExpense);
          }}
        />
      </div>
      <div>
        <div>🧑‍🤝‍🧑 Friend Expense</div>
        <span>{bill - myExpense === 0 ? "" : bill - myExpense}</span>
      </div>
      <div>
        <div>🤑 Who is paying the bill ?</div>
        <select value={whoPays} onChange={(e) => setWhoPays(e.target.value)}>
          <option>You</option>
          <option>Friend</option>
        </select>
      </div>
      <button className="split-bill" onClick={splitBill}>
        Split bill
      </button>
    </>
  );
}

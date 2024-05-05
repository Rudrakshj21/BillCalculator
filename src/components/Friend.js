export default function Friend({ friend, setActiveFriend, activeFriend }) {
  return (
    <div
      className={`friend ${friend.name === activeFriend?.name ? "active" : ""}`}
    >
      <div>
        <img src={friend.url} alt={friend.name} />
      </div>
      <div className="friend-details">
        <div>{friend.name}</div>
        <div
          className={
            friend.message.indexOf("owe") !== -1
              ? "owe"
              : friend.message.indexOf("debt") !== -1
              ? "debt"
              : ""
          }
        >
          {friend.message}
        </div>
      </div>
      {activeFriend?.name === friend.name ? (
        <button onClick={() => setActiveFriend(null)}>close</button>
      ) : (
        <button onClick={() => setActiveFriend(friend)}>select</button>
      )}
    </div>
  );
}

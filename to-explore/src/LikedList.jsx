export function LikedList({ likedUserList }) {
  return (
    <div className="absolute">
      <ul>
        {likedUserList.map((user, i) => (
          <li key={i}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

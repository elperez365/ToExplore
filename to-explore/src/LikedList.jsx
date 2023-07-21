export function LikedList({ likedUserList }) {
  return (
    <div className=" bg-green-200 absolute flex flex-col justify-center items-center rounded-lg bottom-16 z-30 w-28 h-max-40 overflow-y-scroll">
      <ul>
        {likedUserList.map((user, i) => (
          <li key={i}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

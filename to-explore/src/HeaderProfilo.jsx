import { Avatar } from "@mui/material";
function HeaderProfilo({
  counterLuoghi = "luoghi: 20",
  avatar,
  avatarColor,
  username,
}) {
  return (
    <div className="flex justify-around items-center h-36 w-full bg-contrast">
      <div className="flex items-center gap-2">
        <Avatar sx={{ bgcolor: `${avatarColor}`, width: 60, height: 60 }}>
          {avatar}
        </Avatar>
      </div>
      <div>
        <h1 className="text-xl">{username}</h1>
        <p className="text-xl">{counterLuoghi}</p>
      </div>
    </div>
  );
}

export default HeaderProfilo;

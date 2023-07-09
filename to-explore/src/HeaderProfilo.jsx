import { Avatar } from "@mui/material";
import regionImgs from "./RegionImage";
function HeaderProfilo({
  counterLuoghi = "luoghi: 20",
  avatar,
  avatarColor,
  username,
  regionSelected,
}) {
  return (
    <div className="flex justify-around items-center h-28 w-full bg-contrast">
      <div className="flex items-center gap-2">
        {regionSelected ? (
          <img className=" h-28" src={regionImgs[regionSelected]} alt="" />
        ) : (
          <Avatar sx={{ bgcolor: `${avatarColor}`, width: 60, height: 60 }}>
            {avatar}
          </Avatar>
        )}
      </div>
      <div>
        <h1 className="text-xl">{username}</h1>
        <p className="text-xl">{counterLuoghi}</p>
      </div>
    </div>
  );
}

export default HeaderProfilo;

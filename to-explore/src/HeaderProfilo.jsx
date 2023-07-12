import { Avatar } from "@mui/material";
import regionImgs from "./RegionImage";
import { useParams } from "react-router-dom";
function HeaderProfilo({
  counterLuoghi = "luoghi:",
  avatar,
  avatarColor,
  username,
}) {
  let regionSelected = useParams();
  return (
    <div className="flex justify-around items-center h-28 w-full bg-contrast">
      <div className="flex items-center gap-2">
        {regionSelected.region ? (
          <img
            className=" h-28"
            src={regionImgs[regionSelected.region]}
            alt=""
          />
        ) : (
          <Avatar sx={{ bgcolor: `${avatarColor}`, width: 60, height: 60 }}>
            {avatar}
          </Avatar>
        )}
      </div>
      <div>
        <h1 className="text-xl">
          {regionSelected.region ? regionSelected.region : username}
        </h1>
        <p className="text-xl">{counterLuoghi}</p>
      </div>
    </div>
  );
}

export default HeaderProfilo;

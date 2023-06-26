import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";
import Button from "@mui/material/Button";

export function Card({
  postLocation = "location",
  postDate = "11 Feb",
  postImg = "https://www.celebritycruises.com/content/dam/celebrity/new-images/port-pages/sicily-palermo-italy/catania-sicily-italy-3-3840x2160.jpg",
  postAvatar,
}) {
  return (
    <div>
      <header className="flex justify-between bg-complement w-screen h-6 mt-1">
        <h1 className="mx-1">{postLocation}</h1>
        <h1 className="mx-1">{postDate}</h1>
      </header>
      <section
        className="w-screen h-80 bg-primary flex items-center bg-center bg-cover"
        style={{
          backgroundImage: `url(${postImg})`,
        }}
      ></section>
      <footer className="flex justify-between w-screen h-14 bg-contrast mb-1">
        <button className="mx-1 w-8">
          <FcLike className="h-full w-full" />
        </button>

        <button className="mx-1 w-8">
          <FaComment className="h-full w-full" />
        </button>

        <div className="imageContainer bg-primary w-10 h-10 rounded-full mx-1 my-auto">
          {postAvatar}
        </div>
      </footer>
    </div>
  );
}

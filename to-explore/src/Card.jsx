import { FcLike } from "react-icons/fc";
import { FaComment } from "react-icons/fa";

export function Card({
  postLocation = "location",
  postDate = "11 Feb",
  postImg = "https://th.bing.com/th/id/OIP.vupylNDkkgtcj4-zykCWhAHaDt?pid=ImgDet&rs=1",
  postAvatar,
}) {
  return (
    <div>
      <header className="flex justify-between bg-complement w-screen h-6 mt-1">
        <h1 className="mx-1">{postLocation}</h1>
        <h1 className="mx-1">{postDate}</h1>
      </header>
      <section
        className="w-screen h-80 bg-primary flex items-center bg-right bg-cover"
        style={{
          backgroundImage: `url(${postImg})`,
        }}
      >
        {/* <img src={postImg} alt="" className="w=full "></img> */}
      </section>
      <footer className="flex justify-between w-screen h-14 bg-center mb-1 bg-contrast">
        <button className="mx-1 w-8">
          <FcLike className="h-full w-full" />
        </button>

        <button className="mx-1 w-8">
          <FaComment className="h-full w-full" />
        </button>

        <div className="imageContainer bg-complement w-10 h-10 rounded-full mx-1 my-auto">
          {postAvatar}
        </div>
      </footer>
    </div>
  );
}

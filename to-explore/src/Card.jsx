import { FcLike } from "react-icons/fc";
import { MdLocationPin } from "react-icons/md";
import { FaComment } from "react-icons/fa";
import { useCollapse } from "react-collapsed";

export function Card({
  postLocation = "location",
  postDate = "11 Feb",
  postImg = "https://th.bing.com/th/id/OIP.vupylNDkkgtcj4-zykCWhAHaDt?pid=ImgDet&rs=1",
  postAvatar,
  postDescription,
}) {
  function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
      <div className="collapsible">
        <div className="header bg-contrast" {...getToggleProps()}>
          {isExpanded ? "Hide Description" : "Expand Description"}
        </div>
        <div {...getCollapseProps()}>
          <div className="content flex flex-wrap bg-contrast2">
            {postDescription}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <header className="flex justify-between bg-secondary w-screen h-6">
        <h1 className="mx-1 flex">
          <MdLocationPin />
          {postLocation}
        </h1>
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
      <footer className="flex justify-between w-screen h-14 bg-center bg-primary">
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
      <div className="descriptionArea w-screen ">
        <Collapsible />
      </div>
    </div>
  );
}

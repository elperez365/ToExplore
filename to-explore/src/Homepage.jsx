// import { CardBase } from "./CardBase";
import { Navbar } from "./Navbar";

import Card2 from "./Card2";

import { Header } from "./Header";
import { useEffect, useState } from "react";

export function Homepage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((json) => setPosts(json));
  }, []);
  // useEffect(() => {
  //   console.log(posts);
  // }, [posts]);
  return (
    <div className="bg-contrast2 bg-blur bg-opacity-80 ">
      <Navbar />
      <Header />
      <div className="lg:flex lg:flex-wrap lg:gap-4 lg:p-2 md:flex md:flex-wrap md:gap-4 justify-center bg-contrast2 h-full px-2 py-1 pt-12 lg:pt-20">
        {posts.map((el) => (
          <Card2
            postDescription={el.description}
            postLocation={el.location}
            postImg={el.img}
            postDate={el.postData}
            postAvatar={el.postAvatar}
            avatarColor={el.avatarColor}
            postId={el.id}
          />
        ))}

        {/* <Card2
          postDescription="Questo posto è bellissimo!"
          postImg="https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/2021-01/Kirkjufell-volcano.jpg"
        /> */}
      </div>
    </div>
  );
}

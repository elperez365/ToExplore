// import { CardBase } from "./CardBase";
import { Navbar } from "./Navbar";

import Card2 from "./Card2";

import { Header } from "./Header";
import { useEffect, useState } from "react";
import { Loading } from "./Loading";

export function Homepage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then((res) => res.json())
      .then((json) => setPosts(json));
  }, []);
  // useEffect(() => {
  //   console.log(posts);
  // }, [posts]);
  return (
    <div className="bg-contrast bg-blur bg-opacity-40 ">
      {loading && <Loading />}
      <Navbar />
      <Header />
      <div className="lg:flex lg:flex-wrap lg:gap-4 lg:p-2 md:flex md:flex-wrap md:gap-4 justify-center bg-secondary h-full px-2 py-14 lg:py-20 lg:pt-20">
        {posts.map((el, i) => (
          <Card2
            key={i}
            postDescription={el.description}
            postLocation={el.location}
            postImg={el.img}
            postDate={el.postData}
            postAvatar={el.postAvatar}
            avatarColor={el.avatarColor}
            postId={el.id}
          />
        ))}
      </div>
    </div>
  );
}

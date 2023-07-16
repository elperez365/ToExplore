import { useCallback, useEffect, useState } from "react";
import BodyProfilo from "./BodyProfilo";
import HeaderProfilo from "./HeaderProfilo";
import { useParams } from "react-router-dom";
import BodyProfiloDesk from "./BodyProfiloDesk";

export function SomeoneProfile() {
  const [counterPost, setCounterPost] = useState();
  const [avatar, setAvatar] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let ricevicounterpost = (number) => {
    setCounterPost(number);
  };
  const { user } = useParams();
  useEffect(() => {
    fetch("http://localhost:3001/login/avatar", {
      method: "POST",
      body: JSON.stringify({ username: user }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((json) => setAvatar(json));
  }, []);
  const handleWindowResize = useCallback((event) => {
    setWindowWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);
  return (
    <div>
      <HeaderProfilo
        counterLuoghi={counterPost}
        avatar={avatar.avatar}
        avatarColor={avatar.color}
        username={user}
      />
      {windowWidth >= 1024 ? (
        <BodyProfiloDesk username={user} passastate={ricevicounterpost} />
      ) : (
        <BodyProfilo username={user} passastate={ricevicounterpost} />
      )}
    </div>
  );
}

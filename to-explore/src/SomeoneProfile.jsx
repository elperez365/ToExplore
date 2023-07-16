import { useEffect, useState } from "react";
import BodyProfilo from "./BodyProfilo";
import HeaderProfilo from "./HeaderProfilo";
import { useParams } from "react-router-dom";

export function SomeoneProfile() {
  const [counterPost, setCounterPost] = useState();
  const [avatar, setAvatar] = useState({});
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
      .then(console.log);
  }, []);
  return (
    <div>
      <HeaderProfilo
        counterLuoghi={counterPost}
        avatar={avatar.avatar}
        avatarColor={avatar.color}
        username={user}
      />
      <BodyProfilo username={user} passastate={ricevicounterpost} />
    </div>
  );
}

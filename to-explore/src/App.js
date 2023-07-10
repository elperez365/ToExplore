import { Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Homepage } from "./Homepage.jsx";
import AddContentPage from "./AddContentPage.jsx";
import RegionSelect from "./RegionSelect.jsx";
import { Profilo } from "./Profilo.jsx";
import { ErrorPage } from "./ErrorPage.jsx";
import { Settings } from "./Settings";
import { ChangeAvatarColor } from "./ChangeAvatarColor";
import { Team } from "./Team";
import userLoggedContest from "./UserLoggedContest";
import { useEffect, useState } from "react";
import HeaderProfilo from "./HeaderProfilo";
import BodyProfilo from "./BodyProfilo";

export default function App() {
  const [userLogged, setUserlogged] = useState({
    logged: false,
    userID: "2",
    username: "pippo",
    mail: "pippo.pappa@gmail.com",
    avatar: "PI",
    avatarColor: "red",
  });

  useEffect(() => {
    console.log(userLogged);
  }, [userLogged]);

  return (
    <userLoggedContest.Provider value={userLogged}>
      <Routes>
        <Route path="" element={<Login setUserlogged={setUserlogged} />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/add-content" element={<AddContentPage />} />
        <Route path="/map" element={<RegionSelect />} />
        <Route
          path="/profilo"
          element={
            <Profilo counterLuoghi={`luoghi visitati:`}>
              <HeaderProfilo
                avatar={userLogged.avatar}
                avatarColor={userLogged.avatarColor}
                username={userLogged.username}
              />
              <BodyProfilo />
            </Profilo>
          }
        />
        <Route
          path="/postRegion/:region"
          element={
            <Profilo counterLuoghi={`numero post`}>
              <HeaderProfilo />
              <BodyProfilo />
            </Profilo>
          }
        />
        <Route path="/settings" element={<Settings />} />
        <Route path="/changeAvatarColor" element={<ChangeAvatarColor />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </userLoggedContest.Provider>
  );
}

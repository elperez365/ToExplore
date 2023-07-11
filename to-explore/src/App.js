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
import { ProtectedRoute } from "./ProtectedRoute";

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
        <Route
          path={"/homepage"}
          element={<ProtectedRoute component={<Homepage />} />}
        />
        <Route
          path="/add-content"
          element={<ProtectedRoute component={<AddContentPage />} />}
        />
        <Route
          path="/map"
          element={<ProtectedRoute component={<RegionSelect />} />}
        />
        <Route
          path="/profilo"
          element={
            <ProtectedRoute
              component={
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
          }
        />
        <Route
          path="/postRegion/:region"
          element={
            <ProtectedRoute
              component={
                <Profilo counterLuoghi={`numero post`}>
                  <HeaderProfilo />
                  <BodyProfilo />
                </Profilo>
              }
            />
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute
              component={<ProtectedRoute component={<Settings />} />}
            />
          }
        />
        <Route
          path="/changeAvatarColor"
          element={<ProtectedRoute component={<ChangeAvatarColor />} />}
        />
        <Route path="/team" element={<ProtectedRoute component={<Team />} />} />
      </Routes>
    </userLoggedContest.Provider>
  );
}

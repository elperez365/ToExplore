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
import { useCallback, useEffect, useState } from "react";
import HeaderProfilo from "./HeaderProfilo";
import BodyProfilo from "./BodyProfilo";
import BodyProfiloDesk from "./BodyProfiloDesk";
import { ProtectedRoute } from "./ProtectedRoute";
import LanguageContext from "./LanguageContext";
import { RedirectHomePage } from "./RedirectHomePage";
import { SomeoneProfile } from "./SomeoneProfile";

export default function App() {
  const [userLogged, setUserlogged] = useState({
    logged: false,
    userID: "2",
    username: "pippo",
    mail: "pippo.pappa@gmail.com",
    avatar: "PI",
    avatarColor: "red",
  });
  const [languageApp, SetLanguageApp] = useState("it");
  const [counterpost, setCounterPost] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let ricevicounterpost = (number) => {
    setCounterPost(number);
  };

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
    <LanguageContext.Provider value={{ languageApp, SetLanguageApp }}>
      <userLoggedContest.Provider value={userLogged}>
        <Routes>
          <Route path="" element={<Login setUserlogged={setUserlogged} />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/redirect" element={<RedirectHomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user/:user" element={<SomeoneProfile />} />
          <Route
            path={"/home"}
            element={<ProtectedRoute component={<Homepage />} />}
          />
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
                      counterLuoghi={counterpost}
                      avatar={userLogged.avatar}
                      avatarColor={userLogged.avatarColor}
                      username={userLogged.username}
                    />
                    {windowWidth >= 1024 ? (
                      <BodyProfiloDesk passastate={ricevicounterpost} />
                    ) : (
                      <BodyProfilo passastate={ricevicounterpost} />
                    )}
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
                    <HeaderProfilo counterLuoghi={counterpost} />
                    {windowWidth >= 1024 ? (
                      <BodyProfiloDesk passastate={ricevicounterpost} />
                    ) : (
                      <BodyProfilo passastate={ricevicounterpost} />
                    )}
                  </Profilo>
                }
              />
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute
                component={
                  <ProtectedRoute
                    component={<Settings setUserlogged={setUserlogged} />}
                  />
                }
              />
            }
          />
          <Route
            path="/changeAvatarColor"
            element={
              <ProtectedRoute
                component={<ChangeAvatarColor setUserlogged={setUserlogged} />}
              />
            }
          />
          <Route
            path="/team"
            element={<ProtectedRoute component={<Team />} />}
          />
        </Routes>
      </userLoggedContest.Provider>
    </LanguageContext.Provider>
  );
}

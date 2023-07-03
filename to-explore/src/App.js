import { Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Homepage } from "./Homepage.jsx";
import AddContentPage from "./AddContentPage.jsx";
import RegionSelect from "./RegionSelect.jsx";
import { Profilo } from "./Profilo.jsx";
import { Settings } from "./Settings";
import { ChangeAvatarColor } from "./ChangeAvatarColor";
import { Team } from "./Team";
import CommentPage from "./CommentPage";

export default function App() {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/add-content" element={<AddContentPage />} />
      <Route path="/map" element={<RegionSelect />} />
      <Route path="/profilo" element={<Profilo />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/changeAvatarColor" element={<ChangeAvatarColor />} />
      <Route path="/team" element={<Team />} />
      <Route path="/comment-page" element={<CommentPage />} />
    </Routes>
  );
}

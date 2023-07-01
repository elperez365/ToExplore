import { Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Homepage } from "./Homepage.jsx";
import AddContentPage from "./AddContentPage.jsx";
import RegionSelect from "./RegionSelect.jsx";
import { Profilo } from "./Profilo.jsx";
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
      <Route path="/comment-page" element={<CommentPage />} />
    </Routes>
  );
}

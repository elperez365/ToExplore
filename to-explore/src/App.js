import { Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login";
import { Register } from "./Components/Register";
import { Homepage } from "./Homepage.jsx";
import AddContentPage from "./AddContentPage.jsx";
import RegionSelect from "./RegionSelect.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/add-content" element={<AddContentPage />} />
      <Route path="/map" element={<RegionSelect />} />
    </Routes>
  );
}

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import userLoggedContest from "./UserLoggedContest";
import { Homepage } from "./Homepage";

function SilentLogin({ component }) {
  const { logged } = useContext(userLoggedContest);
  const navigate = useNavigate;
  if (logged) {
    return <Homepage />;
  } else return component;
}

export default SilentLogin;

import { useContext } from "react";

import userLoggedContest from "./UserLoggedContest";
import { Homepage } from "./Homepage";

function SilentLogin({ component }) {
  const { logged } = useContext(userLoggedContest);

  if (logged) {
    return <Homepage />;
  } else return component;
}

export default SilentLogin;

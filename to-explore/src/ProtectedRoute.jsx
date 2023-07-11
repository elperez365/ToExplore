import { useContext } from "react";
import userLoggedContest from "./UserLoggedContest";

import { ErrorPage } from "./ErrorPage";

export function ProtectedRoute({ component }) {
  const { logged } = useContext(userLoggedContest);
  if (logged) {
    return component;
  } else return <ErrorPage />;
}

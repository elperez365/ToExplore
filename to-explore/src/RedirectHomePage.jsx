import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function RedirectHomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/homepage");
  }, []);
  return;
}

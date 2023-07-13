import { Link } from "react-router-dom";
import unlogged from "./images/R.png";

export function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-20 p-10 bg-primary bg-opacity-50 h-screen w-screen">
      {/* <h1 className="text-2xl text-center">
        LA SESSIONE DI LOGIN E' TERMINATA
      </h1> */}
      <img src={unlogged} alt="" />
      <h1 className="text-2xl text-center">YOUR LOGIN HAS EXPIRED</h1>
      <Link to="/">
        <button className="text-2xl w-36 h-16 rounded-full bg-contrast">
          --LOGIN--
        </button>
      </Link>
    </div>
  );
}

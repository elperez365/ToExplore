import { Link } from "react-router-dom";
import ErrorImage from "./images/sign-red-error-icon-1.png";
import { Homepage } from "./Homepage";

export function ErrorPage() {
  return (
    <div className="bg-red-500 h-screen w-screen">
      {/* <img src={ErrorImage} alt="Error"></img>
      <div className="flex flex-col items-center">
        {" "}
        <h1>Something went wrong</h1>
    
      </div> */}

      <Link to="/homepage">
        <button className="border-2 border-transparent">Go to homepage</button>
      </Link>
    </div>
  );
}

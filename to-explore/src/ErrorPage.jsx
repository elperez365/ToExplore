import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <div className="flex flex-col items-center gap-20 p-10 bg-red-500 h-screen w-screen">
      <h1>LA SESSIONE DI LOGIN E' TERMINATA</h1>

      <Link to="/">
        <button className="w-36 h-16 rounded-full bg-contrast">
          Go to login
        </button>
      </Link>
    </div>
  );
}

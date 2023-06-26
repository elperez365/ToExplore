import { Card } from "./Card";

export function HomePage() {
  return (
    <div>
      <header className="flex justify-between w-screen h-12 bg-secondary px-1">
        <div className="headerLeft flex flex-col">
          <h1>Logo</h1>
          <h1>Username</h1>
        </div>

        <div className="headerRight">
          <div className="imageContainer bg-contrast2 w-12 h-12 rounded-full"></div>
        </div>
      </header>
      <Card />
    </div>
  );
}

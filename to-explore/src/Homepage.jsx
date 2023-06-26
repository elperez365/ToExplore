import { Card } from "./Card";

export function HomePage() {
  return (
    <div className="bg-secondary">
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
      <Card postImg="https://viaggianza.com/wp-content/uploads/2017/06/fiumefreddo.jpg" />
      <Card
        postImg="https://siviaggia.it/wp-content/uploads/sites/2/2019/08/sermoneta.jpg"
        postDate="32 Feb"
      />
    </div>
  );
}

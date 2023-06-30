// import { CardBase } from "./CardBase";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import Card2 from "./Card2";

export function Homepage() {
  return (
    <div className="bg-contrast2 bg-blur bg-opacity-80 ">
      <Navbar />
      <header className="flex glass-effect justify-between w-screen h-12 bg-primary bg-blur bg-opacity-70 px-1">
        <div className="headerLeft flex flex-col">
          <h1>Logo</h1>
          <h1>Username</h1>
        </div>

        <div className="headerRight">
          <div className="imageContainer bg-contrast2 w-12 h-12 rounded-full"></div>
        </div>
      </header>
      <div className="lg:flex lg:flex-wrap lg:gap-4 lg:p-2 justify-center bg-contrast2 h-full px-2 py-1">
        <Card2
          postDescription="Mi sto grattando le palle in vacanza #nonFareUnCazzo"
          postImg="https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/2021-01/Kirkjufell-volcano.jpg"
        />
        <Card2
          postDescription="Mi sto grattando le palle in vacanza #nonFareUnCazzo"
          postImg="https://free4kwallpapers.com/uploads/originals/2015/10/02/nice-place.jpg"
        />
        <Card2
          postDescription="Mi sto grattando le palle in vacanza #nonFareUnCazzo"
          postImg="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__text_with_image___twi_image/public/2020-06/Northern-Light-Aurora-borealis.jpg"
        />
        <Card2
          postDescription="Mi sto grattando le palle in vacanza #nonFareUnCazzo"
          postImg="https://qph.cf2.quoracdn.net/main-qimg-4fab6a4ff1f91ebcd9dc952311570060-lq"
        />
      </div>
    </div>
  );
}

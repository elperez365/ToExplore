import { Avatar } from "@mui/material";

import { blue, deepPurple, pink } from "@mui/material/colors";
import Animal from "react-animals";

export function Avatars() {
  return (
    <div className="flex flex-wrap">
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        imgProps="/src/img/OIP.jpg"
      />
      <Avatar sx={{ bgcolor: pink[500], width: 50, height: 50 }}>HG</Avatar>
      <Animal name="alligator" color="blue" />
      <Animal name="panda" size="100px" />
      <Animal name="armadillo" size="100px" square />
      <Animal name="pumpkin" size="100px" rounded />
      <Animal name="llama" size="100px" dance />
      <Animal name="buffalo" size="100px" square />
      <Animal name="bat" size="100px" dance />
      <Animal name="coyote" size="100px" />
      <Animal name="auroch" size="100px" dance />
      <Animal name="jackal" size="100px" color="blue" />
      <Animal name="duck" size="100px" color="red" rounded />
      <Animal name="kraken" size="100px" rounded />
      <Animal name="python" size="100px" />
      <Animal name="cormorant" size="100px" />
      <Animal name="penguin" size="1000px" />
      <Animal name="wolf" size="100px" />
      <Animal name="chupacabra" size="100px" />
      <Animal name="dinosaur" size="50px" color="red" dance />
    </div>
  );
}

import { Navbar } from "./Navbar";
import { useState } from "react";
import Card2 from "./Card2";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";

const post = [
  {
    src: "https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg",
  },
  {
    src: "https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg",
  },
  {
    src: "https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg",
  },
  {
    src: "https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg",
  },
  {
    src: "https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg",
  },
  {
    src: "https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg",
  },
  {
    src: "https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg",
  },
  {
    src: "https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg",
  },
  {
    src: "https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg",
  },
  {
    src: "https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg",
  },
  {
    src: "https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg",
  },
  {
    src: "https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg",
  },
  {
    src: "https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg",
  },
  {
    src: "https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg",
  },
  {
    src: "https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg",
  },
  {
    src: "https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg",
  },
];
function BodyProfilo() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  return (
    <div>
      <div className="flex flex-wrap">
        {post.map((el, i) => (
          <img
            key={i}
            src={el.src}
            alt="img"
            className="w-1/3 cursor-pointer"
            onClick={handleOpen}
          />
        ))}
      </div>
      <Navbar />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <div>
          <Card2
            postDescription="Vacanza stupenda!"
            postImg="https://free4kwallpapers.com/uploads/originals/2015/10/02/nice-place.jpg"
          />
        </div>
      </Modal>
    </div>
  );
}

export default BodyProfilo;

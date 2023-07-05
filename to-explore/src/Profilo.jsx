import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { Avatar } from "@mui/material";

import { Navbar } from "./Navbar";
import { useState } from "react";
import Card2 from './Card2';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

const post = [
  {src:"https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg"},
  {src:"https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg"},
  {src:"https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg"},
  {src:"https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg"},
  {src:"https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg"},
  {src:"https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg"},
  {src:"https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg"},
  {src:"https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg"},
  {src:"https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg"},
  {src:"https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg"},
  {src:"https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg"},
  {src:"https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg"},
  {src:"https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg"},
  {src:"https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg"},
  {src:"https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg"},
  {src:"https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823152586_abrainridingarocketship.jpg"},
]

export function Profilo({ username = "Andre A. Anuta", nameAccount='AA', counterLuoghi=20}) {

  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-around items-center h-36 w-full bg-contrast">
        <div className="flex items-center gap-2">
          <Avatar sx={{ bgcolor: "blue", width: 60, height: 60 }}>{nameAccount}</Avatar>
        </div>
        <div>
          <h1 className="text-xl">{username}</h1>
          <p className="text-xl">{counterLuoghi}</p>
        </div>
      </div>
      <div className="flex flex-wrap">
          {post.map((el, i) => <img key={i} src={el.src} alt='img' className='w-1/3 cursor-pointer' onClick={handleOpen}/>)}
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
        {/* <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal

            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade> */}
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

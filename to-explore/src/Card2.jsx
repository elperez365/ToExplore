import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CgComment } from "react-icons/cg";
import CommentPage from "./CommentPage";
import { AiFillHeart } from "react-icons/ai";
import { Backdrop, Box, Grow, Modal, useScrollTrigger } from "@mui/material";
import { TiSocialInstagramCircular } from "react-icons/ti";
import booking from "./images/booking.png";
import tripadvisor from "./images/tripadvisor.png";

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  InstapaperShareButton,
  InstapaperIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import { CiCircleRemove } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import userLoggedContest from "./UserLoggedContest";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Card2({
  postLocation = "location",
  postDate = "11 Feb",
  postImg = "https://th.bing.com/th/id/OIP.vupylNDkkgtcj4-zykCWhAHaDt?pid=ImgDet&rs=1",
  postAvatar,
  postDescription,
  avatarColor,
  postId,
  postUser,
}) {
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [wannaShare, setWannaShare] = React.useState(false);
  const [wannaDelete, setWannaDelete] = React.useState(false);
  const { username } = React.useContext(userLoggedContest);
  const navigate = useNavigate();
  const linkBooking = `https://www.booking.com/searchresults.it.html?ss=${postLocation}`;
  const linkTripAdvisor = `https://www.tripadvisor.it/Search?q=${postLocation}`;
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const handleWindowResize = React.useCallback((event) => {
    setWindowWidth(window.innerWidth);
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);
  const handleClose = () => setOpen(false);

  const handleOpen = () => window.innerWidth > 390 && setOpen(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLike = () => {
    setLiked(liked === false ? true : false);
  };

  const deletePost = (id) => {
    fetch("http://localhost:3001/posts/delete", {
      method: "DELETE",
      body: JSON.stringify({
        id: id,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((json) => alert(json.text))
      .then(() => navigate("/redirect"));
  };

  return (
    <Card
      style={{ borderRadius: "1.5rem", marginBottom: "0.75rem" }}
      sx={{ maxWidth: 400, marginTop: 0.5 }}
      className="lg:w-1/3 md:w-[48%] "
    >
      <CardHeader
        className="glass-effect bg-blur bg-opacity-50 bg-cardPrimary rounded-t-3xl capitalize"
        avatar={
          <Avatar
            className="cursor-pointer"
            sx={{ bgcolor: `${avatarColor}` }}
            aria-label="recipe"
            onClick={() => {
              navigate(`/user/${postUser}`);
            }}
          >
            {postAvatar}
          </Avatar>
        }
        action={
          <IconButton
            aria-label="settings"
            onClick={() => setWannaDelete(wannaDelete === false ? true : false)}
          >
            {wannaDelete && postUser === username && (
              <button onClick={() => deletePost(postId)} className="mr-10 flex">
                <CiCircleRemove className="bg-complement rounded-full h-7 w-7" />
                {/* <span>Elimina post</span> */}
              </button>
            )}
            <MoreVertIcon />
          </IconButton>
        }
        title={postLocation}
        subheader={postDate}
      />
      <CardMedia
        onClick={handleOpen}
        component="img"
        // height="250"
        image={postImg}
        alt="img"
        className="p-1 bg-cardPrimary bg-blur bg-opacity-50"
        style={{ height: 240, cursor: "pointer" }}
      />
      <CardContent className="glass-effect bg-blur bg-opacity-50 bg-cardPrimary">
        <Typography variant="body2" color="text.secondary">
          <div className="lg:h-16 lg:overflow-y-hidden md:h-16 md:overflow-y-hidden w-full text-base">
            {postDescription}
          </div>
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        className="glass-effect bg-blur rounded-b-3xl bg-opacity-50 bg-cardPrimary"
      >
        <IconButton aria-label="add to favorites" onClick={handleLike}>
          {liked ? <AiFillHeart color="red" /> : <AiFillHeart />}
        </IconButton>

        <IconButton
          aria-label="share"
          onClick={() => setWannaShare(wannaShare === false ? true : false)}
        >
          <ShareIcon />
        </IconButton>

        {wannaShare && (
          <Box className="flex gap-2 mx-2">
            <Grow
              style={{ transformOrigin: "0 0 0" }}
              className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-full"
              in={wannaShare}
              onChange={() =>
                setWannaShare(wannaShare === false ? true : false)
              }
            >
              <TwitterShareButton
                url={"https://www.example.com"}
                quote={"Download now the app!"}
                hashtag="#muo"
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>
            </Grow>

            <Grow
              style={{ transformOrigin: "8 0 2" }}
              in={wannaShare}
              className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-full"
              onChange={() =>
                setWannaShare(wannaShare === false ? true : false)
              }
            >
              <FacebookShareButton
                url={"https://www.example.com"}
                quote={"Download now the app!"}
                hashtag="#muo"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </Grow>

            <Grow
              style={{ transformOrigin: "0 0 0" }}
              className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-full"
              in={wannaShare}
              onChange={() =>
                setWannaShare(wannaShare === false ? true : false)
              }
            >
              <EmailShareButton
                url={"https://www.example.com"}
                quote={"Download now the app!"}
                hashtag="#muo"
              >
                <EmailIcon size={32} round />
              </EmailShareButton>
            </Grow>
          </Box>
        )}
        <IconButton href={linkBooking} target={windowWidth >= 1024 && "_blank"}>
          <img className="w-8 h-8" src={booking} alt="" />
        </IconButton>
        <IconButton
          href={linkTripAdvisor}
          target={windowWidth >= 1024 && "_blank"}
        >
          <img className="w-8 h-8" src={tripadvisor} alt="" />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <CgComment />
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          className="lg:absolute md:absolute lg:z-40 lg:w-96 md:z-40 md:w-96"
          style={{
            padding: "0",
          }}
        >
          <CommentPage className="" postId={postId} />
        </CardContent>
      </Collapse>

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
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            // bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <img src={postImg} alt="" className="w-[50rem] max-h-[50rem]" />
        </Box>
      </Modal>
    </Card>
  );
}

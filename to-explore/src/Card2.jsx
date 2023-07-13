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
import { Backdrop, Modal } from "@mui/material";

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
}) {
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLike = () => {
    setLiked(liked === false ? true : false);
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
          <Avatar sx={{ bgcolor: `${avatarColor}` }} aria-label="recipe">
            {postAvatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
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
          <div className="lg:h-16 lg:overflow-y-hidden md:h-16 md:overflow-y-hidden">
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
        <IconButton aria-label="share">
          <ShareIcon />
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
        <img src={postImg} alt="" />
      </Modal>
    </Card>
  );
}

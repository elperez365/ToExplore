import { useContext, useEffect, useState } from "react";
import TextAdd from "./TextAdd";
import { Avatar } from "@mui/material";
import userLoggedContest from "./UserLoggedContest";

function CommentPage() {
  const [comment, setComment] = useState("");
  const [commentList, SetCommentList] = useState([]);
  const [sent, setSent] = useState(false);
  const { avatar, avatarColor } = useContext(userLoggedContest);

  let riceviState = (text) => {
    setComment(text);
  };

  let handlePostComment = () => {
    SetCommentList([
      ...commentList,
      { avatar: avatar, avatarColor: avatarColor, comment: comment },
    ]);
    setComment("");
    setSent(true);
  };

  useEffect(() => {
    console.log(commentList);
  }, [commentList]);

  return (
    <div className="relative w-screen">
      <div className="flex flex-col gap-5 w-full min-h-12 max-h-52 overflow-x-scroll ">
        {commentList.map((el, i) => (
          <div key={i} className="flex gap-5">
            <Avatar
              sx={{ width: 40, height: 40, bgcolor: `${el.avatarColor}` }}
            >
              {el.avatar}
            </Avatar>
            <p className="bg-secondary rounded-xl ">{el.comment}</p>
          </div>
        ))}
      </div>
      <div className=" w-screen flex flex-col">
        <TextAdd passaState={riceviState} sentComment={{ sent, setSent }} />
        {/* <div className="flex gap-5 items-center justify-center">
          <Avatar sx={{ width: 40, height: 40, bgcolor: "blue" }}>FF</Avatar>
          <h1>Francesco Francomollo</h1>
        </div> */}
      </div>

      <button
        onClick={handlePostComment}
        className=" bg-primary rounded-full w-screen h-10"
      >
        Invia commento
      </button>
    </div>
  );
}
export default CommentPage;

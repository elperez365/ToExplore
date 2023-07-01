import { useEffect, useState } from "react";
import TextAdd from "./TextAdd";
import { Avatar } from "@mui/material";

function CommentPage() {
  const [comment, setComment] = useState();
  const [commentList, SetCommentList] = useState([]);

  let riceviState = (text) => {
    setComment(text);
  };

  let handlePostComment = () => {
    SetCommentList([...commentList, comment]);
    setComment("");
  };

  useEffect(() => {
    console.log(commentList);
  }, [commentList]);

  return (
    <div className="relative w-screen h-screen bg-contrast">
      <div className="flex flex-col gap-5 w-screen h-4/6 overflow-x-scroll ">
        {commentList.map((el) => (
          <div className="flex gap-5">
            <Avatar sx={{ width: 40, height: 40, bgcolor: "blue" }}>FF</Avatar>
            <p className="bg-secondary rounded-xl ">{el}</p>
          </div>
        ))}
      </div>
      <div className="fixed bottom-14 w-screen flex flex-col">
        <TextAdd passaState={riceviState} />
        <div className="flex gap-5 items-center justify-center">
          <Avatar sx={{ width: 40, height: 40, bgcolor: "blue" }}>FF</Avatar>
          <h1>Francesco Francomollo</h1>
        </div>
      </div>

      <button
        onClick={handlePostComment}
        className="fixed bottom-2 bg-primary rounded-full w-screen h-10"
      >
        Invia commento
      </button>
    </div>
  );
}
export default CommentPage;

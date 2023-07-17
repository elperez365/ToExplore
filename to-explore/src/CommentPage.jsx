import { useContext, useEffect, useState } from "react";
import TextAdd from "./TextAdd";
import { Avatar } from "@mui/material";
import userLoggedContest from "./UserLoggedContest";
import LanguageContext from "./LanguageContext";
import { CiCircleRemove } from "react-icons/ci";

function CommentPage({ postId }) {
  const { languageApp } = useContext(LanguageContext);
  const [comment, setComment] = useState("");
  const [commentList, SetCommentList] = useState([]);
  const [sent, setSent] = useState(false);
  const { avatar, avatarColor, username } = useContext(userLoggedContest);
  const languages = {
    pushComment: languageApp === "it" ? "Invia commento" : "Submit comment",
  };
  // const [loading, setLoading] = useState(false);

  let riceviState = (text) => {
    setComment(text);
  };

  let deleteComment = (commentId) => {
    fetch("http://localhost:3001/comments/delete", {
      method: "DELETE",
      body: JSON.stringify({ commentId: commentId }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())

      .then((json) => alert(json.text))
      .then(() =>
        fetch("http://localhost:3001/comments/commentlist", {
          method: "POST",
          body: JSON.stringify({ postId: `${postId}` }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        })
      )
      .then((res) => res.json())

      .then((json) => SetCommentList(json.commentPost));

    // setTimeout(() => {
    //   fetch("http://localhost:3001/comments/commentlist", {
    //     method: "POST",
    //     body: JSON.stringify({ postId: `${postId}` }),
    //     headers: { "Content-type": "application/json; charset=UTF-8" },
    //   })
    //     .then((res) => res.json())

    //     .then((json) => SetCommentList(json.commentPost));
    // }, 1000);
  };

  useEffect(() => {
    fetch("http://localhost:3001/comments/commentlist", {
      method: "POST",
      body: JSON.stringify({ postId: `${postId}` }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())

      .then((json) => SetCommentList(json.commentPost));
  }, [postId]);

  let handlePostComment = () => {
    setComment("");
    setSent(true);
    fetch("http://localhost:3001/comments/commentpush", {
      method: "POST",
      body: JSON.stringify({
        postId: `${postId}`,
        user: username,
        avatar: avatar,
        avatarColor: avatarColor,
        text: comment,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      // .then(console.log);
      .then(() =>
        fetch("http://localhost:3001/comments/commentlist", {
          method: "POST",
          body: JSON.stringify({ postId: `${postId}` }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        })
      )
      .then((res) => res.json())

      .then((json) => SetCommentList(json.commentPost));
  };

  return (
    <div className="relative lg:rounded-2xl md:rounded-2xl w-full ">
      <div className="lg:rounded-2xl md:rounded-2xl flex flex-col gap-5 w-full lg:h-48 min-h-12 max-h-52 overflow-y-scroll md:pb-0 pb-3 bg-white bg-opacity-80">
        {commentList.map((el, i) => (
          <div key={i} className="flex justify-between gap-5">
            <div className="flex">
              <Avatar
                sx={{ width: 40, height: 40, bgcolor: `${el.avatarColor}` }}
              >
                {el.avatar}
              </Avatar>
              <p className="bg-secondary rounded-xl">{el.text}</p>
            </div>
            {username === el.user && (
              <button
                onClick={() => deleteComment(el.commentId)}
                className="flex  justify-self-end items-center p-0 m-0 h-7 w-7"
              >
                <CiCircleRemove className="bg-complement rounded-full h-7 w-7" />
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="w-full">
        <TextAdd passaState={riceviState} sentComment={{ sent, setSent }} />
      </div>

      <button
        onClick={handlePostComment}
        className=" bg-primary rounded-full w-full h-10"
      >
        {languages.pushComment.toUpperCase()}
      </button>
    </div>
  );
}
export default CommentPage;

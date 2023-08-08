import Express from "express";
import { pubblications } from "./pubblications.mjs";
import { writeFileSync } from "fs";
import { uuid } from "uuidv4";

export const commentsRouter = Express.Router();
const posts = [...pubblications];

commentsRouter.post(`/commentlist`, (req, res) => {
  const { postId } = req.body;
  const postPosition = posts.findIndex((post) => post.id === postId);
  const commentPost = posts[postPosition].comments;
  if (postPosition >= 0) {
    res.status(200).json({ success: true, commentPost });
  } else res.status(500).json({ success: false, text: "commenti non trovati" });
});

//ESEMPIO DI BODY CHE ARRIVA IN /COMMENTLIST
// {"postId":"1"} ---- TUTTO A STRINGA
//
// ESEMPIO RISPOSTA
// {
//     "success": true,
//     "commentPost":  [
//                       {
//                         user: "giggio",
//                         avatar: "GG",
//                         avatarColor: "blue",
//                         text: "Ci sono stato anche io!",
//                       },
//                       {
//                         user: "albertino",
//                         avatar: "AA",
//                         avatarColor: "red",
//                         text: "come sei stato?",
//                       },
//                       {
//                         user: "giggiolone",
//                         avatar: "GI",
//                         avatarColor: "green",
//                         text: "grandissimo!",
//                       },
//                     ]
// }

commentsRouter.post(`/commentpush`, (req, res) => {
  const { postId, user, avatar, avatarColor, text } = req.body;
  const commentId = uuid();
  const commentData = new Date().toUTCString();
  const postPosition = posts.findIndex((post) => post.id === postId);
  if (postPosition >= 0) {
    posts[postPosition].comments.push({
      commentId,
      commentData,
      user,
      avatar,
      avatarColor,
      text,
    });
    res.status(200).json({ success: true, text: `commento pubblicato` });
    writeFileSync(
      "./server/pubblications.mjs",
      `export const pubblications= ${JSON.stringify(posts)}`
    );
  } else res.status(500).json({ success: false, text: "qualcosa non va" });
});

// ESEMPIO DI BODY CHE ARRIVA IN /COMMENTPUSH
// {
//     "postId":"1",
//     "user":"giggiolone",
//     "avatar":"GI",
//     "avatarColor": "green",
//     "text":"grandissimo!"
// }
//
// ESEMPIO DI RISPOSTA
// {
//     "success": true,
//     "text": "commento pubblicato"
// }

commentsRouter.delete(`/delete`, (req, res) => {
  const { commentId } = req.body;
  // const commentIdArr = [];
  const postComments = posts.map((post) => post.comments);
  const flatten = postComments.flat();
  // posts.forEach((post) =>
  //   post.comments.forEach((comment) => commentIdArr.push(comment.commentId))
  // );
  const commentFound = flatten.find((el) => el.commentId === commentId);
  if (commentFound) {
    const newPosts = posts.map(function (post) {
      const comments = post.comments.filter(
        (comment) => comment.commentId !== commentId
      );
      return {
        ...post,
        comments,
      };
    });
    res
      .status(200)
      .json({ success: true, text: "il tuo commento è stato cancellato" });
    writeFileSync(
      "./server/pubblications.mjs",
      `export const pubblications= ${JSON.stringify(newPosts)}`
    );
  } else
    res.status(500).json({
      success: false,
      text: "commento non trovato nel server, se hai appena pubblicato il commento attendi 3 secondi prima di cancellarlo",
    });
});

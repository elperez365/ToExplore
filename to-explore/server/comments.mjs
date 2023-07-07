import Express from "express";
import { pubblications } from "./pubblications.mjs";
import { writeFileSync } from "fs";

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
//     "commentPost": [
//         {
//             "user": "giggio",
//             "avatar": "GG",
//             "text": "Ci sono stato anche io!"
//         },
//         {
//             "user": "albertino",
//             "avatar": "AA",
//             "text": "come sei stato?"
//         }
//     ]
// }

commentsRouter.post(`/commentpush`, (req, res) => {
  const { postId, user, avatar, text } = req.body;
  const postPosition = posts.findIndex((post) => post.id === postId);
  console.log(postPosition);
  if (postPosition >= 0) {
    posts[postPosition].comments.push({ user, avatar, text });
    res.status(200).json({ success: true, text: `commento pubblicato` });
    writeFileSync(
      "./pubblications.mjs",
      `export const pubblications= ${JSON.stringify(posts)}`
    );
  } else res.status(500).json({ success: false, text: "qualcosa non va" });
});

// ESEMPIO DI BODY CHE ARRIVA IN /COMMENTPUSH
// {
//     "postId":"1",
//     "user":"giggiolone",
//     "avatar":"GI",
//     "text":"grandissimo!"
// }
//
// ESEMPIO DI RISPOSTA
// {
//     "success": true,
//     "text": "commento pubblicato"
// }

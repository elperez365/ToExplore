import Express from "express";
import { pubblications } from "./pubblications.mjs";
import { uuid } from "uuidv4";
import { writeFileSync } from "fs";

export const postsRouter = Express.Router();
const posts = [...pubblications];

postsRouter.get(`/`, (req, res) => {
  res.json(posts.reverse());
});

postsRouter.post(`/post`, (req, res) => {
  const id = uuid();
  const comments = [];
  const {
    location,
    region,
    postData,
    postUser,
    postAvatar,
    avatarColor,
    img,
    description,
  } = req.body;

  if (
    location &&
    region &&
    postData &&
    postUser &&
    postAvatar &&
    avatarColor &&
    img
  ) {
    posts.push({
      id,
      location,
      region,
      postData,
      postUser,
      postAvatar,
      avatarColor,
      img,
      description,
      comments,
    });
    res
      .status(200)
      .json({ success: true, text: "il tuo post è stato pubblicato" });
    writeFileSync(
      "./pubblications.mjs",
      `export const pubblications= ${JSON.stringify(posts)}`
    );
  } else
    res.status(500).json({
      success: false,
      text: "qualcosa non va, controlla i dati inseriti",
    });
});
// ESEMPIO BODY DEL POST CHE ARRIVA
//   {
//     "location": "comune del post",
//     "region": "regione del post",
//     "postData": "data del post",
//     "postUser": "username di chi ha postato",
//     "postAvatar": "AA",
//     "avatarColor": "red",
//     "img": "boh",
//     "description": "descrizione del post",
//   },

postsRouter.get(`/region/:region`, (req, res) => {
  const { region } = req.params;
  const filteredByRegion = posts.filter((post) => post.region === region);
  res.json(filteredByRegion);
});

postsRouter.get(`/username/:username`, (req, res) => {
  const { username } = req.params;
  const filteredByusername = posts.filter((post) => post.postUser === username);
  res.json(filteredByusername);
});

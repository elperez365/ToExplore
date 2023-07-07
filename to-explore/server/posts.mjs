import Express from "express";
import { pubblications } from "./pubblications.mjs";
import { v4 as uuidv4 } from "uuid";
import { writeFileSync } from "fs";

export const postsRouter = Express.Router();
const posts = [...pubblications];

postsRouter.get(`/`, (req, res) => {
  res.json(posts.reverse());
});

postsRouter.post(`/`, (req, res) => {
  const id = uuidv4();
  const comments = [];
  const { location, region, postData, postUser, img, description } = req.body;

  if (location && region && postData && postUser && img) {
    posts.push({
      id,
      location,
      region,
      postData,
      postUser,
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

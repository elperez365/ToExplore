import Express from "express";
import { pubblications } from "./pubblications.mjs";
import { writeFileSync } from "fs";

export const postsRouter = Express.Router();
const posts = [...pubblications];
const postReversed = posts.reverse();
postsRouter.get(`/`, (req, res) => {
  res.json(postReversed);
});

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

postsRouter.delete(`/delete`, (req, res) => {
  const { id } = req.body;
  const postFound = posts.findIndex((el) => el.id === id);
  if (postFound >= 0) {
    const newPosts = posts.filter((el) => el.id !== id);

    res
      .status(200)
      .json({ success: true, text: "il tuo post è stato cancellato" });

    writeFileSync(
      "./pubblications.mjs",
      `export const pubblications= ${JSON.stringify(newPosts.reverse())}`
    );
  } else {
    res.status(500).json({
      success: false,
      text: "il post da eliminare non esiste",
    });
  }
});

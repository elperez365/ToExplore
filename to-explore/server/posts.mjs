import Express from "express";
import { pubblications } from "./pubblications.mjs";

export const postsRouter = Express.Router();
const posts = [...pubblications];

postsRouter.get(`/`, (req, res) => {
  res.json(posts.reverse());
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

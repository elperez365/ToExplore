import { express } from "express";
import pubblications from "./pubblications.mjs";
const router = express.router();
const posts = [...pubblications];
router.get(`/`, (req, res) => {
  res.json(posts);
});

router.post(`/`, (req, res) => {
  const newpost = req.body;
  posts.push(newpost);
  res
    .status(200)
    .json({ success: true, text: "il tuo post è stato pubblicato" });
});
// ESEMPIO BODY DEL POST CHE ARRIVA
// {
//     location: "comune del post",
//     region: "regione del post",
//     postData: "data del post",
//     postUser: "username di chi ha postato",
//     img: "boh",
//     description: "descrizione del post",
//     comments: [arrayVuoto],
//   },

router.get(`/:region`, (req, res) => {
  const { region } = req.params;
  const filteredByRegion = posts.filter((post) => post.region === region);
  res.json(filteredByRegion);
});

router.get(`/:username`, (req, res) => {
  const { username } = req.params;
  const filteredByusername = posts.filter((post) => post.postUser === username);
  res.json(filteredByusername);
});

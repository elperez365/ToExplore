import Express from "express";
import { pubblications } from "./pubblications.mjs";
import { uuid } from "uuidv4";
import { writeFileSync } from "fs";
import multer from "multer";
import { mkdir } from "fs";
export const uploadPostRouter = Express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    mkdir("./uploads/", (err) => {
      cb(null, "./server/uploads/");
    });
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const posts = [...pubblications];

const upload = multer({ storage: storage });

uploadPostRouter.post(`/`, upload.array("image"), (req, res) => {
  const id = uuid();
  const comments = [];
  const publication = {
    location: req.body.comune,
    region: req.body.regione,
    postData: new Date().toDateString(),
    postUser: req.body.postUser,
    postAvatar: req.body.avatar,
    avatarColor: req.body.avatarColor,
    img: `http://localhost:3001/static/${req.files[0].filename}`,
    description: req.body.descrizione,
  };
  const {
    location,
    region,
    postData,
    postUser,
    postAvatar,
    avatarColor,
    img,
    description,
  } = publication;

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
      "./server/pubblications.mjs",
      `export const pubblications= ${JSON.stringify(posts)}`
    );
  } else
    res.status(500).json({
      success: false,
      text: "qualcosa non va, controlla i dati inseriti",
    });
  //   console.log(req.body);
  //   console.log(req.files);
});

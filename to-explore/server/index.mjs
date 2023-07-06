import { express } from "express";

const app = express();
const port = 3001;
const loginRouter = require(`./login.mjs`);
const postsRouter = require(`./posts.mjs`);
app.use(express.json());

app.use(`/login`, loginRouter);
app.use(`/posts`, postsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

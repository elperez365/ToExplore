import Express from "express";
import { postsRouter } from "./posts.mjs";
import { loginRouter } from "./login.mjs";
const app = Express();
const port = 3001;

app.use(Express.json());

app.use(`/login`, loginRouter);
app.use(`/posts`, postsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

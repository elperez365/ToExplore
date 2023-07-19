import Express from "express";
import { postsRouter } from "./posts.mjs";
import { loginRouter } from "./login.mjs";
import { commentsRouter } from "./comments.mjs";
import cors from "cors";
import { uploadPostRouter } from "./uploadPost.mjs";
import { likesRouter } from "./likesRoute.mjs";
const app = Express();
const port = 3001;
app.use(cors());
app.use(Express.json());
app.use("/static", Express.static("uploads"));

app.use(`/login`, loginRouter);
app.use(`/posts`, postsRouter);
app.use(`/comments`, commentsRouter);
app.use(`/uploadPost`, uploadPostRouter);
app.use(`/likes`, likesRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

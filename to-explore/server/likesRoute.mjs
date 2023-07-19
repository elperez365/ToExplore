import Express from "express";
import { likesDB } from "./likes.mjs";
import { writeFileSync } from "fs";

export const likesRouter = Express.Router();

const likes = { ...likesDB };

likesRouter.post("/post", (req, res) => {
    const { username, postId } = req.body;

    if (likes[username]) {
        likes[username].push(postId);
    } else {
        likes[username] = [];
        likes[username].push(postId);
    }

    res.status(200).json({ success: true, text: "il like è stato aggiunto" });
    writeFileSync(
        "./likes.mjs",
        `export const likesDB = ${JSON.stringify(likes)}`
    );
});

likesRouter.delete("/delete", (req, res) => {
    const { username, postId } = req.body;

    if (likes[username]) {
        likes[username] = likes[username].filter((el) => el !== postId);

        res.status(200).json({
            success: true,
            text: "il like è stato eliminato",
        });
        writeFileSync(
            "./likes.mjs",
            `export const likesDB = ${JSON.stringify(likes)}`
        );
    } else {
        res.status(500).json({
            success: false,
            text: "lo username non esiste",
        });
    }
});

likesRouter.get("/getLike", (req, res) => {
    const { username, postId } = req.body;

    const foundLikedPost = likes[username].find((el) => el === postId);

    if (foundLikedPost) {
        res.status(200).json({
            success: true,
            text: "il like è presente",
        });
    } else {
        res.status(500).json({
            succes: false,
            text: "il like non è presente",
        });
    }
});

likesRouter.get("/getCounter", (req, res) => {
    const { postId } = req.body;

    const totalLikes = Object.values(likes);
    const flatTotalLikes = totalLikes.flat();

    const filterTotalLikes = flatTotalLikes.filter((el) => el === postId);
    const counter = filterTotalLikes.length;

    res.status(200).json({
        success: true,
        counter: counter,
    });
});

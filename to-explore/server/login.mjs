import { express } from "express";
import users from "./users.mjs";
const router = express.router();
const usersArray = [...users];

router.get(`/`, (req, res) => {
  res.json(usersArray);
});

router.post(`/`, (req, res) => {});

router.put(`/`, (req, res) => {});

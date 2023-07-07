import Express from "express";
import { users } from "./users.mjs";
import { v4 as uuidv4 } from "uuid";
import { writeFileSync } from "fs";
export const loginRouter = Express.Router();
const usersArray = [...users];

loginRouter.get(`/`, (req, res) => {
  res.json(usersArray);
});

loginRouter.post(`/`, (req, res) => {
  const id = uuidv4();
  const { username, mail, password, avatar, color } = req.body;
  const userFinded = usersArray.find((user) => user.username === username);
  const mailFinded = usersArray.find((user) => user.mail === mail);
  if (
    username &&
    mail &&
    password &&
    avatar &&
    color &&
    !userFinded &&
    !mailFinded
  ) {
    usersArray.push({ id, username, mail, password, avatar, color });
    res
      .status(200)
      .json({ success: true, text: "Registrazione completata con successo" });
    writeFileSync(
      "./users.mjs",
      `export const users = ${JSON.stringify(usersArray)}`
    );
  } else
    res.status(500).json({
      success: false,
      text: "qualcosa non va, controlla i dati inseriti",
    });
});

//ESEMPIO DI BODY CHE ARRIVA DALLA REGISTRAZIONE
// {
//   "username": "string",   -----> se già esistente non viene inserito
//   "mail": "string",         -----> se già esistente non viene inserito
//   "password": "string",
//   "avatar": "string",
//   "color": "string",
// }

loginRouter.put(`/`, (req, res) => {
  const { username, color } = req.body;
  const UserPosition = usersArray.findIndex(
    (user) => user.username === username
  );
  if (UserPosition) {
    usersArray[UserPosition].color = color;
    res
      .status(200)
      .json({ success: true, text: "The avatar color is changed!" });
    writeFileSync(
      "./users.mjs",
      `export const users = ${JSON.stringify(usersArray)}`
    );
  } else res.json({ success: false, text: "username not found" });
});

//ESEMPIO DI BODY CHE ARRIVA DAL CAMBIO COLORE AVATAR
// {
//   "username": "string",
//   "color": "string",
// }

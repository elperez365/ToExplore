import Express from "express";
import { users } from "./users.mjs";
import { uuid } from "uuidv4";
import { writeFileSync } from "fs";
export const loginRouter = Express.Router();
const usersArray = [...users];

loginRouter.post(`/`, (req, res) => {
  const { username, password } = req.body;

  const findUser = usersArray.find(
    (user) => user.username === username && user.password === password
  );
  // const findPassword = usersArray.find((user) => user.password === password);

  if (findUser) {
    // const userFiltered = usersArray.filter(
    //   (user) => user.username === username
    // );
    res.status(200).json([findUser]);
  } else {
    res.json("I dati inseriti non sono");
  }
});

loginRouter.post(`/post`, (req, res) => {
  const id = uuid();
  const { username, mail, password, avatar, color } = req.body;
  const userFinded = usersArray.find(
    (user) => user.username === username || user.mail === mail
  );
  // const mailFinded = usersArray.find((user) => user.mail === mail);
  if (
    username &&
    mail &&
    password &&
    avatar &&
    color &&
    !userFinded
    // !mailFinded
  ) {
    usersArray.push({ id, username, mail, password, avatar, color });
    res
      .status(200)
      .json({ success: true, text: "Registrazione completata con successo" });
    writeFileSync(
      "./users.mjs",
      `export const users = ${JSON.stringify(usersArray)}`
    ); // gestire errore writefilesync
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

loginRouter.put(`/put`, (req, res) => {
  const { username, color } = req.body;
  const UserPosition = usersArray.findIndex(
    (user) => user.username === username
  );
  if (UserPosition >= 0) {
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

loginRouter.post(`/avatar`, (req, res) => {
  const { username } = req.body;
  const findUser = usersArray.find((user) => user.username === username);

  if (findUser) {
    const userFiltered = usersArray.filter(
      (user) => user.username === username
    );
    res.status(200).json({
      avatar: userFiltered[0].avatar,
      color: userFiltered[0].color,
    });
  } else {
    res.status(500).json("I dati inseriti non sono");
  }
});

import Express from "express";
import users from "./users.mjs";
import { uuid } from "uuidv4";
export const loginRouter = Express.Router();
const usersArray = [...users];

loginRouter.get(`/`, (req, res) => {
  res.json(usersArray);
});

loginRouter.post(`/`, (req, res) => {
  const id = uuid();
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
  } else
    res.json({
      success: false,
      text: "qualcosa non va, controlla i dati inseriti",
    });
});

//ESEMPIO DI BODY CHE ARRIVA DALLA REGISTRAZIONE
// {
//   username: "username",
//   mail: "e-mail",
//   password: "password",
//   avatar: "PP",
//   color: "color",
// }

loginRouter.put(`/`, (req, res) => {});

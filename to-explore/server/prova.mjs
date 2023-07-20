import { likesDB } from "./likes.mjs";

const newDb = { ...likesDB };

const id = "c2264d69-4051-4aa3-9b59-ac597490ac97";

const keys = Object.keys(newDb);

function userslike(id) {
  const usersLikeIt = [];
  keys.forEach(
    (el) => newDb[el].find((el) => el === id) && usersLikeIt.push(el)
  );
  return usersLikeIt;
}

console.log(userslike(id));

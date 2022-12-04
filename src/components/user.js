import { getData } from "../api";

const userId = location.search.split("=")[1] || 1;

console.log(userId);
getData('users/' + userId)
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => console.log(error));

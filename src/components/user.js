import { getData } from "../api";
const userId = location.search.split("=")[1] || 1;
console.log(userId);

getData("users/" + userId)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

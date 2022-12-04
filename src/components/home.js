import { getData } from "../api";

getData()
  .then((resp) => console.log(resp))
  .catch((error) => console.log(error));

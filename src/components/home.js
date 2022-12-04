import { getData } from "../api";
import { createUsersTable } from "../markup";
import { updateList } from "../utils";

const tBodyEl = document.querySelector(".js-tbody");


getData()
  .then((resp) => {
    let markup = resp.map(createUsersTable).join('')
    console.log(markup);
    updateList(markup, tBodyEl)

  })
  .catch((error) => console.log(error));









 
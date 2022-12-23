import { getData } from "../api";
import { createUserTable } from "../markup";
import { updateList } from "../utils";

const userId = location.search.split("=")[1] || 1;

const userTableRef = document.querySelector(".js-user-table");

async function getDataUser() {
  try {
    const response = await getData("users/" + userId);

    const markup = createUserTable(response);
    updateList(markup, userTableRef);

    console.log(markup);
  } catch (error) {
    console.log(error);
  }
}

getDataUser();

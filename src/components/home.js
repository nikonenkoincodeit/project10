import { getData } from "../api";
import { createUsersTable } from "../markup";
import { updateList } from "../utils";

const tBodyEl = document.querySelector(".js-tbody");


getData('users')
  .then((resp) => {
    let markup = resp.map(createUsersTable).join('')
    // console.log(markup);
    updateList(markup, tBodyEl)

  })
  .catch((error) => console.log(error));

const callData = document.querySelector(".js-tbody");

callData.addEventListener('click', onIdUserGet);

function onIdUserGet(evt) {
  const parentLink = evt.target.parentNode;
  const userId = parentLink.dataset.user;
  console.log(evt.target.parentNode);
  console.log(userId);

  location.href = `user.html?userId=${userId}`;
  }

// console.log(callData);







 
import { getData } from "../api";
import { tableBodyRefs } from "../refs";
import { creatUserList } from "../markup";
import { renderMarkup } from "../utils";

getData("users")
  .then((response) => {
    const markup = creatUserList(response);
    renderMarkup(markup, tableBodyRefs);
  })
  .catch((error) => {
    console.log(error);
  });

tableBodyRefs.addEventListener("click", onClick);

function onClick(e) {
  const elt = e.target.closest(".tr-row");
  console.log(elt);
  if (!elt) {
    return;
  }
  const dataUserId = elt.dataset.user;
  console.log(dataUserId);
  location.href = "user.html?userid=" + dataUserId;
}

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

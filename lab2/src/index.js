import "babel-polyfill";
import { search } from "./search";
import debounce from "lodash.debounce";
import { displayEmojiIfCookieSet } from "./cookie.helpers";

document
  .querySelector("#animal-search")
  .addEventListener("keyup", debounce(search, 300));
displayEmojiIfCookieSet();

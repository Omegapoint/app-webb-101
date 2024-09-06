import { startGame } from "./GameManager";
import "../style.css";

const elementToAttach = document.getElementById("game");
if (elementToAttach) {
  startGame(elementToAttach, 4);
} else {
  throw new Error("unable to find game element");
}

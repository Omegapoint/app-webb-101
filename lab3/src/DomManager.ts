import MemoryBoard from "./MemoryBoard";
import { CARD_DICTIONARY, SCORE_STATE } from "./models";

/*
 *  The module for the dom manager.
 *  You should not have to make any changes to this module in order to complete the lab.
 * */
class DomManager {
  node: HTMLElement;
  memoryBoard: MemoryBoard;

  constructor(node: HTMLElement, memoryBoard: MemoryBoard) {
    this.node = node;
    this.memoryBoard = memoryBoard;
    this.clearNode();
    this.setupBoard();
  }

  newGame(newBoard: MemoryBoard) {
    this.memoryBoard = newBoard;
  }

  // remove everything connected to gameBoard
  // to make room for new, improveness stuff
  clearNode() {
    this.clearListeners();
    this.node.textContent = "";
  }

  clearListeners() {
    this.node.querySelectorAll(".card").forEach((card) => {
      card.removeEventListener("click", () => {});
    });
  }

  onCardClicked(tileId: number) {
    this.memoryBoard.handleClicked(tileId);
    this.node
      .querySelectorAll(".card")
      .forEach((cardElement: Element, index: number) => {
        const cardState: CARD_DICTIONARY = this.memoryBoard.getCardState(index);
        this.handleCardState(cardElement, cardState);
      });
  }

  handleCardState(cardElement: Element, cardState: CARD_DICTIONARY) {
    switch (cardState) {
      case CARD_DICTIONARY.FACE_DOWN:
        cardElement.className = "card";
        break;
      case CARD_DICTIONARY.FACE_UP:
        cardElement.className = "card selected";
        break;
      case CARD_DICTIONARY.SOLVED:
        cardElement.className = "card found";
        break;
    }
  }

  setNumberOfTilesMatched(score: number = 0) {
    const scoreEl = document.getElementById("current-number-of-tiles-matched");
    if (scoreEl) {
      scoreEl.textContent = score.toString();
    }
  }

  setNumberOfTries(tries: number = 0) {
    const triesEl = document.getElementById("number-of-tries");
    if (triesEl) {
      triesEl.textContent = tries.toString();
    }
  }

  createCardNode(imgSrc: string, tileId: number): HTMLDivElement {
    const rootCardElement = document.createElement("div");
    rootCardElement.className = "col-xs-3 grid-item";

    const cardContainer = document.createElement("div");
    cardContainer.className = "card";
    cardContainer.addEventListener("click", (e) => {
      e.preventDefault();
      this.onCardClicked(tileId);
    });

    const backElement = document.createElement("div");
    backElement.className = "back";

    const imageElement = document.createElement("div");
    imageElement.className = "img-container";
    const image = document.createElement("img");
    image.setAttribute("src", imgSrc);
    imageElement.appendChild(image);

    rootCardElement.appendChild(cardContainer);
    cardContainer.appendChild(backElement);
    cardContainer.appendChild(imageElement);
    return rootCardElement;
  }

  setupBoard() {
    const theGrid = document.createElement("div");
    let currentRow: HTMLDivElement;
    this.memoryBoard.kittenImageId.forEach((tileId, index) => {
      if (index % this.memoryBoard.size === 0) {
        if (index > 0) {
          theGrid.appendChild(document.createElement("br"));
        }
        currentRow = document.createElement("div");
        currentRow.className = "row";
        theGrid.appendChild(currentRow);
      }
      const kittenImage = this.memoryBoard.getKittenImage(tileId);
      const cardNode = this.createCardNode(kittenImage.url, index);
      currentRow.appendChild(cardNode);
    });
    this.node.appendChild(theGrid);
  }

  showGameOver(scoreState: SCORE_STATE) {
    console.log("GAME OVER!", scoreState);

    const gameOverEl = document.getElementById("game-over-panel");
    // Can you find this element in index.html? Maybe you need to add some stuff to it's body... ;)

    if (gameOverEl) {
      gameOverEl.style.display = "block";
    }
  }
}

export default DomManager;

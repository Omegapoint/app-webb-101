import DomManager from "./DomManager";
import MemoryBoard from "./MemoryBoard";
import { NotifyAction, SCORE_STATE } from "./models";

let gameTimer: NodeJS.Timer;
let score: SCORE_STATE = {
  timeElapsed: 0,
  numberOfTilesMatched: 0,
  numberOfTries: 0,
};
let domManager: DomManager;

export const notifyAction = (action: NotifyAction) => {
  console.log(action.type, action);
  // TODO: your implementation of step 8 & 9 COULD go here. ;)
};

export const startGame = (gameElement: HTMLElement, size: number) => {
  const memoryBoard = new MemoryBoard(size, notifyAction);
  domManager = new DomManager(gameElement, memoryBoard);
};

export const startGameTimer = () => {
  const second: number = 1000;
  gameTimer = setInterval(() => {
    score.timeElapsed += second;
  }, second);
};

export const stopGameTimer = () => {
  clearInterval(gameTimer);
};

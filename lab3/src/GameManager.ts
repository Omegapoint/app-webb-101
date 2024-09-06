import DomManager from "./DomManager";
import MemoryBoard from "./MemoryBoard";
import { NotifyAction, SCORE_STATE, GAME_STATE } from "./models";

let gameTimer: NodeJS.Timeout;
let scoreState: SCORE_STATE = {
  timeElapsed: 0,
  numberOfTilesMatched: 0,
  numberOfTries: 0,
};
let domManager: DomManager;

export const startGame = (gameElement: HTMLElement, size: number) => {
  const memoryBoard = new MemoryBoard(size, notifyAction);
  domManager = new DomManager(gameElement, memoryBoard);
};

export const startGameTimer = () => {
  const second: number = 1000;
  gameTimer = setInterval(() => {
    scoreState.timeElapsed += second;
  }, second);
};

export const stopGameTimer = () => {
  clearInterval(gameTimer);
};

export const notifyAction = (action: NotifyAction) => {
  console.log(action.type, action);
  // TODO: your implementation of step 8 & 9 COULD go here. ;)
};

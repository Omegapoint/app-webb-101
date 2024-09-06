export enum GAME_STATE {
  SOLVED = "SOLVED",
  NO_MATCH = "NO_MATCH",
  GAME_STARTED = "GAME_STARTED",
  GAME_OVER = "GAME_OVER",
}

export type NotifyAction = {
  type: GAME_STATE;
  data?: {
    card1: number;
    card2: number;
  };
};

export type KittenImage = {
  id: number;
  url: string;
};

export enum CARD_DICTIONARY {
  FACE_UP = 1,
  FACE_DOWN = 0,
  SOLVED = 2,
}

export type SCORE_STATE = {
  timeElapsed: number;
  numberOfTilesMatched: number;
  numberOfTries: number;
};

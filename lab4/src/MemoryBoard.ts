import _ from "lodash";
import {
  CARD_DICTIONARY,
  GAME_STATE,
  KittenImage,
  NotifyAction,
} from "./models";

export const kittens: Array<KittenImage> = [
  { id: 0, url: "http://i.giphy.com/3oriO0OEd9QIDdllqo.gif" },
  { id: 1, url: "http://i.giphy.com/iNMz8LF8y3g4.gif" },
  { id: 2, url: "http://i.giphy.com/OmK8lulOMQ9XO.gif" },
  { id: 3, url: "http://i.giphy.com/11s7Ke7jcNxCHS.gif" },
  { id: 4, url: "http://i.giphy.com/IcXFEz3QvEmpG.gif" },
  { id: 5, url: "http://i.giphy.com/yFQ0ywscgobJK.gif" },
  { id: 6, url: "http://i.giphy.com/c7kqZMtzMLpG8.gif" },
  { id: 7, url: "http://i.giphy.com/njtPBlbYnHAHK.gif" },
];

/*
 *  The module for the memory board.
 *  You should not have to make any changes to this module in order to complete the lab.
 * */
class MemoryBoard {
  kittenImages: Array<KittenImage>;
  notifyActionCallback: (action: NotifyAction) => void;
  state: Array<CARD_DICTIONARY>;
  size: number;
  kittenImageId: Array<number>;
  notifyGameStarted: () => void;

  constructor(
    size: number = 4,
    notifyActionCallback: (action: NotifyAction) => void = () => {}
  ) {
    this.kittenImages = kittens;
    this.notifyActionCallback = notifyActionCallback;
    this.state = this.setupState(size);
    this.size = size;
    this.kittenImageId = this.getShuffledTiles(size);
    this.notifyGameStarted = _.once(() => {
      this.notifyActionCallback({ type: GAME_STATE.GAME_STARTED });
    });
  }

  setupState(size: number): Array<CARD_DICTIONARY> {
    return _.range(0, size * size).map(() => CARD_DICTIONARY.FACE_DOWN);
  }

  getCardState(cardId: number): CARD_DICTIONARY {
    return this.state[cardId];
  }

  handleClicked(cardId: number) {
    this.notifyGameStarted();
    if (this.state[cardId] !== CARD_DICTIONARY.FACE_DOWN) {
      return;
    }
    const numberOfCardsFacingUp: number = this.getNumberOfCardsFacingUp();

    if (numberOfCardsFacingUp === 0) {
      this.state[cardId] = CARD_DICTIONARY.FACE_UP;
    } else if (numberOfCardsFacingUp === 1) {
      const currentCardFacingUp: number = this.getCurrentCardIndexFacingUp();

      this.state[cardId] = CARD_DICTIONARY.FACE_UP;

      const isMatch: boolean =
        this.kittenImageId[cardId] === this.kittenImageId[currentCardFacingUp];

      if (isMatch) {
        this.state[cardId] = CARD_DICTIONARY.SOLVED;
        this.state[currentCardFacingUp] = CARD_DICTIONARY.SOLVED;
        this.notifyActionCallback({
          type: GAME_STATE.SOLVED,
          data: {
            card1: cardId,
            card2: currentCardFacingUp,
          },
        });

        //	should finish?
        const isGameOver: boolean =
          this.state.filter((item) => item === CARD_DICTIONARY.FACE_DOWN)
            .length === 0;

        if (isGameOver) {
          this.notifyActionCallback({
            type: GAME_STATE.GAME_OVER,
          });
        }
      }
    } else {
      // user clicks a third card.
      this.notifyActionCallback({
        type: GAME_STATE.NO_MATCH,
      });
      this.turnBackAllCardsFacingUp();
      this.state[cardId] = CARD_DICTIONARY.FACE_UP;
    }
  }

  turnBackAllCardsFacingUp(): CARD_DICTIONARY | void {
    this.state.map((card, index) => {
      if (card === CARD_DICTIONARY.FACE_UP) {
        this.state[index] = CARD_DICTIONARY.FACE_DOWN;
      }
      return card;
    });
  }

  getCurrentCardIndexFacingUp(): number {
    return _.findIndex(
      this.state,
      (card: CARD_DICTIONARY) => card === CARD_DICTIONARY.FACE_UP
    );
  }

  getNumberOfCardsFacingUp(): number {
    return this.state.filter((item) => {
      return item === CARD_DICTIONARY.FACE_UP;
    }).length;
  }

  getShuffledTiles(size: number): Array<number> {
    if (size % 2 !== 0) {
      throw new Error(
        "size cannot be uneven numbers, would make up for some really terrible pairing, l0l"
      );
    }
    if ((size * size) / 2 > this.kittenImages.length) {
      throw new Error("insufficient kittens provided to make more cats");
    }
    const arr = _.range(0, Math.floor((size * size) / 2));
    return _.shuffle([...arr, ...arr]);
  }

  getKittenImage(kittenImageId = 0): KittenImage {
    return kittens[kittenImageId];
  }
}

export default MemoryBoard;

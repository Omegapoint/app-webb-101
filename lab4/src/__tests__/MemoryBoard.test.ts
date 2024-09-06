import MemoryBoard, { kittens } from "../MemoryBoard";
import _ from "lodash";
import { CARD_DICTIONARY, KittenImage } from "../models";

const generateKittens = (size: number): Array<KittenImage> =>
  _.range(0, size).map((id) => ({ url: `kitten_${id}.jpg`, id }));

describe("MemoryBoard", () => {
  const mockCallback = jest.fn();

  describe("constructor()", () => {
    it("should construct a board with 16 tiles when size = 4", () => {
      const board = new MemoryBoard(4, mockCallback);
      const actual = board.kittenImageId.length;
      const expected = 16;
      expect(actual).toEqual(expected);
    });

    it("should not initialize when size is greater than the amount of kittens * 2", () => {
      expect(() => new MemoryBoard(9, mockCallback)).toThrow();
    });

    it("should produce an array with pairs", () => {
      const board = new MemoryBoard(4, mockCallback);
      const actual = board.kittenImageId.sort();
      const expected = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
      expect(actual).toEqual(expected);
    });
  });

  describe("getNumberOfCardsFacingUp()", () => {
    it("should know number of cards facing up", () => {
      // given
      const board = new MemoryBoard(4, mockCallback);
      // when
      board.handleClicked(5);
      const actual = board.getNumberOfCardsFacingUp();
      // then
      const expected = 1;
      expect(actual).toBe(expected);
    });
  });

  // TODO: Implement these failing tests!

  describe("getCurrentCardIndexFacingUp()", () => {
    it("should display the card facing up", () => {
      // given
      const board = new MemoryBoard(4, mockCallback);
      // when
      board.handleClicked(5);
      const actual = board.getCurrentCardIndexFacingUp();
      // then
      const notExpected = 1000000;
      const expected = 5;
      expect(actual).toBe(notExpected);
    });
  });

  describe("getKittenImage(id)", () => {
    const board = new MemoryBoard(4, mockCallback);

    it("should return a kitten with given a kitten id", () => {
      // given
      const kittenId = 0;
      // when
      const actual = null; // TODO: const actual = board.getKittenImage(kittenI...
      // then
      const expected = kittens[kittenId];
      expect(actual).toEqual(expected);
    });
  });

  describe("getCardState(cardId)", () => {
    const board = new MemoryBoard(4, mockCallback);

    it("should return an unflipped card when the board is created", () => {
      // given
      const firstCard = 0;
      // when
      // const actual = board.getCardState(firstCard);
      // then
      // const expected = CARD_DICTIONA...
      // expect(actual).toEqual(expected);
      expect(true).toEqual(false);
    });

    it("should return a flipped card when the card has been clicked", () => {
      // given
      const firstCard = 0;
      // when
      // clicking on card with given cardId...
      // board.handleClicked(firstCard);
      // const actual = board.getCardS...
      // then
      // const expected = ...
      // expect(actual).toEqual(expected);
      expect(true).toEqual(false);
    });
  });

  describe("getShuffledTiles(size, images)", () => {
    const board = new MemoryBoard(4, mockCallback);

    it("should throw an error if board is too large", () => {
      const hugeSizeBoard = 40;
      // try {
      // 	board.getSh...
      // } catch (e) {
      // 	expect(e.message).toEqual(...);
      // }
      expect(true).toEqual(false);
    });

    it("should throw an error when trying to create a board of uneaven size", () => {
      const size = 5;
      // You got this now, right!? Give it a try (and a catch!) :)
      // expect(true).toEqual(false);
    });
  });
});

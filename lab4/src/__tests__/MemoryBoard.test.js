import _ from 'lodash';
import MemoryBoard, { getShuffledTiles, kittens } from '../MemoryBoard';

const generateKittens = size => _.range(0, size)
  .map(id => ({ url: `kitten_${id}.jpg`, id }));

describe('constructor()', () => {
  it('when size = 4', () => {
    const board = new MemoryBoard({ size: 4, kittenImages: generateKittens(8) });
    expect(board.kittenImageId.length).toEqual(16);
  });

  it('it should throw an error when size = 5', () => {
    expect(() => new MemoryBoard({ size: 5, kittenImages: generateKittens(6) })).toThrow();
  });

  it('when size = 6', () => {
    const board = new MemoryBoard({ size: 6, kittenImages: generateKittens(18) });
    expect(board.kittenImageId.length).toEqual(36);
  });

  it('cannot initialize when size is greater than the amount of kittens * 2', () => {
    expect(() => new MemoryBoard({ size: 4, kittenImages: generateKittens(6) })).toThrow();
  });

  it('should produce an array with pairs', () => {
    const board = new MemoryBoard({ size: 4, kittenImages: generateKittens(8) });
    expect(board.kittenImageId.sort()).toEqual([0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7]);
  });
});

describe('getNumberOfCardsFacingUp()', () => {
  it('should know number of cards facing up', () => {
    // given
    const board = new MemoryBoard({ size: 4, kittenImages: generateKittens(8) });
    // when
    board.handleClicked(5);

    // then
    const actual = board.getNumberOfCardsFacingUp();
    expect(actual).toBe(1);
  });
});
describe('getCurrentCardIndexFacingUp()', () => {
  it('should display THE card facing up', () => {
    // given
    const board = new MemoryBoard({ size: 4, kittenImages: generateKittens(8) });
    // when
    board.handleClicked(5);

    const actual = board.getCurrentCardIndexFacingUp();
    expect(actual).toBe(5);
  });
});

// TODO: Implement these failing tests!

describe('getKittenImage(id)', () => {
  it('should return kitten with given id', () => {
	   // given
    const id = 0;
    const board = new MemoryBoard({ size: 4, kittenImages: generateKittens(8) });
    // when
    const theKitten = null;
    // then
    expect(theKitten).toEqual(kittens[id]);
  });
});

describe('getCardState(cardId)', () => {
  const unflippedCard = 0;
  const flippedCard = 1;

  it('should return an unflipped card when the board is created', () => {
    // given
    // const board = new MemoryBoard(...);
    // when
    // const actual = board.getCardState(...);
    // then
    // expect(actual).toEqual(unflippedCard);
    expect(true).toEqual(false);
  });

  it('should return a flipped card when the card has been clicked', () => {
    // given
    const cardId = 4;
    // const board = ...
    // when
    // clicking on card with given cardId...
    // then
    // expect(actual).toEqual(flippedCard);
    expect(true).toEqual(false);
  });
});

describe('getShuffledTiles(size, images)', () => {
  it('shuffles the kittens array', () => {
    // given
    // const kittens = generateKittens(...);
    // when
    // shuffling...
    // then
    // expect(...).not.toEqual(kittens);
    expect(true).not.toEqual(true);
  });

  it('throws an error if board is too large for the kittens array', () => {
    // given
    const hugeSizeBoard = 16;
    const justAFewKittens = 4;
    // const kittens = ...
    // when
    // try {
    // 	shuffling
    // } catch (e) {
    // 	//then
    // 	expect(e.message).toEqual(...);
    // }
    expect(true).toEqual(false);
  });

  it('throws an error when trying to create a board of uneaven size', () => {
    // given
    const size = 5;
    // when
    // You got this now, right!? :)
    // then
    expect(true).toEqual(false);
  });
});

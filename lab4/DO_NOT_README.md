# FACIT LAB 4

## MemoryBoard.test.js

```javascript
describe("getKittenImage(id)", () => {
  it("should return kitten with given id", () => {
   	  // given
      const kittenId = 0;
      // when
      const actual = board.getKittenImage(kittenId);
      // then
      const expected = kittens[kittenId];
      expect(actual).toEqual(expected);
  });
});

describe("getCardState(cardId)", () => {

  it("should return an unflipped card when the board is created", () => {
    // given
    const firstCard = 0;
    // when
    const actual = board.getCardState(firstCard);
    // then
    const expected = CARD_DICTIONARY.FACE_DOWN;
    expect(actual).toEqual(expected);
  });

  it("should return a flipped card when the card has been clicked", () => {
    // given
    const firstCard = 0;
    //when
    // clicking on card with given cardId...
    board.handleClicked(firstCard);
    const actual = board.getCardState(firstCard);
    // then
    const expected = CARD_DICTIONARY.FACE_UP;
    expect(actual).toEqual(expected);
  });
});

describe("getShuffledTiles(size, images)", () => {

  it("throws an error if board is too large for the kittens array", () => {
    const hugeSizeBoard = 40;
      try {
        board.getShuffledTiles(hugeSizeBoard);
      } catch (e: any) {
        expect(e.message).toEqual(
          "insufficient kittens provided to make more cats"
        );
      }
  });

  it("throws an error when trying to create a board of uneaven size", () => {
    const size = 5;
      try {
        const shuffledKittens = board.getShuffledTiles(size);
      } catch (e: any) {
        expect(e.message).toEqual(
          "size cannot be uneven numbers, would make up for some really terrible pairing, l0l"
        );
      }
  });
});
```

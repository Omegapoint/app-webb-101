## FACIT LAB 3

## GameManager.ts

```javascript
export const notifyAction = (action: NotifyAction) => {
  scoreState.numberOfTries++;
  domManager.setNumberOfTries(scoreState.numberOfTries);

  switch (action.type) {
    case GAME_STATE.SOLVED: {
      scoreState.numberOfTilesMatched++;
      domManager.setNumberOfTilesMatched(scoreState.numberOfTilesMatched);
      break;
    }
    case GAME_STATE.GAME_STARTED: {
      startGameTimer();
      break;
    }
    case GAME_STATE.GAME_OVER: {
      domManager.showGameOver(scoreState);
      clearInterval(gameTimer);
      break;
    }
  }
};
```

## index.html

```html
<div class="row" id="game-over-panel">
  <div class="col-sm-12">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          <span class="glyphicon glyphicon-road"></span>&nbsp; GAME OVER!
        </h3>
      </div>

      <div class="panel-body">
        <div class="row">
          <!--TODO: CREATE NEW HTML ELEMENTS FOR GAME SCORE & TIMER STUFF HERE-->
          <div id="game-time"></div>
          <div id="number-of-tries"></div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## DomManager.ts

```javascript
showGameOver(scoreState: SCORE_STATE) {
    const { numberOfTries, timeElapsed } = scoreState;

    const gameOverEl = document.getElementById("game-over-panel");
    const gameTimeEl = document.getElementById("game-time");
    const noOfTriesEl = document.getElementById("no-of-tries");

    if (gameOverEl && gameTimeEl && noOfTriesEl) {
      gameOverEl.style.display = "block";
      gameTimeEl.textContent = `Time elapced: ${timeElapsed / 1000} seconds`;
      noOfTriesEl.textContent = `Number of tries: ${numberOfTries}`;
    }
}
```

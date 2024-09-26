# FACIT LAB 2

## Assignment 7

```javascript
const performSearch = (searchTerm = "") => {};
```

## Assignment 10

```javascript
import { getGiphyKittens } from "./api";
```

## Assignment 11

```javascript
const performSearch = (searchTerm = "") => {
  return getGiphyKittens(searchTerm);
};
```

## Assignment 13

```javascript
export const getGiphyImages = (searchTerm = "") => {
  const URL_TO_FETCH_WITH = `${GIPHY_BASE_SEARCH_URL}?q=${searchTerm}&limit=4&api_key=${GIPHY_API_KEY}`;

  return fetch(URL_TO_FETCH_WITH)
    .then((result) => result.json())
    .then((data) => convertGiphyResultToImageArray(data))
    .catch((error) =>
      console.error(`Error from fetching giphy images: ${error}`)
    );
};

function performSearch(searchTerm = "") {
  return getGiphyImages(searchTerm);
}
```

## Assignemnt 14

```javascript
import { removeCookie } from "./cookie.helpers";
...
...
removeCookie("emoji-cookie");
```

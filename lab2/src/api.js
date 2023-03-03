/**
 *  Read more about giphy API here: https://github.com/Giphy/GiphyAPI
 *  TLDR: An API-key is a unique identifier that lets the API know who is asking. Some API's require them, some don't.
 */

/**
 * This is a mapper function that takes the Giphy result and reformats it
 * to something more akin to what we want. Do not touch, but read. :D
 *
 * @param giphySearchResult
 * @returns Array of Strings (the image urls)
 */
const convertGiphyResultToImageArray = (giphySearchResult = {}) => {
  const { data } = giphySearchResult;
  return data.map((img) => img.images.original.url).slice(0, 4);
};

/**
 * Giphy API credentials, do NOT edit.
 */
const GIPHY_API_KEY = "JA9aE2aAPeQpGOphB5C2VlSpO2E0dtWM";
const GIPHY_BASE_SEARCH_URL = "http://api.giphy.com/v1/gifs/search";

/**
 * Giphy specific search specificly designed for finding kitten gifs
 * @param term The search term. E.g 'puppy'
 * @returns {Promise}
 */
export const getGiphyKittens = (searchTerm = "") => {
  const URL_TO_FETCH_WITH = `${GIPHY_BASE_SEARCH_URL}?q=kitten&limit=4&api_key=${GIPHY_API_KEY}`;

  if (searchTerm === "kitten" || searchTerm === "kittens") {
    return fetch(URL_TO_FETCH_WITH)
      .then((result) => result.json())
      .then((data) => convertGiphyResultToImageArray(data))
      .catch((error) =>
        console.error(`Error from fetching giphy images: ${error}`)
      );
  } else {
    return new Promise((resolve, reject) =>
      reject(new Error(`A ${searchTerm} is not a kitten, stupid! 🤦‍♂️`))
    );
  }
};

/**
 * Giphy specific search.
 * This is the function we want you to implement.
 * @param term The search term. E.g 'puppy'
 * @returns {Promise}
 */
export const getGiphyImages = (searchTerm = "") => {};

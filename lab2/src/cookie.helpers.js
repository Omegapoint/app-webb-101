export const setCookie = (name, value, days) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
};

export const getCookie = (name) => {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.indexOf(`${name}=`) === 0) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
};

export const removeCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export const displayEmojiIfCookieSet = () => {
  const emojiContainer = document.getElementById("emoji-container");
  const cookie = getCookie("emoji-cookie");

  if (cookie) {
    emojiContainer.textContent = cookie; // Display the emoji in the container
  }
};

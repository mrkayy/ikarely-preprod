const WebStorage = {
  save: (key, value) => {
    localStorage.setItem(key, value);
  },
  get: (key) => {
    if (localStorage.getItem(key) === null) {
      //...
      return false;
    }
    return localStorage.getItem(key);
  },
  clear: () => {
    localStorage.clear();
  },
  remove: (key) => {
    localStorage.removeItem(key);
  },
  logout: () => {
    localStorage.removeItem("user_token");
    window.location.href = "/signin";
  },
};
module.exports = WebStorage;

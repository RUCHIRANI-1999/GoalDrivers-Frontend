export const baseUrl = "http://localhost:3002/api";

export const request = (url, init) => {
  return fetch(`${baseUrl}${url}`, init);
};

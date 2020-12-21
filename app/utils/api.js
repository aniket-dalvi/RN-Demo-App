export const getPost = "https://jsonplaceholder.typicode.com/posts";
export const getUser = "https://jsonplaceholder.typicode.com/users/"

function fetchAPI(url, data) {
  return fetch(url)
    .then((response) => response.json());
}

export default fetchAPI;
export function getData(path) {
  return fetch(`https://jsonplaceholder.typicode.com/${path}`).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

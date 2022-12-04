export function getData() {
  return fetch(`https://jsonplaceholder.typicode.com/users`).then((resp) => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

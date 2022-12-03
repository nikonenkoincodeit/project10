export function creatUserList(users = []) {
  return users
    .map((user) => {
      return `
    <tr data-user= ${user.id}>
              <th scope="col">${user.id}</th>
              <th scope="col">${user.name}</th>
              <th scope="col">${user.username}</th>
              <th scope="col">${user.email}</th>
              <th scope="col">${user.website}</th>
            </tr>
    `;
    })
    .join("");
}

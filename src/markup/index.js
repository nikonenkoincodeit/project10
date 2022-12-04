export function createUsersTable ({website, email, id, name, username}) {
  return ` <tr class="tr-row" data-user=${id}>
            <th scope="col">${id}</th>
            <th scope="col">${name}</th>
            <th scope="col">${username}</th>
            <th scope="col">${email}</th>
            <th scope="col">${website}</th>
          </tr>`
}
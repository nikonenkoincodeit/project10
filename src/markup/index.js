export function createUsersTable({ website, email, id, name, username }) {
  return ` <tr class="tr-row" data-user=${id}>
            <th scope="col">${id}</th>
            <th scope="col">${name}</th>
            <th scope="col">${username}</th>
            <th scope="col">${email}</th>
            <th scope="col">${website}</th>
          </tr>`;
}

export function createUserTable({
  website,
  email,
  id,
  name,
  username,
  company,
  address,
  phone,
}) {
  return `<tr data-userid='${id}'>
  <th scope="row">1</th>
  <td>${name}</td>
  <td>${username}</td>
  <td>${email}</td>
  <td>${address.city}</td>
  <td>${phone}</td>
  <td>${website} </td>
  <td>${company.name}</td>
</tr>`;
}

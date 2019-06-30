/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
const getUsers = url => fetch(url);

export async function foo(url) {
  try {
    const data = await getUsers(url);
    const jsonData = await data.json();
    console.log(jsonData.length ? jsonData[0] : 'Пусто');
  } catch (err) {
    console.log(err.message);
  }
}

/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
const asyncBar = async () => 'Some string!';

export async function foo() {
  console.log(await asyncBar());
}

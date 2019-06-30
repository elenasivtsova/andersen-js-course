/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */

function getResolvedPromise(value) {
  return Promise.resolve(value);
}

const task7 = async () => {
  const res1 = await getResolvedPromise(2),
    res2 = await getResolvedPromise(3),
    res3 = await getResolvedPromise(7);
  console.log(
    res1 * (res2 + res3)
  );
};
export { task7 };

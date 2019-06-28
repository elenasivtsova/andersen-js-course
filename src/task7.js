/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */

const task7 = () => {
  function getResolvedPromise(value) {
    return Promise.resolve(value);
  }

  (async () => {
    console.log(
      (await getResolvedPromise(2)) *
        ((await getResolvedPromise(3)) + (await getResolvedPromise(7)))
    );
  })();
};
export { task7 };

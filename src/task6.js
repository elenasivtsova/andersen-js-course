/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
const task6 = () => {
  function getResolvedPromise(value) {
    return Promise.resolve(value);
  }

  getResolvedPromise(500)
    .then(value => {
      if (value > 300) {
        throw new Error('Ошибка');
      }
    })
    .catch(err => {
      console.log(err.message);
    })
    .finally(() => {
      console.log('This is Finally!!!');
    });
};

export { task6 };

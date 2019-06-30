import request from './request.helper';

/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
const task5 = () => {
  (async () => {
    const urls = [
      'https://www.json-generator.com/api/json/get/cevhxOsZnS',
      'https://www.json-generator.com/api/json/get/cevhxOsZnS',
      'https://www.json-generator.com/api/json/get/cfDZdmxnDm',
      'https://www.json-generator.com/api/json/get/cfkrfOjrfS',
      'https://www.json-generator.com/api/json/get/cfkrfOjrfS',
    ];
    const res = [];
    for (let i = 0; i < urls.length; i++) {
      res.push(await request(urls[i]));
    }
    console.log(res);
  })();
};

const task5_1 = () => {
  const request = url => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          response
            .json()
            .then(resolve)
            .catch(reject);
        })
        .catch(reject);
    });
  };

  Promise.all([
    request('https://www.json-generator.com/api/json/get/cevhxOsZnS'),
    request('https://www.json-generator.com/api/json/get/cevhxOsZnS'),
    request('https://www.json-generator.com/api/json/get/cfDZdmxnDm'),
    request('https://www.json-generator.com/api/json/get/cfkrfOjrfS'),
    request('https://www.json-generator.com/api/json/get/cfkrfOjrfS'),
  ]).then(data => {
    console.log(data);
  });
};

export { task5, task5_1 };

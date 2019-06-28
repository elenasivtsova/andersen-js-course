const task4 = () => {
  const request = url => {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line no-undef
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

  request('https://www.json-generator.com/api/json/get/cfQCylRjuG').then(data => {
    if (data.getUsersData) {
      request('https://www.json-generator.com/api/json/get/cfVGucaXPC').then(datatwo => {
        // eslint-disable-next-line no-console
        console.log(datatwo);
      });
    }
  });
};

// eslint-disable-next-line import/prefer-default-export
export { task4 };

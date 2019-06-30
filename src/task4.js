import request from './request.helper';

const task4 = () => {
  request('https://www.json-generator.com/api/json/get/cfQCylRjuG').then(({ getUsersData }) => {
    if (getUsersData) {
      request('https://www.json-generator.com/api/json/get/cfVGucaXPC').then(datatwo => {
        // eslint-disable-next-line no-console
        console.log(datatwo);
      });
    }
  });
};

// eslint-disable-next-line import/prefer-default-export
export { task4 };

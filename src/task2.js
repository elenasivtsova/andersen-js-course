/* eslint-disable no-console */
export function parseJSON(jsonStr, succCb, failCb) {
  try {
    const result = JSON.parse(jsonStr);
    succCb(result);
  } catch (error) {
    failCb(error);
  }
}

export function successCb(result) {
  console.log(`Success parse!`);
  console.log(result);
}

export function failureCb(error) {
  console.log(`Failure parse!`);
  console.log(error);
}

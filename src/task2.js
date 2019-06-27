export function parseJSON(jsonStr, succCb, failCb) {
  try {
    const result = JSON.parse(jsonStr);
    succCb(result);
  } catch (error) {
    failCb(error);
  }
}

export function successCb(result) {
  // eslint-disable-next-line no-console
  console.log(`Success parse!`);
  // eslint-disable-next-line no-console
  console.log(result);
}

export function failureCb(error) {
  // eslint-disable-next-line no-console
  console.log(`Failure parse!`);
  // eslint-disable-next-line no-console
  console.log(error);
}

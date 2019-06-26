export function parseJSON(jsonStr, succCb, failCb) {
    try {
      const result = JSON.parse(jsonStr);
    succCb(result);
    } catch (err) {
      failCb(err);
    }
  }
  
export function successCb(result) {
  console.log(`Success parse!`);
  console.log(result);
}

export function failureCb(err) {
  console.log(`Failure parse!`);
  console.log(err);
}


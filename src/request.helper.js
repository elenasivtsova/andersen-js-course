const request = url => fetch(url).then(frstResponse => frstResponse.json());

export default request;
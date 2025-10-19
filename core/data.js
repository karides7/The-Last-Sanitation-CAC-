const data = {
  exp: 0.0,
  microplastics: 0.0,
};

export function getData() {
  for (let key of Object.keys(data)) {
    if (localStorage.getItem(key) != null) {
      console.log(`data found (${key})`);
      data[key] = localStorage.getItem(key);
    } else {
      console.log(`data not found (${key})`);
      localStorage.setItem(key, `0`);
    }
  }
}

console.log(data);

const API_URL = "https://api.github.com/users/SuhaniKhatri";

async function handlePromise() {
  const data = await fetch(API_URL);

  const jsonValue = await data.json();

  console.log(jsonValue);

  //fetch() => Response.json() => json value
  //fetch().then(res => res.json).then(res => console.log(res))
}

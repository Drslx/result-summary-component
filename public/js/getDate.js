/* Url API */
const url = "http://localhost:3001/summarys";

async function getDate() {
  const res = await fetch(url);
  const data = await res.json();

  return data;
}

getDate();

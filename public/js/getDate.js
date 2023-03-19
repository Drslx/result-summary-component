/* Url API */
const url = "http://localhost:3001/summarys";

/* Funcao assincrona para pegar dados */
async function getDate() {
  const res = await fetch(url);
  const data = await res.json();

  const attr = document.querySelector('')
  //console.log(data);
  return console.log(data);
}

/* Chamada da funcao */
getDate();


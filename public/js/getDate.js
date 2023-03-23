/* Url API */
const url = "http://localhost:3001/summarys";

/* Funcao assincrona para pegar dados */
async function getDate() {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
/* Chamada da funcao */
getDate();


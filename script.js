chamarApi();

async function chamarApi() {
  let url = `https://rickandmortyapi.com/api/episode/3`; 

    let results = await fetch(url);
    let json = await results.json();
    console.log(json);  
}

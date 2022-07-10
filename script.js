chamarApi();

async function chamarApi() {
  let url = `https://rickandmortyapi.com/api/character?name=bird`; 

    let results = await fetch(url);
    let json = await results.json();
    console.log(json);  
}

document.querySelector('#buscar').addEventListener("click", (event)=> {
  event.preventDefault();

  var nomeApi = document.querySelector('#entradaDados').value; 
  console.log(nomeApi);

})


chamarApi();
async function chamarApi() {
  let url = `https://rickandmortyapi.com/api/character/1`; 

    let results = await fetch(url);
    let json = await results.json();
    
    json.map((item,index)=> {
      let pizzaItem = document.querySelector('.models .container').cloneNode(true);


    })

}

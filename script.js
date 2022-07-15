
document.querySelector('#buscar').addEventListener("click", (event)=> {
  event.preventDefault();
  var nomeApi = document.querySelector('#entradaDados').value; 
  console.log(nomeApi);
  chamarApi(nomeApi);
  disable();
})

async function chamarApi(nome) {
  let url = `https://rickandmortyapi.com/api/character/?name=${nome}`; 

    let results = await fetch(url);
    let json = await results.json();
    

    json.results.map((item,index)=>{
      //clonando a estrutura modelo dos personagens
      charItem = document.querySelector('.model .container').cloneNode(true);
      
      //modificando os elementos dentro da estrutura de acordo com o objeto recebido
      charItem.querySelector('.a1 span').innerHTML = item.name;
      charItem.querySelector('.a2 span').innerHTML = item.status;
      if(item.status === 'alive'){
        charItem.querySelector('.a2 .status-alive').style.backgroundColor = 'green';
      } else if(item.status === 'Dead') {
        charItem.querySelector('.a2 .status-alive').style.backgroundColor= 'red';
      } else if(item.status === 'unknown') {
        charItem.querySelector('.a2 .status-alive').style.backgroundColor = 'grey';
      }

      charItem.querySelector('img').src = item.image;
      charItem.querySelector('.gender span').innerHTML = item.gender;
      charItem.querySelector('.especie span').innerHTML = item.species;
      charItem.querySelector('.ultimo-local span').innerHTML = item.location.name;
      charItem.querySelector('.local-origem span').innerHTML = item.origin.name;

      //exibindo na tela a estrutura clonada
      document.querySelector('.charArea').append(charItem);

      
    });
    
} 

document.querySelector('.reload').addEventListener("click",()=>{reset()});

function disable() {
  document.querySelector('#buscar').disabled = true;
  document.querySelector('#buscar').style.backgroundColor = "#3d3d3d";
  document.querySelector('#buscar').style.cursor = "default";
  document.querySelector('.reload').style.display = 'block';
  document.querySelector('.reload').style.opacity = '1';
  document.querySelector('#entradaDados').disabled = true;
}
function reset() {
  location.reload();
}
const key = 'e2449a59'

const form = document.getElementById("form");


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const title = formData.get('title');
  const year = formData.get('year');
  const contentType = document.querySelector("#selector-type");
  const optionType = contentType.children[contentType.selectedIndex];
  let textOption = optionType.textContent;

  if (textOption === "Filme") {
    textOption = "Movie";
  }
  
  let url = `https://www.omdbapi.com/?s=${title}&apikey=${key}`;
  
   if(year){
    url +=`&y=${year}`;
   }
   if(textOption === "Filme" ||textOption === "Movie" ){
    url +=`&type=${textOption}`
   }


      fetch(url)
        .then(result => result.json())
        .then(json => dataList(json))
        .catch(error => console.error(error))
        console.log(url.search)
})

        const dataList = (json) => {
          const cardGroup = document.querySelector(".card-deck");
          cardGroup.innerHTML = "";

          if(json.Response === "False"){
            alert(`Esta busca não retornou nenhum resultado, tente novamente com outro titulo.`)
          }

          json.Search.forEach((element) => {
            if(element.Poster === "N/A"){
             return;
            }
          
            let itensCard = document.createElement('div');
            itensCard.classList.add('card');

            itensCard.innerHTML = `<img class="card-img-top" src="${element.Poster}" />
             <div class="card-body"><h5 class="card-title">${element.Title}</h5>
             <p class="card-text">Lançado em: ${element.Year}</p>
             </div>`


             cardGroup.appendChild(itensCard);             
          });
        }

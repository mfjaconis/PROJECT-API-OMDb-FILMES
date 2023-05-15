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

      fetch(`https://www.omdbapi.com/?s=${title}&apikey=${key}`)
        .then(result => result.json())
        .then(json => dataList(json))
})

        const dataList = (json) => {
          const cardGroup = document.querySelector(".card-deck");
          cardGroup.innerHTML = "";

          if(json.Response === "False"){
            alert(`Esta busca não retornou nenhum resultado, tente novamente com outro titulo.`)
          }

          json.Search.forEach(element => {
          
            let itens = document.createElement('div');
            itens.classList.add('card');

            itens.innerHTML = `<img class="card-img-top" src="${element.Poster}" />
             <div class="card-body"><h5 class="card-title">${element.Title}</h5>
             <p class="card-text">${element.Year}</p>
             <a href="#" class="btn btn-primary">Visitar</a>
             </div>`

             cardGroup.appendChild(itens);

             
          });
        }

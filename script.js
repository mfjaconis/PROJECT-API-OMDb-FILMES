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

  if(textOption === "Filme"){
    textOption = "Movie";
  } 

  fetch(`https://www.omdbapi.com/?&=Batman&apikey=${key}&t=${title}&y=${year}&type=${textOption}&lang=pt-br`)
    .then(result => result.json())
    .then(json => console.log(json))
    

  console.log("Título: " + title + "\nAno: " + year + " \nTipo de conteúdo: " + textOption);
});


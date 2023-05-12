const key = 'e2449a59'

const form = document.getElementById("form");


form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const title = formData.get('title');
  const year = formData.get('year');
  const contentType = document.querySelector("#selector-type");
  const optionType = contentType.children[contentType.selectedIndex];
  const textOption = optionType.textContent;


  console.log("Título: " + title + "\nAno: " + year +" \nTipo de conteúdo: " + textOption);
  });

  
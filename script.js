const key = 'e2449a59'


  function sendForm() {
    const title = document.getElementById("title-input").value;
    const year = document.getElementById("period").value;
    const contentType = document.querySelector("#selector-type");
    const optionType = contentType.children[contentType.selectedIndex];
    const textOption = optionType.textContent;



    alert("Título: " + title + "\nAno: " + year +" \nTipo de conteúdo: " + textOption);
  }
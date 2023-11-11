function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/eubp1.png")
    img.setAttribute("alt", "Foto em branco e preto de Felipe Góes sorrindo")
  } else {
    //se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/eu1.png")
    img.setAttribute("alt", "Foto colorida de Felipe Góes sorrindo")
  }
}

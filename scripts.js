let imagem = document.querySelector(".starbucks")
let fundo = document.querySelector(".circulo")

function trocaImagem(img) {
    imagem.src = img;
}

function trocaFundo(cor) {
    fundo.style.background = cor
}
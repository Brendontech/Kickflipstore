let contador = 0;
let fotoAtual = 0;
const imagem = ["camista 1.1.jpeg", "camista 1.jpeg", "short1.png", "9k17f4wh.png", "tzjeyb88.png"];

function trocarFoto() {
    const bloco = document.getElementById("blocoImagem");
    const novaFoto = imagem[fotoAtual % imagem.length];

    bloco.innerHTML = `
                <img src="assets/imagem/${novaFoto}" alt="Imagem ${fotoAtual + 1}">
                <button onclick="adicionarAoCarrinho('${novaFoto}')" class="BotaoComprar">Comprar</button>
            `;

    fotoAtual++;
}

function voltarFoto() {
    const bloco = document.getElementById("blocoImagem");

    // Garante que fotoAtual nunca seja menor que 0
    fotoAtual = (fotoAtual - 1 + imagem.length) % imagem.length;

    const novaFoto = imagem[fotoAtual];
    bloco.innerHTML = `
                <img src="assets/imagem/${novaFoto}" alt="Imagem ${fotoAtual + 1}">
                <button onclick="adicionarAoCarrinho('${novaFoto}')" class="BotaoComprar">Comprar</button>
            `;
}

function adicionarAoCarrinho(imagem) {
    contador++;
    document.getElementById('contador').innerText = contador;

    const carrinho = document.getElementById('itens-carrinho');
    const imagemElemento = document.createElement('img');
    imagemElemento.src = `/assets/imagem/${imagem}`;
    carrinho.appendChild(imagemElemento);
}
function adicionarAoCarrinho(imagem) {
    contador++;
    document.getElementById('contador').innerText = contador;

    const carrinho = document.getElementById('itens-carrinho');
    const imagemElemento = document.createElement('img');
    imagemElemento.src = `/assets/imagem/${imagem}`;
    carrinho.appendChild(imagemElemento);
}


$('input#first-name,input#email,#last-name').bind('focus blur', function () {
    $(this).toggleClass('input_colorido');
});

const textoAnimado = document.getElementById('textoAnimado');
const windowHeight = window.innerHeight;

textoAnimado.addEventListener('animationiteration', () => {
    const rect = textoAnimado.getBoundingClientRect();

    if (rect.bottom > windowHeight) {
        textoAnimado.innerHTML += '<br>';
    }
});


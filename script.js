// Lista de frases de figuras da tecnologia
const frasesTech = [
    {
        texto: "A melhor maneira de prever o futuro é inventá-lo.",
        autor: "Alan Kay (Pioneiro da computação gráfica)"
    },
    {
        texto: "Falar é fácil. Mostre-me o código.",
        autor: "Linus Torvalds (Criador do Linux)"
    },
    {
        texto: "Programadores e artistas são os únicos profissionais que têm como hobby a própria profissão.",
        autor: "Rafael Pinto"
    },
    {
        texto: "A simplicidade é o último grau de sofisticação.",
        autor: "Leonardo da Vinci (Adotado por Steve Jobs)"
    },
    {
        texto: "Não se preocupe se não funcionar certo da primeira vez. Se tudo desse certo, você não teria emprego.",
        autor: "Lei de Mosher da Engenharia de Software"
    },
    {
        texto: "O computador nasceu para resolver problemas que antes não existiam.",
        autor: "Bill Gates (Co-fundador da Microsoft)"
    },
    {
        texto: "Qualquer tolo consegue escrever código que um computador entende. Bons programadores escrevem código que humanos entendem.",
        autor: "Martin Fowler (Autor de 'Refatoração')"
    }
];

// Selecionando os elementos do HTML
const textoElemento = document.getElementById('texto-inspiracao');
const autorElemento = document.getElementById('autor-inspiracao');
const botao = document.getElementById('btn-inspirar');

// Função para exibir uma frase aleatória
function mostrarInspiracao() {
    // Escolhe um índice aleatório da lista
    const indice = Math.floor(Math.random() * frasesTech.length);
    const fraseEscolhida = frasesTech[indice];

    // Atualiza o texto na tela
    textoElemento.textContent = `"${fraseEscolhida.texto}"`;
    autorElemento.textContent = `- ${fraseEscolhida.autor}`;
}

// Adiciona o evento de clique ao botão
botao.addEventListener('click', mostrarInspiracao);
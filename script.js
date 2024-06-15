const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Para um encontro casual durante o dia, o que você prefere vestir?",
        alternativas: [
            {
                texto: "Um vestido leve e floral, sandálias baixas e um chapéu de palha para um estilo romântico e descontraído.",
                afirmacao: "Escolhi um vestido leve e floral, combinado com sandálias baixas e um chapéu de palha. Estava pronta para um passeio agradável pelo parque, aproveitando o sol da tarde."
            },
            {
                texto: "Uma blusa solta, jeans skinny e sapatilhas, garantindo conforto e um toque moderno para um passeio relaxante.",
                afirmacao: "Optei por uma blusa solta, jeans skinny e sapatilhas confortáveis. Estava animado para encontrar amigos em um café próximo, onde poderia relaxar e aproveitar a tarde."
            }
        ]
    },
    {
        enunciado: "Qual é a melhor escolha para um evento formal à noite?",
        alternativas: [
            {
                texto: "Um vestido longo de gala, com detalhes em pedraria e um corte que valoriza a silhueta para uma presença deslumbrante.",
                afirmacao: "Escolhi um vestido longo de gala, com detalhes em pedraria, para o baile de gala. Sentia-me elegante e confiante, pronta para uma noite memorável."
            },
            {
                texto: "Um conjunto de calça de alfaiataria e blusa de seda, acompanhado por um blazer estruturado, transmitindo elegância e sofisticação discreta.",
                afirmacao: "Optei por um conjunto de calça de alfaiataria, blusa de seda e um blazer estruturado. Queria garantir uma aparência sofisticada e profissional durante a premiação da indústria."
            }
        ]
    },
    {
        enunciado: "Durante uma viagem de inverno, como você prefere se vestir para explorar a cidade?",
        alternativas: [
            {
                texto: "Um casaco de lã longo, cachecol grosso e botas de cano alto para enfrentar o frio com estilo e conforto.",
                afirmacao: "Escolhi um casaco de lã longo, um cachecol grosso e botas de cano alto para explorar a cidade durante a viagem de inverno. Estava preparado para as baixas temperaturas e ainda assim elegante."
            },
            {
                texto: " Um trench coat clássico, suéter de cashmere e botas ankle, combinando elegância urbana com proteção contra o frio.",
                afirmacao: "Optei por um trench coat clássico, um suéter de cashmere e botas ankle para minha viagem de inverno. Queria um visual que combinasse estilo urbano com conforto térmico enquanto explorava a arquitetura histórica da cidade."
            }
        ]
    },
    {
        enunciado: "Para um dia de trabalho em um ambiente criativo, qual seria sua escolha?",
        alternativas: [
            {
                texto: "Uma saia lápis estampada, blusa de seda e um blazer colorido para um look profissional com um toque de personalidade.",
                afirmacao: "Escolhi uma saia lápis estampada, blusa de seda e um blazer colorido para meu dia de trabalho em uma agência de publicidade. Queria um visual que refletisse minha criatividade e profissionalismo ao mesmo tempo."
            },
            {
                texto: "Um macacão de tecido leve, combinado com um cardigã de tricô e sapatos oxford, proporcionando conforto sem perder o estilo.",
                afirmacao: "Optei por um macacão de tecido leve, um cardigã de tricô e sapatos oxford para meu dia de trabalho em uma startup de tecnologia. Valorizei o conforto e a praticidade sem deixar de lado o estilo casual e moderno."
            }
        ]
    },
    {
        enunciado: "Em uma festa à beira da piscina, como você prefere se vestir?",
        alternativas: [
            {
                texto: "Um maiô elegante, saída de praia esvoaçante e óculos de sol glamorosos para um visual sofisticado à beira da água.",
                afirmacao: "Escolhi um maiô elegante, uma saída de praia esvoaçante e óculos de sol glamorosos para a festa à beira da piscina. Queria me destacar com um visual sofisticado e ao mesmo tempo adequado para o ambiente descontraído."
            },
            {
                texto: "Um biquíni colorido, canga estampada e chapéu de abas largas para um look descontraído e cheio de estilo sob o sol.",
                afirmacao: "Optei por um biquíni colorido, uma canga estampada e um chapéu de abas largas para a festa à beira da piscina. Queria um visual descontraído e vibrante, combinando com o clima animado da ocasião."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Apos suas decisões de look de acodo com suas escolhas voê se sentiu...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

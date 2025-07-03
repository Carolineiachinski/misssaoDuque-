const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    { 
        enunciado: "qual a maior velocidade que uma moto de motocross pode alcançar?",
        alternativas: [
            {
                texto: "A maior velocidade que uma moto de motocross pode alcançar é entre 120km/h a 130km/h, mas com alterações pode aumentar essa velocidade máxima ",
                afirmação: "Resposta correta",
                pontos:1
            },

            {
                texto:"a maior velocidade alcançada é entre 200km/h a 250km/h",
                afirmação:"Resposta errada", 
                pontos:0 
            }
        ]
    },

 { 
        enunciado: "qual é o maior valor que uma moto pode chegar no Brasil?",
        alternativas: [
            {
                texto: " o valor pode chegar até 85.000 dependendo do modelo ",
                afirmação: "Resposta correta",
                pontos:1
            },

            {
                texto:" o maoior valor pode chegar até 8.000.000,00",
                afirmação:"Resposta errada", 
                pontos:0 
            }
        ]
    },

 { 
        enunciado: "qual é o maior campeão do mundo em campeonato de motocross?",
        alternativas: [
            {
                texto: " o maior campeão mundial de campeonato de motocross é o piloto Stefan Everts ",
                afirmação: "Resposta correta",
                pontos:1
            },

            {
                texto:" o maoior campeão é o piloto thiago Reis ",
                afirmação:"Resposta errada", 
                pontos:0 
            }
        ]
    },

 { 
        enunciado: "?",
        alternativas: [
            {
                texto: " o valor pode chegar até 85.000 dependendo do modelo ",
                afirmação: "Resposta correta",
                pontos:1
            },

            {
                texto:" o maoior valor pode chegar até 8.000.000,00",
                afirmação:"Resposta errada", 
                pontos:0 
            }
        ]
    },
]
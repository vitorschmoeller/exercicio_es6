const arrayAlunosObject = [
    {
        nome: "Wesley",
        nota: 8
    },

    {
        nome: "hellen",
        nota: 0
    },

    {
        nome: "guiga",
        nota: 7
    },

    {
        nome: "wagner",
        nota: -1
    }
]

function mostraNotasAcimaDeSeis(alunos){
    for(let i = 0; i< alunos.length;i++){
        const aluno = alunos[i];
        if(aluno.nota < 6){
            console.log(`não houve retorno para esse aluno: ${aluno.nome} `)
        }else{
            console.log(`O aluno ${aluno.nome} passou com nota ${aluno.nota}`)
        }
    }
    

}
mostraNotasAcimaDeSeis(arrayAlunosObject);


// const arrayPokemon = [
//     {
//         nome: "Pikachu",
//         tipo: "eletrico",
//         hp: 100
//     },
//     {
//         nome: "charizard",
//         tipo: "fogo",
//         hp: 500
//     },
//     {
//         nome: "Squirtle",
//         tipo: "água",
//         hp: 300
//     },
//     {
//         nome: "Arcanine",
//         tipo: "fogo",
//         hp: 550
//     }
// ]

// function soMostraTipoFogo(pokemonAtual){
//     for(let i =0; i < pokemonAtual.length;i++){
//         const pokemonTipo = pokemonAtual[i].tipo
//         if(pokemonTipo === "fogo"){
//             console.log(pokemonAtual[i]);
//         }
//     }
// }

// soMostraTipoFogo(arrayPokemon);
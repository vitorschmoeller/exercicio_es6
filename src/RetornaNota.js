class Aluno {
    
    constructor(nomeAluno,notaAluno){
        this.nome = nomeAluno,
        this.nota = notaAluno
    }

    perdeuPontos() {
        this.nota -=1
    }

    retornaNotaAcimaDaMedia(){
        if(this.nota > 10 || this.nota < 0){
            console.log("Nota inválida");
        }else {
            if(this.nota >= 6){
                console.log(`Passou com nota ${this.nota}`);
            }else {
                console.log("Não houve retorno da nota")
            }
        }
    }
    

}

class AlunoMateria extends Aluno {
    constructor(materia) {
        super('Weslley', 8)
        this.materia = materia
    }
}
const aluno4 = new AlunoMateria("Portugues");
const aluno1 = new Aluno("Roberto", 11);
const aluno2 = new Aluno("Hellen", 0);
const aluno3 = new Aluno("Antonio", 10);
aluno2.nota = 1000
aluno1.retornaNotaAcimaDaMedia();
aluno2.retornaNotaAcimaDaMedia();
aluno3.retornaNotaAcimaDaMedia();
aluno4.perdeuPontos();
aluno4.retornaNotaAcimaDaMedia();

console.log(aluno4 instanceof Aluno);
console.log(aluno4);
console.log(aluno2);
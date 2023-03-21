// let jogador = {
//     nome: `Neymar`,
//     posicao: `Atacante`,
//     numGols:
// }

const jogador = function(nome, posicao, numGols) {
    Nome = nome,
    Posicao = posicao,
    Gols = numGols

    this.getNome = function() {
        return Nome
    }
    this.getPosicao = function() {
        return Posicao
    }
    this.getGols = function() {
        return Gols
    }
}

const Neymar = new jogador("Neymar", "Atacante", 400)
console.log(Neymar.getNome())

const Renato = new jogador("Renato Augusto", "Meio Campo", 80)
console.log(Renato.getNome())
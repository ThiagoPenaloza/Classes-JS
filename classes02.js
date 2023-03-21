class Jogador {
    constructor(nome, posicao, numGols) {
        this.nome = nome
        this.posicao = posicao
        this.numGols = numGols
    }
    golsMarcados() {
        console.log(`O ${this.nome} já marcou ${this.numGols} gols em sua carreira`)
    }
}

const Neymar = new Jogador('Neymar', 'Atacante', 400)
Neymar.golsMarcados()
const Pele = new Jogador('Pelé', 'Atacante', 1000)
Pele.golsMarcados()
const Rogerio = new Jogador('Rogério Ceni', 'Goleiro', 80)
Rogerio.golsMarcados()
const Alisson = new Jogador('Alisson', 'Goleiro', 10)
Alisson.golsMarcados()
const Taison = new Jogador('Taison', 'Meio Campo', 200)
Taison.golsMarcados()
const Ronaldinho = new Jogador('Ronaldinho Gaúcho', 'Atacante', 600)
Ronaldinho.golsMarcados()

console.log(typeof Jogador)
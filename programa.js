const readline = require('readline')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

let musicas = []

exibirMenu()

function exibirMenu() {
console.log(`
1. Adicionar música
2. Listar músicas
3. Editar músicas
4. Deletar música
5. Sair
`)

rl.question(`Escolha uma opção: `, (opcao) => {
switch (opcao) {
case '1':
adicionar()
break;
case '2':
listar()
break;
case '3':
editar()
break;
case '4':
deletar()
break;
case '5':
console.log("Okay, fechando o programa!")
rl.close()
break;
default:
console.log("Opção inválida")
exibirMenu()
}
})
}

function adicionar() {
rl.question('Digite o nome da música: ', (nome) => {
rl.question('Digite o nome do artista: '), (artista) => {
rl.question('Digite o genêro músical: '), (genero) => {
rl.question('Digite a produtora da música: '), (produtora) => {
rl.question('Digite o estilo da música: '), (estilo) => {
musicas.push({nome: nome, artista: artista, genero: genero, produtora: produtora, estilo: estilo})
console.log('Música cadastrada com sucesso!')
exibirMenu()
rl.close()
}
}
}
}
})
}

function listar() {
if (musicas.length > 0) {
for (let i = 0; i < musicas.length; i++) {
console.log(musicas[i])
exibirMenu()
}
} else {
console.log('Nenhuma música cadastrada.')
exibirMenu()
}
}
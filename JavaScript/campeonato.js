var input = require('readline-sync')

function cabecalho(){
  console.log(`------------------------------`)
  console.log(`    Campeonato de Futebol`)
  console.log(`------------------------------`)
}

function rodape(){
  console.log(`------------------------------`)
}

let quantidadeDeTimes = 0
let listaDeTimes = []

cabecalho()
quantidadeDeTimes = Number(input.question(`Informe a quantidade de times: `))
rodape()
for(let contador = 0; contador < quantidadeDeTimes; contador++){
  listaDeTimes[contador] = input.question(`Digite o ${contador + 1}º time: `)
}

console.clear()
cabecalho()
console.log(`Tabela Final`)
rodape()
for(let timeA = 0; timeA < quantidadeDeTimes; timeA++){
  for(let timeB = 0; timeB < quantidadeDeTimes; timeB++){
    if(timeA != timeB){
      console.log(`${listaDeTimes[timeA]} x ${listaDeTimes[timeB]}`)
    }
  }
}
rodape()
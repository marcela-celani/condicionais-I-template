// EXERCICIO - CONDICIONAIS

// condição simples
const velocidade = 90
console.log(`A sua velocidade é ${velocidade} km/h`)

if(velocidade > 80) {
    console.log(`Você está acima da velocidade máxima permitida. TEJE MULTADE!`)
}

// condição composta
const estaChovendo = true
if(estaChovendo === true) {
    console.log(`Ai minhas roupas tudo no varal!`)
} else {
    console.log(`Hummm, vitamina D, solzinho, bora rolezar`)
}

// PRÁTICA GUIADA - CONDICIONAIS

// exercício 1
const booleano1 = true
const booleano2 = true 

if(booleano1) {
    alert(`Booleano 1 é TRUE`)
} else {
    alert(`Booleano 1 é FALSE`)
}

// exercício 2
const booleano3 = true

if(booleano1 === booleano2) {
    alert(`Booleano 1 e Booleano 2 são IGUAIS!`)
} else if (booleano2 === booleano3) {
        alert(`Booleano 2 e Booleano 3 são IGUAIS!`)
} else if (booleano1 === booleano3) {
    alert(`Booleano 1 e Booleano 3 são IGUAIS!`)
} else {
    alert(`Não existem valores iguais!`)
} 

// exercício 3
const temOvo = true
const temFarinha = true
const temLeite = true
const temAcucar = false

if (!temOvo) {
    console.log(`OVO:`, temOvo)
} else if (!temFarinha) {
    console.log(`FARINHA:`, temFarinha)
} else if (!temLeite) {
    console.log(`LEITE:`, temLeite)
} else if (!temAcucar) {
    console.log(`AÇUCAR:`, temAcucar)
} else {
    console.log(`IHAAA vamos fazer bolinho de chuva`)
}

// exercício 4
function verificaVoto(idade) {
    if (idade < 16) {
        console.log(`Você NÃO pode votar!`)
    } else if (idade < 18 || idade >= 70) {
        console.log(`Você PODE votar! - facultativo`)
    } else if (idade >= 18) {
        console.log(`Você DEVE votar!`)
    } else {
        console.log(`Dado inválido`)
    }
}

const idade = Number(prompt(`Qual a sua idade?`))
verificaVoto(idade)

// exercício 5
const media = 3.5

if (media >= 5) {
    console.log(`Você foi aprovade!`)
} else if (media >= 3) {
    console.log(`Recuperação!`)
} else if (media < 3){
    console.log(`Estudante reprovade!`)
} else {
    console.log(`Dado inválido.`)
}

// exercicio 6
//entre 06 e 12: bom dia
//entre 12 e 18: boa tarde
//entre 18 e 24: boa noite
//entre 00 e 06: boa madrugada

const data = new Date
console.log(data)
const hora = data.getHours()
console.log(hora)

if (hora < 6) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else if (hora < 24) {
    console.log('Boa noite!')
} else {
    console.log('Não conheço essa hora!')
}
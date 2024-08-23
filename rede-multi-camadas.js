class Entrada {
	valorEntrada = 0;
	peso = 0;
}

const entradas_pesos = [
	{ entrada: -1, peso: 0 },
	{ entrada: 1, peso: -1 },
	{ entrada: 1, peso: 2 },
];

let p1 = -1,
	p2 = -1,
	p3 = -1;
let soma,
	ajustes = 0,
	quantidadeAjustesTotais = 0,
	repeticoes = 0;
// Novo treinamento
const treinamento = [
	[0, 0, 0, 1], // laranja - citrico
	[0, 0, 1, 0], // abacaxi - citrico
	[0, 1, 0, 0], // morango - citrico
	[0, 1, 1, 0], // kiwi - citrico
	[1, 0, 0, 1], // mamão - doce
	[1, 0, 1, 1], // pera - doce
	[1, 1, 0, 1], // melao - doce
	[1, 1, 1, 1], // mertilo - doce
];

//Escolha a função qu vamos utilizar para calcular (LR, FR, FS)
let funcaoEscolhida = "FS";

let y;

switch (funcaoEscolhida) {
	case "LR":
		y = limiteRapido(soma(entradas_pesos));
		console.log("Saída: " + y + ", Função utilizada: " + funcaoEscolhida);
		break;
	case "FR":
		y = funcaoRampa(soma(entradas_pesos));
		console.log("Saída: " + y + ", Função utilizada: " + funcaoEscolhida);
		break;
	case "FS":
		y = funcaoSigmoide(soma(entradas_pesos));
		console.log("Saída: " + y + ", Função utilizada: " + funcaoEscolhida);
		break;
	default:
		console.log(" A lternativa não é valida");
		break;
}

function soma(entradas_pesos) {
	var soma = 0;
	for (let i = 0; i < entradas_pesos.length; i++) {
		soma = soma + entradas_pesos[i].entrada * entradas_pesos[i].peso;
	}
	console.log("Soma: " + soma);
	return soma;
}

function limiteRapido(soma) {
	return soma <= 0 ? -1 : 1;
}

function funcaoRampa(soma) {
	if (soma < 0) {
		return 0;
	} else if (soma >= 0 && soma <= 1) {
		return soma;
	} else if (soma > 1) {
		return 1;
	}
}

function funcaoSigmoide(soma) {
	if (soma > 0) {
		return 1 - 1 / (1 + soma);
	} else {
		return -1 + 1 / (1 - soma);
	}
}

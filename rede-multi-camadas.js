class Entrada {
	valorEntrada1 = 0;
	valorEntrada2 = 0;
	valorEntrada3 = 0;
	peso1 = 0;
	peso2 = 0;
	peso3 = 0;
}

const entradas_pesos = [
	{ entrada1: 0, entrada2: 0, entrada3: 0, peso1: 0, peso2: 0, peso3: 0 },
	{ entrada1: 0, entrada2: 0, entrada3: 1, peso1: -1, peso2: -1, peso3: 2 },
	{ entrada1: 0, entrada2: 1, entrada3: 0, peso1: 2, peso2: 1, peso3: 2 },
];

let soma,
	ajustes = 0;

//Escolha a função qu vamos utilizar para calcular (LR, FR, FS)
let funcaoEscolhida = "FR";

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
	let soma = 0;
	for (let i = 0; i < entradas_pesos.length; i++) {
		soma +=
			entradas_pesos[i].entrada1 * entradas_pesos[i].peso1 +
			entradas_pesos[i].entrada2 * entradas_pesos[i].peso2 +
			entradas_pesos[i].entrada3 * entradas_pesos[i].peso3;
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

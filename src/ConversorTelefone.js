var Telefone = [];

Telefone.converterCaracter = function (caracter) {
	switch (caracter){
		case "A":
		case "B":
		case "C": { return 2; }
		case "D":
		case "E":
		case "F": { return 3; }
		case "G":
		case "H":
		case "I": { return 4; }
		case "J":
		case "K":
		case "L": { return 5; }
		case "M":
		case "N":
		case "O": { return 6; }
		case "P":
		case "Q":
		case "R":
		case "S": { return 7; }
		case "T":
		case "U":
		case "V": { return 8; }
		case "W":
		case "X":
		case "Y":
		case "Z": { return 9; }
		default: { return caracter; }
	}
}

Telefone.converter = function(strNumero) {
	var valorConvertido = "";
	for ( var i = 0; i < strNumero.length; i++ ) {
		valorConvertido = valorConvertido + Telefone.converterCaracter(strNumero[i]);
	};
	return valorConvertido;
}
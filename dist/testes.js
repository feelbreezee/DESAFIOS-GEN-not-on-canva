"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArraySimples_1 = require("./ArraySimples");
const readline = require("readline");
// Criando interface de leitura do terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Função para processar a entrada do usuário
rl.question('Digite os elementos separados por vírgula (ex: 1,2,2,3):\n', (entrada) => {
    // Separar por vírgula e remover espaços
    const elementos = entrada.split(',').map((item) => item.trim());
    // Detectar tipo automaticamente: número ou string
    const elementosConvertidos = elementos.map((item) => {
        const num = Number(item);
        return isNaN(num) ? item : num;
    });
    const arraySimples = new ArraySimples_1.ArraySimples(elementosConvertidos);
    const resultado = arraySimples.removeDuplicados();
    console.log('\n✅ Resultado sem duplicatas:');
    console.log(resultado);
    rl.close();
});

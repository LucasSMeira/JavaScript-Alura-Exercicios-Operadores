let saldo = 0;
let deposito = 1000;
let saque = 100;

let operacao = saldo;
console.log(operacao);

 operacao = saldo += deposito;
console.log(operacao);

 operacao = saldo -= saque;
console.log(operacao);

const num = 10
const ehpar = num %2 === 0? "O número é par" : "O número não é par";
console.log(ehpar);

const estaLogado = true;
const ehAdiministrador = false;
const suporteEmergencia = "Emergencia";
const verificaSuporte = "Emergencia";

if(estaLogado && ehAdiministrador || estaLogado && verificaSuporte === suporteEmergencia){
    console.log("Permissão concedida , bom trabalho !");
}else{
    console.log("Voce não tem permissão para acessar essa funcionalidade");
}
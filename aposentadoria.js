const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const calculoAposentadoria = idade + contribuicao;

const homenPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoAposentadoria >= 95;
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 35 && calculoAposentadoria >= 85;


if (homenPodeAposentar) {
    if(mulherPodeAposentar){
        console.log('podem se aposentar')
    } else {
        console.log('homem pode se aposentar e a mulher não')
    }
}   else {  
    console.log('homem não pode se aposentar')
}
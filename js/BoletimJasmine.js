
function Boletim(nota1, nota2, nota3, nota4){
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    this.nota4 = nota4;
}

var boletim = new Boletim(10.0, 9.0, 8.0, 7.0);

    
    MediaNotas = (Number(boletim.nota1) + Number(boletim.nota2) + Number(boletim.nota3) + Number(boletim.nota4))/4;
    var resultado = '';
    
    console.log("Valor da Média: " + MediaNotas);

    if(MediaNotas >= 7.0){
        resultado = "APROVADO"
    } else{
        resultado = "REPROVADO"
    }
    console.log("O resultado é: " + resultado);

    
//usado na função 'require' do NodeJS
if (typeof module !== 'undefined' 
    && typeof module.exports !== 'undefined') {
        //module.exports = gerarBoletim;
    }


    
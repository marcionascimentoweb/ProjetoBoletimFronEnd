
function Boletim(){
    var vNome = document.getElementById('nome').value;
    var vsexo = document.querySelector('input[name="sexo"]:checked').value;
    var selectcurso = document.getElementById('curso');
    var vcurso = selectcurso.options[selectcurso.selectedIndex].value;
    
    var vnota1 = document.querySelector('input#nota1').value;
    var vnota2 = document.querySelector('input#nota2').value;
    var vnota3 = document.querySelector('input#nota3').value;
    var vnota4 = document.querySelector('input#nota4').value;
     
    var vmedia = document.getElementById('media');

    var vsituacao = document.getElementById('situacao');

    var MediaNotas = (Number(vnota1) + Number(vnota2) + Number(vnota3) + Number(vnota4))/4;
    
    var media = function Gmedia(){
        vnota1 + vnota2 /2;
        return media;
    }

    //Exibir Resultado
   vmedia.innerHTML = `Nota da Média ${MediaNotas}`;
    //vmedia.innerHTML = `Resposta: ${MediaNotas}`;

    //Situação
    if(MediaNotas >= 7){
        vsituacao.innerHTML = "APROVADO"
        vsituacao.style.color = 'blue';
    }
    else{
        vsituacao.innerHTML = "REPROVADO"
        vsituacao.style.color = 'red';
    }

    //VALIDAÇÃO NOME
    if(document.getElementById("nome").value==""){
        alert('Por favor, preencha o campo nome, obrigatório');
    }


    //VALIDAÇÃO CURSO
    if(document.getElementById("curso").value=="Escolha o Curso"){
        alert('Selecione um curso');
    }

}


//usado na função 'require' do NodeJS
if (typeof module !== 'undefined' 
    && typeof module.exports !== 'undefined') {
        //module.exports = gerarBoletim;
    }


    
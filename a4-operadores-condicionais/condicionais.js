function condicional_if(){
    debugger
    joao = prompt("Digite a opção de joão");
    
    if(joao == 'academia'){
        alert("Forte");
    }else{
        alert("inteligente");
    }
}

function condicional_elseif(){

jose = prompt("Digite a opção de josé");
if (jose =='josefina'){
    alert("olá josefina");
}else if (jose =='bar'){
    alert("bebado");
}else{
     if(jose =="trabalho"){
        alert("ganhar dinheiro");
     }else{
        alert("ganhar inteligencia");
     }
    }
}

function condicional_case(){
maria = prompt("Digite a opção Maria");
switch(maria){

    case "unhas":
        alert("gastei com unhas");
        break;
    case "cabeleireiro":
        alert("gastei com cabeleireiro");
        break;
    case "academia":
        alert("melhorei aparencia");
        break;
    case "compras":
        alert("gastei com compras");
        break;
    case "trabalho":
        alert("ganhei dinheiro com trabalho");
        break;
    default:
        alert("gastei com sapatos");
}

}
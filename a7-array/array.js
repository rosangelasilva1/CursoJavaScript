




//---------------------------Funções com datas 
var data = new Date();

var retornaData =  function (){
    
   
   var dia =  data.getDate(); //1-31
   
   var mes = data.getMonth(); //0-11(zero=janeiro)
   var anoFull = data.getFullYear(); //4 digitos
   var ano = data.getYear();//2 digitos

    var strDataret = dia + "/" + (mes+1)  + "/"  +  anoFull;
    
return  strDataret
      
}

var retornaDiaSemana = function(){
  
    var diaSemana = data.getDay();// 0-6 (zero=domingo)
  

    var strdata = "" ;

     switch (diaSemana){

        case 0:
            strdata = "Domingo";
            break;
        case 1:
            strdata = "Segunda"
            break;
        case 2:
            strdata = "Terça"
            break;
        case 3:
            strdata = "Quarta"
            break;
        case 4:
            strdata = "Quinta"
            break;
        case 5:
            strdata = "Sexta"
            break;
        case 6:
            strdata = "Sábado"
            break;
        default:
            ""
     }
    
     return strdata 
}

var retornaMesExtenso= function(){
    debugger
    var mes = data.getMonth() ;
    var arrayMes = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro");
     var mesExtenso = "";
    
    for(a=1;a<13;a++){

        if(a==mes){
            mesExtenso = arrayMes[a];
        }
    }

return mesExtenso;
}

var retornaHora = function(){

    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();

    return hora + ":" + min + ":" + seg;
}
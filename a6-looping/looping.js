
function loop_while(){
    a=0;
    while (a<10){

        document.write(a);5
        document.write("<br>");
        a++
    }
}


function loop_for(){

    for(a=1;a<10;a++){
        document.write(a);
        document.write("<br>");
    }

}


function tabuada(){

    numero = prompt("Digite o número da tabuada");
    document.write("<h1>Tabuada do " + numero + " </h1>")
    for(a=1;a<11;a++){
        document.write( numero +  " X " + a  +" = " + numero*a);
        document.write("<br>");
    }

}
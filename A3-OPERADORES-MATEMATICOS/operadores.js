function despesas(){
p=30;
alert("Digite o salario do dia 20");
d20=prompt();
d20=parseInt(d20);
alert("Digite o salario do dia 5");
d5=prompt();
d5=parseInt(d5);
salario = (d20 + d5);
patrimonio = ((salario * 30))/100;
gastar = salario - patrimonio;
alert("Posso gastar" + gastar);
alert("Tenho que gastar" + patrimonio);

}

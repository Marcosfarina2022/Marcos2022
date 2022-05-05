let numero1:number=Number(prompt("Ingrese el número"));
let esPar:boolean=true;
if(numero1 %2===0){
  esPar=true;
}else{
  esPar=false;
}
switch esPar{
  case true:
    if(numero1==0){
      console.log("El número ingresado es 0");
    }
  console.log("El numero ingresado es par");
    break;
  case false:
    console.log("El número ingresado es inpar");
    break;
  }

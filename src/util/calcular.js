
export const calcular = () => {
  const altura =  document.getElementById('altura').value;
  const peso =  document.getElementById('peso').value;
  const nome = document.getElementById('name').value;
  const calculo = peso/ (altura * altura);
  const imc = parseFloat(calculo.toFixed(2));
 
  if(imc < 18.5 ){
    document.getElementById('calculo').value = `${nome} seu IMC é de ${imc} você está magro`;
  }
  if(imc > 18.5 && imc < 24.9){
    document.getElementById('calculo').value = `${nome} seu IMC é de ${imc} você está saudável`;
  }
  if(imc > 25.0 && imc < 29.9 ){
    document.getElementById('calculo').value = `${nome} seu IMC é de ${imc} você está sobrepeso `;
  }
  if(imc > 30.0 && imc < 39.9 ){
    document.getElementById('calculo').value = `${nome} seu IMC é de ${imc} você está obesidade 1 `;

  }
  if(imc > 40.0 ){
    document.getElementById('calculo').value = `${nome} seu IMC é de ${imc} você está obesidade 3 `;
    
  }
}
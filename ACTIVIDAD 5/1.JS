    const a = [1, 2, 3, 4, 5, 6,9,11,13];
    let par =0 ;
    let imp = 0;
  
    a.forEach((n) => {
      if (n % 2 === 0) {
        par++;
      } else {
        imp++;
      }
    });
  const resultado = [("cantidad de numeros pares= ")+par,("cantidad de numeros impares= ")+imp];
  console.log(resultado);
  


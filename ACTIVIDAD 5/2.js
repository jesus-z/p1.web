let frase = "anoche comi con san pedro";
let palabras = frase.split(" ");
let p_m_g= "";

palabras.forEach ((palabra) => {
    if (palabra.length > p_m_g.length){
        p_m_g = palabra;
    }
});
console.log(p_m_g);
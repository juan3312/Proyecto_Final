const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    
    })
})

contenedorLight.addEventListener('click', (e) =>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.remove('show');
        imagenesLight.classList.remove('showImage'); 
    }
})

const aparecerImagen = (imagen) =>{
    imagenesLight.src = imagen;
    contenedorLight.classList.add('show');
    imagenesLight.classList.add('showImage');
}

/* Carrito

let cont1 = 6;
let cont2 = 9;
let cont3 = 10;

/* 
Expresiones equivalentes
cont1++; 
cont1+=1;
cont1 = cont1 + 1;
*/

/*document.write(++cont1+"<br>");
document.write((cont1++)+"<br>");
document.write(cont1);*/

//Probar diferentes combinaciones del operador post, pre incremento/decremento


//Imprima los números pares entre n y m, donde n < m
/*
let n, m, i;
let salida = "";
n = 3;
m = 81;

for(i=n;i<=m;i++)
{
  if(i%2==0)
  {
    salida = salida + i + "<br>";
  }
}

document.write(salida);*/



/* galeria index*/


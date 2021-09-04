

//COLOR 
(function() {

    let boton = document.getElementById("colorear");
    let titulo = document.getElementById("titulo");
    let titulos = document.getElementById("titulo-seg");
    let tituloss = document.getElementById("titulo-ter");
    let titulosss = document.getElementById("titulo-cuart");
    let titulossss = document.getElementById("titulo-quint");
   

    boton.addEventListener("click", myf1);

    let contador = 0;

    function myf1() {
      if (contador % 2 == 0) {
          titulo.style.backgroundColor= "red"
          titulo.style.border="13px solid red";
          titulos.style.backgroundColor= "red"
          titulos.style.border="13px solid red";
          tituloss.style.backgroundColor= "red"
          tituloss.style.border="13px solid red";
          titulosss.style.backgroundColor= "red"
          titulosss.style.border="13px solid red";
          titulossss.style.backgroundColor= "red"
          titulossss.style.border="13px solid red";
      } else {     
          titulo.style.backgroundColor= "rgb(111, 111, 255)"
          titulo.style.border="13px solid rgb(111, 111, 255)";
          titulos.style.backgroundColor= "rgb(111, 111, 255)"
          titulos.style.border="13px solid rgb(111, 111, 255)";
          tituloss.style.backgroundColor= "rgb(111, 111, 255)"
          tituloss.style.border="13px solid rgb(111, 111, 255)";
          titulosss.style.backgroundColor= "rgb(111, 111, 255)"
          titulosss.style.border="13px solid rgb(111, 111, 255)";
          titulossss.style.backgroundColor= "rgb(111, 111, 255)"
          titulossss.style.border="13px solid rgb(111, 111, 255)";
      }
      contador += 1;
    }
})();
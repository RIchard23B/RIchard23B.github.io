//=============== Separar APELLIDOS Y NOMBRES ====================//
    //===============================================================//
(function (){
    
    let boton = document.getElementById("extraer")
    

    boton.addEventListener("click", function(){

        const apeNom = document.getElementById('nombresComplet');
        let nombreCompleto = apeNom.value;

        /** con split elimino de acuerdo a la exprexion regular en este
        caso eliminan los espacios y me devuelve un array */

        let newN = nombreCompleto.split(/\s+/);
        /** agrego a cada campo su valor*/

        const apePaterno = document.getElementById('apePaterno');
        apePaterno.value = newN[0];
        const apeMaterno = document.getElementById('apeMaterno');
        apeMaterno.value = newN[1];

        const nombres = document.getElementById('nombre');
        for (let i = 2; i < newN.length; i++) {
            nombres.value += " "+newN[i];
        }
        nombres = this.focus;


    });

})();

//=============== LONGITUD DE APELLIDOS ====================//
//===============================================//
(function(){

    let boton = document.getElementById("extraer")

    boton.addEventListener("click", function(){

        //let nombre = document.getElementById("nombresComplet").value;
        let texto = document.getElementById("apePaterno").value;
        let mater = document.getElementById("apeMaterno").value;

        let glob = texto + mater;

        document.getElementById("longApe").value = (" " + glob.length + " caracteres");
        

    });

})();

//===============CALCULAR EDAD====================//
//===============================================//
(function(){

    let boton = document.getElementById("extraer")

    boton.addEventListener("click", function() {

        let edades = document.getElementById("anio").value;
        let mes = document.getElementById("mes").value;

        var hoy = new Date();
        var cumpleanos = new Date(edades);
        var cumple = new Date(mes)
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumple.getMonth();
    
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;

        }
        document.getElementById("edad").value = edad;
    });
})();

//=============== FECHA EN LETRAS ====================//
//===============================================//
(function(){ 

    let boton = document.getElementById("extraer");

    boton.addEventListener("click",function(){
        
        let mes = document.getElementById("mes").value;

        let nombreMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        let d = new Date(mes);
        document.getElementById("meses").value = (" " + nombreMeses[d.getMonth()]); 
        
    });

})();



//=============== COLOR ====================//
//===============================================//
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

//boton añadir gastos
const toggleButtonGastos = document.getElementById("+g");
const divGastos = document.getElementById("input-gastos");

toggleButtonGastos.addEventListener("click", function() {
    if (divGastos.style.display === "none" || divGastos.style.display === "") {
        divGastos.style.display = "block";
    } else {
        divGastos.style.display = "none";
    }
});


//boton añadir ingresos
const toggleButtonIngresos = document.getElementById("+i");
const divIngresos = document.getElementById("input-ingresos");


toggleButtonIngresos.addEventListener("click", function() {
    if (divIngresos.style.display === "none" || divIngresos.style.display === "") {
        divIngresos.style.display = "block";
    } else {
        divIngresos.style.display = "none";
    }
});

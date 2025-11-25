function cuadrado(base, altura) {
    superficie = base * altura;
    return superficie;
}

function triangulo(base, altura) {
    superficie = (base * altura) / 2;
    return superficie;
}

let opcion = parseInt(prompt("ingrese el valor de su opcion:"));


if (opcion == 1) {
    let base = parseFloat(prompt("valor de la base:"));
    let altura = parseFloat(prompt("valor de la altura:"));

    let superficie = cuadrado(base, altura);

    document.getElementById("base1").innerHTML = base;
    document.getElementById("altura1").innerHTML = altura;
    document.getElementById("super1").innerHTML = superficie;
} else {
    if (opcion == 2) {
        let base = parseFloat(prompt("valor de la base:"));
        let altura = parseFloat(prompt("valor de la altura:"));

        let superficie = triangulo(base, altura);

        document.getElementById("base2").innerHTML = base;
        document.getElementById("altura2").innerHTML = altura;
        document.getElementById("super2").innerHTML = superficie;
    } else {
        (opcion == 0)
        alert("Finalizado");
    }
}




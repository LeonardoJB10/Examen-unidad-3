let grados = prompt("Introduce la cantidad de grados:");
let num = parseFloat(grados);

if (num > 0) {
    let tipo_de_moneda = prompt("Escribe 'C' para convertir grados Celsius a grados Fahrenheit");

    if (tipo_de_moneda === "C") {
        let resultado1 = num * 9/5 + 32;
        alert(`${num} grados Celsius son  ${resultado1} Fahrenheit.`);
        console.log(`${num} grados Celsius son ${resultado1} Fahrenheit.`)
    } else {
        alert("Por favor, escribe 'C' para la conversion de grados.");
    }
} else {
    alert("Introduce un número válido mayor que 0.");
}

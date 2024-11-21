let cantidad = prompt("Introduce la cantidad a convertir (en números):");
let num = parseFloat(cantidad);

if (num > 0) {
    let tipo_de_moneda = prompt("Escribe 'E' para convertir EUROS a DÓLARES o 'D' para convertir DÓLARES a EUROS");

    if (tipo_de_moneda === "E") {
        let resultado1 = num * 1.10;
        alert(`${num} euros son ${resultado1} dólares.`);
        console.log(`${num} euros son ${resultado1} dólares.`)
    } else if (tipo_de_moneda === "D") {
        let resultado2 = num * 0.91;
        alert(`${num} dólares son ${resultado2} euros.`);
        console.log(`${num} dólares son ${resultado2} euros.`)
    } else {
        alert("Por favor, escribe 'E' o 'D' para seleccionar el tipo de conversión.");
    }
} else {
    alert("Introduce un número válido mayor que 0.");
}


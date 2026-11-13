const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const tablaCuerpo = document.getElementById("tabla-cuerpo");
let likes = 0;


boton.addEventListener("click", () => {
    likes++;
    textoContador.textContent = likes; 

    
    const ahora = new Date();
    const horaFormateada = ahora.toLocaleTimeString();

    
    const nuevaFila = document.createElement("tr");
    nuevaFila.innerHTML = `
        <td>${likes}</td>
        <td>${horaFormateada}</td>
    `;

    
    tablaCuerpo.insertBefore(nuevaFila, tablaCuerpo.firstChild);
});
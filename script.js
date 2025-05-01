function actualizarTexto() {
    const nuevoTextoPrincipal = prompt("Ingresa nuevo texto principal:", "Texto PARA TI Principal");
    const nuevoTextoSecundario = prompt("Ingresa nuevo texto secundario:", "Texto Secundario");
    
    document.getElementById("texto-principal").innerText = nuevoTextoPrincipal;
    document.getElementById("texto-secundario").innerText = nuevoTextoSecundario;
}

// Función para cambiar el contenido de la página
document.getElementById('comandos-btn').addEventListener('click', function() {
    document.getElementById('contenido').innerHTML = `
        <section id="comandos" class="section">
            <h2>Comandos Disponibles</h2>
            <ul>
                <li>?mbuy <id> - Comprar un ítem</li>
                <li>?minventory - Ver tu inventario</li>
                <li>?mbalance - Ver tu saldo</li>
                <li>?mgive <@usuario> <cantidad> - Transferir dinero</li>
            </ul>
        </section>
    `;
});

document.getElementById('ajustes-btn').addEventListener('click', function() {
    document.getElementById('contenido').innerHTML = `
        <section id="ajustes" class="section">
            <h2>Ajustes del Bot</h2>
            <p>Aquí puedes gestionar la configuración del bot...</p>
        </section>
    `;
});

document.getElementById('comandos-toggle').addEventListener('click', function (event) {
    event.preventDefault();
    const comandosList = document.getElementById('comandos-list');
    comandosList.style.display = (comandosList.style.display === 'block') ? 'none' : 'block';
});

document.getElementById('ajustes-toggle').addEventListener('click', function (event) {
    event.preventDefault();
    const ajustesList = document.getElementById('ajustes-list');
    ajustesList.style.display = (ajustesList.style.display === 'block') ? 'none' : 'block';
});

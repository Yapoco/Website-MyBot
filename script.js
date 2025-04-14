
document.getElementById('invite').addEventListener('click', () => {
    document.getElementById('invite-section').style.display = 'block';
    document.getElementById('commands-section').style.display = 'none';
    document.getElementById('settings-section').style.display = 'none';
});

document.getElementById('commands').addEventListener('click', () => {
    document.getElementById('commands-section').style.display = 'block';
    document.getElementById('invite-section').style.display = 'none';
    document.getElementById('settings-section').style.display = 'none';
});

document.getElementById('settings').addEventListener('click', () => {
    document.getElementById('settings-section').style.display = 'block';
    document.getElementById('invite-section').style.display = 'none';
    document.getElementById('commands-section').style.display = 'none';
});

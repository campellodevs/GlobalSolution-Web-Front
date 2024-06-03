document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if ((username === 'aquadrone' && password === 'innovations') || 
        (username === storedUsername && password === storedPassword)) {
        alert('Login bem-sucedido');
        document.getElementById('login-container').innerHTML = '<h1>Você está logado</h1>';
    } else {
        alert('Nome de usuário ou senha incorretos');
    }
});

document.getElementById('register-button').addEventListener('click', function() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'flex';
});

document.getElementById('login-button').addEventListener('click', function() {
    document.getElementById('register-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'flex';
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);

    alert('Conta criada com sucesso para ' + newUsername + '!');
    document.getElementById('register-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'flex';
});

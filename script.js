const emailValido = 'tryber@teste.com';
const senhaValida = '123456';
const botao = document.getElementById('button');

botao.addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  const senha = document.querySelector('#senha').value;
  if (email === emailValido && senha === senhaValida) {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
});

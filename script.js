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

const btnSubmit = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
btnSubmit.disabled = true;

agreement.addEventListener('change', () => {
  if (agreement.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});

const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

textarea.addEventListener('keyup', (event) => {
  const textLenf = (event.target.value).length;
  let contador = 500;
  contador -= textLenf;
  counter.innerText = `${contador}`;
});

function getFullName() {
  const nome = document.getElementById('input-name').value;
  const sobrenome = document.getElementById('input-lastname').value;
  return `${nome} ${sobrenome}`;
}

function getEmail() {
  return document.getElementById('input-email').value;
}

function getHouse() {
  return document.getElementById('house').value;
}

function getFamily() {
  return document.getElementById('label-family').value;
}

function getContente() {
  return document.getElementById('label-content').value;
}

function getRate() {
  return document.getElementById('label-rate').value;
}

function getText() {
  return document.getElementById('textarea').value;
}

function getInfos() {
  const fullName = getFullName();
  const mail = getEmail();
  const house = getHouse();
  const family = getFamily();
  const content = getContente();
  const rate = getRate();
  const text = getText();

  const formData = {
    Nome: fullName,
    Email: mail,
    Casa: house,
    Família: family,
    Matérias: content,
    Avaliação: rate,
    Observações: text,
  };
  return formData;
}
const formData = getInfos();
localStorage.setItem('form-Data', JSON.stringify(formData()));

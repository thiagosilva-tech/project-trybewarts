const emailValido = "tryber@teste.com";
const senhaValida = "123456";
const botao = document.getElementById("button");

botao.addEventListener("click", (event) => {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const senha = document.querySelector("#senha").value;
  if (email === emailValido && senha === senhaValida) {
    window.alert("Olá, Tryber!");
  } else {
    window.alert("Email ou senha inválidos.");
  }
});

const btnSubmit = document.getElementById("submit-btn");
const agreement = document.getElementById("agreement");
btnSubmit.disabled = true;

agreement.addEventListener("change", () => {
  if (agreement.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});

const textarea = document.getElementById("textarea");
const counter = document.getElementById("counter");

textarea.addEventListener("keyup", (event) => {
  const textLenf = event.target.value.length;
  let contador = 500;
  contador -= textLenf;
  counter.innerText = `${contador}`;
});

function getFullName() {
  const nome = document.getElementById("input-name").value;
  const sobrenome = document.getElementById("input-lastname").value;
  return `${nome} ${sobrenome}`;
}

function getContent() {
  const subjects = document.querySelectorAll(".subject");
  const contents = [];
  for (let index = 0; index < subjects.length; index += 1) {
    if (subjects[index].checked) {
      contents.push(subjects[index].value);
    }
  }
  const content = contents.join(", ");
  return content;
}

function getInfos() {
  const fullName = getFullName();
  const mail = document.getElementById("input-email").value;
  const house = document.getElementById("house").value;
  const family = document.querySelector('input[name="family"]:checked').value;
  const content = getContent();
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const text = document.getElementById("textarea").value;
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

function changeForm() {
  const evaluationForm = document.querySelector('#evaluation-form');
  evaluationForm.style.display = 'none';
  getInfosData()
  const formData = document.querySelector('#form-data');
  formData.style.display = 'block';
}

function saveInfosData(event) {
  event.preventDefault();
  const formData = getInfos();
  localStorage.setItem("form-data", JSON.stringify(formData));
  changeForm();
}

function getInfosData() {
  const dataLocalstorage = JSON.parse(localStorage.getItem('form-data'));
  const nome = document.querySelector('#nameData');
  const email = document.querySelector('#emailData');
  const casa = document.querySelector('#casaData');
  const familia = document.querySelector('#familiaData');
  const materias = document.querySelector('#materiasData');
  const avaliacao = document.querySelector('#avaliacaoData');
  const observacao = document.querySelector('#observacaoData');
  nome.innerText = dataLocalstorage.Nome;
  email.innerText = dataLocalstorage.Email;
  casa.innerText = dataLocalstorage.Casa;
  familia.innerText = dataLocalstorage.Família;
  materias.innerText = dataLocalstorage.Matérias;
  avaliacao.innerText = dataLocalstorage.Avaliação;
  observacao.innerText = dataLocalstorage.Observações;
}

btnSubmit.addEventListener("click", saveInfosData);

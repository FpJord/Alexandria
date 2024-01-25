const data = new Date();
const hora = data.getHours();

const fundo = document.getElementById("main");

if (hora >= 6 && hora < 18) {
  fundo.style.background = "url(assets/css/manhã.jpg)";
  fundo.style.backgroundSize = "cover";
} else {
  fundo.style.background = "url(assets/css/paisagem.jpg)";
  fundo.style.backgroundSize = "cover";
}


function revealPassword () {
  var inputPass = document.getElementById('senha')
  var btnShowPass = document.getElementById('btn-senha')

  if(inputPass.type === 'password'){
      inputPass.setAttribute('type','text')
      btnShowPass.classList.replace('bi-eye', 'bi-eye-slash')
  } else{
      inputPass.setAttribute('type','password')
      btnShowPass.classList.replace('bi-eye-slash','bi-eye')
  }
}


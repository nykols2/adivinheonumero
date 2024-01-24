var numeroAlvo = Math.floor(Math.random() * 100) + 1;
function verificarPalpite(){
  var palpite = document.getElementById("adivinhar").value;
  var resultado = document.getElementById("resultado");
  var gifSucesso = document.getElementById("gif-sucesso");
  if (palpite == numeroAlvo) {
    resultado.innerHTML = "Parabéns! Você adivinhou o número!";
    gifSucesso.style.display = "block";
  } else if (palpite < numeroAlvo) {
      resultado.innerHTML = "O seu palpite é muito baixo. Tente novamente.";
  } else {
    resultado.innerHTML = "O seu palpite é muito alto. Tente novamente.";
  }
}
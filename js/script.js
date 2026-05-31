const inputSenha = document.getElementById("input-senha");
const iconeOlho = document.getElementById("icone-olho");

iconeOlho.addEventListener("click", () => {
  if (inputSenha.type === "password") {
    inputSenha.type = "text";
    iconeOlho.classList.remove("fa-eye");
    iconeOlho.classList.add("fa-eye-slash");
  } else {
    inputSenha.type = "password";
    iconeOlho.classList.remove("fa-eye-slash");
    iconeOlho.classList.add("fa-eye");
  }
});

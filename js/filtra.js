var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
  console.log(this.value);
  var pacientes = document.querySelectorAll(".paciente");

  if (this.value.length > 0) {
    for (var i = 0; i < pacientes.length; i++) {
      //gera um array de pacientes
      var paciente = pacientes[i]; //cria uma variável e coloca dentro dela a tr pacientes no dindice [i]
      var tdNome = paciente.querySelector(".info-nome"); //seleciona a td info-nome de dentro da tr pacientes
      var nome = tdNome.textContent; //extrai o conteudo de nome para a variável nome
      var expressao = new RegExp(this.value, "i"); // 
      if (!expressao.test(nome)) {
        paciente.classList.add("invisivel");
      } else {
        paciente.classList.remove("invisivel");
      }
    }
  } else {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      paciente.classList.remove("invisivel");
    }
  }
});

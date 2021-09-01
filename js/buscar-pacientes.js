var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function () {
  console.log("buscando pacientes...");

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://api-pacientes.herokuapp.com/pacienteas");

  xhr.addEventListener("load", function () {
    var erroAjax = document.querySelector("#erro-ajax");

    if (xhr.status == 200) {
        erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      erroAjax.classList.remove("invisivel");
    }
  });

  xhr.send();
});

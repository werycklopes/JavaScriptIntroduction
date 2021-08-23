var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");
    for(var i = 0; i<pacientes.length; i++){ //gera um array de pacientes
        var paciente = pacientes[i]; //cria uma variável e coloca dentro dela a tr pacientes no dindice [i]
        var tdNome = paciente.querySelector(".info-nome");//seleciona a td info-nome de dentro da tr pacientes
        var nome = tdNome.textContent;//extrai o conteudo de nome para a variável nome
        if(nome != this.value){
            paciente.classList.add("invisivel");
        } else {
            paciente.classList.remove("invisivel");
        }

    }
});
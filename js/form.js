var adicionarB = document.querySelector("#adicionar-paciente");
adicionarB.addEventListener("click", function(event){
    event.preventDefault();    

    var form = document.querySelector("#form-adiciona");
    //Extrai as informações do paciente do form
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    //cria a Tr do paciente
    var pacienteTr = document.createElement("tr");

    //cria a Td do paciente
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    //Extrai os dados da função que recebe as caixas de texto e insere nas novas tds criadas
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaIMC(peso, altura);

    //Inclui as Tds criadas na Tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    //adiciona o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    
});
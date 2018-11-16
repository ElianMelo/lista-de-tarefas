var ids = 0;

function adicionaTarefa(event) {
    // Verifica se a tecla apertada pelo usuário foi enter
    if(event.which == 13 || event.keyCode == 13){
        // Pega o valor da tarefa no campo gerador de tarefas e troca o valor do id
        var texto = document.getElementById("geradorTarefa").value;
        ids += 1;

        // Evita espaços em branco
        if(texto == "" || texto == " "){
            return false;
        } else {

        // Limpa o campo do gerador de tarefas
        document.getElementById("geradorTarefa").value = "";

        // Cria o div que será enviado atribuindo id e estilo
        var divPrincipal = document.createElement("div");
        divPrincipal.className = "estiloDiv";
        divPrincipal.id = ids;

        // Monta a estrutura que será enviada
        divPrincipal.innerHTML =
        "<div class='botaoCheck' onclick='return chequeTarefa(event);' id=" + ids + ">\u2713</div>" +
        "<label class='estiloTexto' id=" + ids + ">" + texto + "</label>" +
        "<div class='botaoExcluir' onclick='return excluiTarefa(event);' id=" + ids + ">\u00D7</div>";

        // Envia a estrutura
        document.body.appendChild(divPrincipal);

        return false;
        }
    }else{
        return true;
    }
}

function excluiTarefa(event) {
    excluir = document.getElementById(event.srcElement.id);
    excluir.parentNode.removeChild(excluir);
}

function chequeTarefa(event) {

}

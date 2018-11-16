var ids = 0;

function adicionaTarefa(event) {
    // Verifica se a tecla apertada pelo usuário foi enter
    if(event.which == 13 || event.keyCode == 13){
        // Pega o valor da tarefa no campo gerador de tarefas e aumenta o valor do id
        var texto = document.getElementById("geradorTarefa").value;
        ids += 1;

        // Evita espaços em branco
        if(texto == "" || texto == " "){
            return false;
        } else {

        // Limpa o campo do gerador de tarefas
        document.getElementById("geradorTarefa").value = "";

        // Cria a div que será enviado atribuindo id e estilo
        var divPrincipal = document.createElement("div");
        divPrincipal.className = "estiloDiv";
        divPrincipal.id = ids + "D";

        // Monta a estrutura que será enviada
        divPrincipal.innerHTML =
        "<div class='botaoCheck' onclick='return chequeTarefa(event);' id=" + ids + ">\u2713</div>" +
        "<label class='estiloTexto' id=" + ids + "T" + ">" + texto + "</label>" +
        "<div class='botaoExcluir' onclick='return excluiTarefa(event);' id=" + ids + ">\u00D7</div>";

        // Envia a estrutura
        document.body.appendChild(divPrincipal);

        return false;
        }
    } else {
        return true;
    }
}

function excluiTarefa(event) {
    // Exclui o elemento clickado

    var excluir = document.getElementById(event.srcElement.id + "D");
    excluir.parentNode.removeChild(excluir);
}

function chequeTarefa(event) {
    // Marca ou desmarcar uma tarefa

    // Pega o texto o botão e a div que são editados
    var alterarTexto = document.getElementById(event.srcElement.id + "T");
    var alterarBotao = document.getElementById(event.srcElement.id);
    var alterarDiv = document.getElementById(event.srcElement.id + "D");

    // Altera o texto o botão e a div
    if (alterarTexto.className != "estiloTextoAlterado"){
        alterarTexto.className = "estiloTextoAlterado";
        alterarBotao.className = "botaoCheckAtivado";
        alterarDiv.className = "estiloDivAlterado";

    // Retorna o texto o botão e a div ao seu estado normal
    } else if (alterarTexto.className == "estiloTextoAlterado"){
        alterarTexto.className = "estiloTexto";
        alterarBotao.className = "botaoCheck";
        alterarDiv.className = "estiloDiv";
    }
}

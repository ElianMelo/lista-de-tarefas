var ids = 0;

function adicionaTarefa(event) {
    // Verifica se a tecla apertada pelo usuário foi enter
    if(event.which == 13 || event.keyCode == 13){
        // Pega o valor da tarefa no campo gerador de tarefas e troca o valor do id
        var texto = document.createTextNode(document.getElementById("geradorTarefa").value);
        ids += 1;

        // Limpa o campo do gerador de tarefas
        document.getElementById("geradorTarefa").value = "";

        // Cria um <label> que leva o nome da tarefa
        var nomeTarefa = document.createElement("label");
        nomeTarefa.id = ids;
        nomeTarefa.className = "estiloTexto";
        nomeTarefa.appendChild(texto);

        // Cria a div principal
        var divPrincipal = document.createElement("div");
        divPrincipal.innerHTML = "<span onclick='return excluiTarefa(event);' id=" + ids + "> X </span>";
        divPrincipal.id = ids;
        divPrincipal.className = "estiloDiv";

        // Envia para o corpo do programa uma div com uma tarefa e o seu nome
        document.body.appendChild(divPrincipal);
        document.getElementById(ids).appendChild(nomeTarefa);
        return false;
    }else{
        return true;
    }
}

function excluiTarefa(event) {
    excluir = document.getElementById(event.srcElement.id);
    excluir.parentNode.removeChild(excluir);
}

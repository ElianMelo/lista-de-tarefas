var ids = 0;

function adicionaTarefa(event) {
    // Verifica se a tecla apertada pelo usuário foi enter
    if(event.which == 13 || event.keyCode == 13){
        // Pega o valor da tarefa no campo gerador de tarefas e troca o valor do id
        var texto = document.createTextNode(document.getElementById("geradorTarefa").value);
        ids += 1;

        // Limpa o campo do gerador de tarefas
        document.getElementById("geradorTarefa").value = "";

        // Cria um input e associa o tipo checkbox a ele
        var tarefa = document.createElement("input");
        tarefa.type = "checkbox";
        tarefa.id = ids;
        tarefa.className = "estiloCaixa";

        // Cria um label que dá um nome ao checkbox
        var nome = document.createElement("label");
        nome.htmlFor = ids;
        nome.className = "estiloTexto";
        nome.appendChild(texto);

        //Cria uma div
        var div = document.createElement("div");
        div.id = ids;
        div.className = "estiloDiv";

        // Envia para o corpo do programa uma div com uma tarefa e o seu nome
        document.body.appendChild(div);
        document.getElementById(ids).appendChild(tarefa);
        document.getElementById(ids).appendChild(nome);
        return false;
    }else{
        return true;
    }
}

function adicionaTarefa(event) {
    // Verifica se a tecla apertada pelo usuário foi enter
    if(event.which == 13 || event.keyCode == 13){
        // Pega o valor da tarefa no campo gerador de tarefas,
        // e transforma em texto e em dados
        var texto = document.createTextNode(document.getElementById("geradorTarefa").value);
        var dados = document.getElementById("geradorTarefa").value;

        // Limpa o campo do gerador de tarefas
        document.getElementById("geradorTarefa").value = "";

        // Se essa nova tarefa já existe ou for numa o programa é cancelado
        var valor = document.getElementById(dados);
        if (valor != null || dados == ""){
            return null;
        }

        // Cria um input e associa o tipo checkbox a ele
        var tarefa = document.createElement("input");
        tarefa.type = "checkbox";
        tarefa.name = dados;
        tarefa.id = dados;

        // Cria um label que dá um nome ao checkbox
        var nome = document.createElement("label");
        nome.htmlFor = dados;
        nome.appendChild(texto);

        //Gera uma quebra de linha
        var br = document.createElement("br");

        // Envia para o corpo do programa a tarefa o seu nome e uma quebra de linha
        document.body.appendChild(tarefa);
        document.body.appendChild(nome);
        document.body.appendChild(br);
        return false;
    }else{
        return true;
    }
}

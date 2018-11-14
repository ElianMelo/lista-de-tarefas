function adicionaTarefa(event) {
    if(event.which == 13 || event.keyCode == 13){
        var tarefa = document.createElement("div");
        var texto = document.createTextNode(document.getElementById("geradorTarefa").value);
        tarefa.appendChild(texto);
        document.body.appendChild(tarefa);
        return false;
    }else{
        return true;
    }
}

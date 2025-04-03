let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");
let contador = 0;
function addTarefa(){
    //pegar o valor digitado no input
    let valorIput = input.value;
    //adicionar nova tarefa quando os campos não vierem nulos ou indefinidos
    if ((valorIput !== null) && (valorIput !== " ") && (valorIput !== undefined)) {
        //id do conatador para excluir apenas uma tarefa específica
        ++contador;
        let novoItem = `<div id="${contador}" class="item">
            <div id="icone_${contador}" onclick="tarefaConcluida(${contador})" class="item-icone">
                <span class="material-symbols-outlined">
                    radio_button_unchecked
                    </span>
            </div>
            <div onclick="tarefaConcluida(${contador})" class="item-nome">
                ${valorIput}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="deletar"><span class="material-symbols-outlined">
                    delete
                    </span></button>
            </div>
        </div>`
        //adiciona novo item no main
        main.innerHTML += novoItem;
        //zerar campos
        input.value = "";
        input.focus();

    }
}
//adicionar tarefas usando o enter
 input.addEventListener("keyup",function(event) {
    if(event.keyCode === 13){//tecla 13 é o enter no teclado
        event.preventDefault();//impede que o enter faça outras coisas além de enviar
        btnAdd.click();//equivale ao clique no botão adicionar
    }
 })
 function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
 }
 function tarefaConcluida(id) {
    var item = document.getElementById(id);
    var icone = document.getElementById('icone_' + id).querySelector('span');
    //item.parentNode.appendChild(item);    
    // Verifica se o item já está concluído
    if (item.classList.contains("item-clicado")) {
        item.classList.remove("item-clicado");
        icone.innerText = "radio_button_unchecked"; // Ícone de tarefa pendente

    } else {
        item.classList.add("item-clicado");
        icone.innerText = "check_circle"; // Ícone de tarefa concluída
    }
}
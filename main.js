$(document).ready(function(){
    $('#form-tarefa button').on('click', function(){
        // Obter valores do formulário
        const nomeTarefa = $('#tarefa').val();
        const statusPrioridade = $('#selecionar-prioridade').val();

        if (nomeTarefa && statusPrioridade) {
            // Criar um novo elemento de lista
            const novoItemLista = `<li>
                <div class="box-tarefas ${statusPrioridade}-prioridade">
                    <span class="tag-tarefa tag-${statusPrioridade}-prioridade">${statusPrioridade}</span>
                    <div class="nome-tarefa">
                        <span class="tarefa-text">${nomeTarefa}</span>
                    </div>
                    <span class="status-tarefa">Em Andamento</span>
                </div>
            </li>`;

            // Adicionar o novo item à lista existente
            $('ul').append(novoItemLista);

            // Limpar o formulário após adicionar a tarefa
            $('#tarefa').val('');
            $('#selecionar-prioridade').val(''); // Ou defina um valor padrão desejado
        } else {
            alert('Por favor, preencha os campos de tarefa e prioridade.');
        }
    });

    // Adicionando o evento de clique para alternar entre "Em Andamento" e "Concluído"
    $('ul').on('click', '.nome-tarefa', function(){
        const statusTarefa = $(this).siblings('.status-tarefa');
        const tarefaText = $(this).find('.tarefa-text');

        if (statusTarefa.text() === 'Em Andamento') {
            statusTarefa.text('Concluída');
            tarefaText.addClass('tarefa-concluida');
        } else {
            statusTarefa.text('Em Andamento');
            tarefaText.removeClass('tarefa-concluida');
        }
    });
});

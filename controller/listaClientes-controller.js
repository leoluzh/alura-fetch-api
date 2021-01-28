import { clienteService } from '../service/cliente-service.js'

const criarNovaLinha = ( nome , email , id ) => {
    const novaLinha = document.createElement('tr');
    const conteudo = 
    `<td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><button class="botao-simples botao-simples--editar">Editar</button></li>
            <li><button class="botao-simples botao-simples--excluir">Excluir</button></li>
        </ul>
    </td>` ;
    novaLinha.innerHTML = conteudo;
    novaLinha.dataset.id = id;
    return novaLinha;
}

const tabela = document.querySelector('[data-tabela]');

tabela.addEventListener( 'click' , ( evento ) => {
    if( evento.target.class === 'botao-simples botao-simples--excluir' ){
        const linhaCliente = evento.target.closest('[data-id]');
        let id = linhaCliente.dataset.id ;
        clienteService.removeCliente(id).then( () => {
            linhaCliente.remove();
        });
    }
    evento.preventDefault();
});

clienteService.listaClientes().then( data => {
    data.forEach( elemento => {
        tabela.appendChild(criarNovaLinha( elemento.nome , elemento.email , elemento.id ));    
    });
});

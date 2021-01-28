import { clienteService } from '../service/cliente-service.js'

const criarNovaLinha = ( nome , email ) => {
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
    return novaLinha;
}

const tabela = document.querySelector('[data-tabela]');

clienteService.listaClientes().then( data => {
    data.forEach( elemento => {
        tabela.appendChild(criarNovaLinha( elemento.nome , elemento.email ));    
    });
});

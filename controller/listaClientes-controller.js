import { clienteService } from '../service/cliente-service.js'

const criarNovaLinha = ( nome , email , id ) => {
    const novaLinha = document.createElement('tr');
    const conteudo = 
    `<td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><button href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</button></li>
            <li><button class="botao-simples botao-simples--excluir">Excluir</button></li>
        </ul>
    </td>` ;
    novaLinha.innerHTML = conteudo;
    novaLinha.dataset.id = id;
    return novaLinha;
}

const tabela = document.querySelector('[data-tabela]');

tabela.addEventListener( 'click' , async ( evento ) => {
    if( evento.target.class === 'botao-simples botao-simples--excluir' ){
        try{
            const linhaCliente = evento.target.closest('[data-id]');
            let id = linhaCliente.dataset.id ;
            await clienteService.removeCliente(id)
            linhaCliente.remove();    
        }catch( erro ){
            if( console ) console.log(erro);
            window.location = '../telas/erro.html' ;
        }   
    }
    evento.preventDefault();
});

const renderizar = async () => {
    try{
        const data = await clienteService.listaClientes();
        data.forEach( elemento => {
            tabela.appendChild(criarNovaLinha( elemento.nome , elemento.email , elemento.id ));    
        });        
    }catch(erro){
        if( console ) console.log(erro)
        window.location = '../telas/erro.html';
    }
}

renderizar();

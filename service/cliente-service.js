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
    novaLinha.innerHTML(conteudo);
    return novaLinha;
}

const tabela = document.querySelector('[data-tabela]');

const listaClientes = () => {
    const promise = new Promise( ( resolve , reject )  => {
        const http = new XMLHttpRequest();
        http.open("GET","http://localhost:3000/profile");
        http.send();
        
        http.onload = () => {
            const data = JSON.parse( http.response );
            data.forEach( elemento => {
                const novaLinha = criarNovaLinha( elemento.nome , elemento.email );
            });
            tabela.appendChild(novaLinha);
        }        
    }) 
    return promise;
}

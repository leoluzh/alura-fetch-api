import { clienteService } from '../service/cliente-service.js' 

( async () => {

    const recuperarURL = new URL( window.location );
    const id = recuperarURL.searchParams.get('id');
    
    const inputNome = document.querySelector('[data-nome]');
    const inputEmail = document.querySelector('[data-email]');
    
    try{
        const dados = await clienteService.detalhaCliente( id );
        inputNome.value = dados.nome
        inputEmail.value = dados.email    
    }catch(erro){
        if( console ) console.log( erro );
        window.location = '../telas/erro.html'; 
    }
    
    const formulario = document.querySelector('[data-form]');
    formulario.addEventListener('submit', async ( evento ) => {
        evento.preventDefault();
        await clienteService.atualizaCliente( id , inputNome.value , inputEmail.value );
        window.location.href = '../telas/edicao_concluida.html' ;
    });
    
})()


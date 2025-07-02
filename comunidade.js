function adicionarMensagem() {
    const input = document.getElementById("mensagem"); /*area da caixa de texto que sera preenchida*/
    const lista = document.getElementById("listaMensagens"); /*Mensagens ja enviadas*/
    const texto = input.value.trim(); /*Pega o texto da variavel input, e retira os espaços excessivos*/

     if (texto !== "") /*SE a mensagem for diferente a nenhum espaço vazio*/{
        var novaMensagem = document.createElement("li"); /*Cria um novo intem na lista*/
        novaMensagem.textContent = `“${texto}”`;
        lista.prepend(novaMensagem); /*Adiciona a mensagem digitada*/
        input.value = ""; /*Limpa a cixa de texto*/
    }
}
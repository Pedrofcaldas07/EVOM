const fundoEvm = 'imagem4.webp'; 
const fundoDpd = 'imagem1.webp';
const fundoDpm = 'Screenshot_2.png';
const fundop = document.body.style.backgroundcolor 


function aplicarFundo(urlImagem) { // Função para aplicar a imagem de fundo
    document.body.style.backgroundImage = `url('${urlImagem}')`;
}

function entradadp() { // Corresponde ao album = "Dos Prédios"
    document.getElementById("descricao").textContent = "Dos predios: Entre luzes de neon e janelas acesas na madrugada, Dos Prédios é mais do que um álbum — é um diário sonoro das ruas, das conquistas e dos sonhos que nascem no concreto. Veigh transforma cada beat em uma vista panorâmica da vida urbana, onde amor, ambição e superação se misturam. Com letras afiadas e melodias que flutuam entre o trap, o R&B e o drill, ele narra a trajetória de quem veio de baixo, mas hoje observa o mundo de cima, dos prédios, contemplando tudo aquilo que um dia parecia impossível. É um convite pra quem entende que, às vezes, o caminho mais difícil leva à vista mais bonita.";
    document.getElementById("audio1").currentTime = 60; // Define o tempo que a msc vai começar
    document.getElementById("audio1").play(); // Começa a msc
    aplicarFundo(fundoDpm); // Altera o fundo para a imagem de "Dos Prédios"
}

function entradaDpl() { // Corresponde ao album "Dos Prédios Deluxe"
    document.getElementById("descricao").textContent = "Dos Prédios Deluxe: Se o Dos Prédios já era a visão de quem venceu, o Deluxe é a cobertura — onde a vista é ainda mais ampla e os detalhes, mais luxuosos. Aqui, Veigh eleva tudo: mais vivências, mais histórias, mais conquistas. As batidas estão mais densas, as melodias mais refinadas, e as linhas carregam ainda mais peso, verdade e ostentação. É como se cada faixa fosse uma janela aberta pra quem olha pra trás e entende de onde veio, mas agora brinda o topo com quem acreditou. O Dos Prédios Deluxe não é só expansão, é a confirmação de que o menino do corre se tornou o dono do skyline.";
    document.getElementById("audio2").currentTime = 19; 
    document.getElementById("audio2").play();
    aplicarFundo(fundoDpd); 
}

function entradaEvom() { // Corresponde ao album "Eu Venci o Mundo"
    document.getElementById("descricao").textContent = "Eu venci o mundo: Um grito de quem transformou cada dificuldade em degrau. Se antes ele cantava das janelas dos prédios, agora Veigh mira as estrelas. Esse álbum carrega a energia de quem provou que o impossível é só uma palavra. As batidas são mais grandiosas, as letras transbordam maturidade, cicatrizes e vitória. É sobre não só sair do corre, mas dominar o jogo. Cada faixa é um troféu, cada verso é a lembrança de quem ele foi, de onde veio e até onde chegou. É a trilha sonora de quem nunca desistiu e hoje olha pro mundo de peito aberto e diz: eu venci.";
    document.getElementById("audio3").currentTime = 21;
    document.getElementById("audio3").play();
    aplicarFundo(fundoEvm);
}

function saida() { 
    document.getElementById("descricao").textContent = "";
    document.getElementById("audio1").pause();
    document.getElementById("audio2").pause();
    document.getElementById("audio3").pause();
    aplicarFundo(fundop)
}

// =================================================================
// 1. DADOS E CONTEÚDO DO QUIZ
// =================================================================

let perguntas = [ // Cria uma lista (Array) onde cada item é uma pergunta com suas opções e a resposta correta.
    { // Início da primeira pergunta.
        pergunta: "Em que ano as Havaianas foram criadas?", // O texto da pergunta que será exibido.
        alternativas: ["1958", "1962", "1970", "1980", "1995"], // As opções de resposta que o usuário verá.
        correta: 1, // O índice da resposta certa (1 significa "1962", pois a contagem começa em 0).
        imagem: "img/fundo1.png" // O caminho para a imagem de fundo desta pergunta.
    }, // Fim da primeira pergunta.
    { // Início da segunda pergunta.
        pergunta: "Qual o produto mais famoso da marca?", // Pergunta.
        alternativas: ["Tênis", "Sandália", "Chinelo", "Boné", "Camisa"], // Alternativas.
        correta: 2, // Resposta correta é o índice 2 ("Chinelo").
        imagem: "img/fundo2.png" // Imagem.
    }, // Fim da segunda pergunta.
    { // Início da terceira pergunta.
        pergunta: "Havaianas é uma empresa de qual país?", // Pergunta.
        alternativas: ["Argentina", "França", "EUA", "Brasil", "Japão"], // Alternativas.
        correta: 3, // Resposta correta é o índice 3 ("Brasil").
        imagem: "img/fundo3.png" // Imagem.
    }, // Fim da terceira pergunta.
    { // Início da quarta pergunta.
        pergunta: "Qual material principal dos chinelos?", // Pergunta.
        alternativas: ["Couro", "Plástico", "Algodão", "Borracha", "Metal"], // Alternativas.
        correta: 3, // Resposta correta é o índice 3 ("Borracha").
        imagem: "img/fundo4.png" // Imagem.
    }, // Fim da quarta pergunta.
    { // Início da quinta pergunta.
        pergunta: "Qual é o slogan conhecido da marca?", // Pergunta.
        alternativas: ["Todo mundo usa", "Feito pra você", "Viva o simples", "Sempre confortável", "O Brasil nos pés"], // Alternativas.
        correta: 4, // Resposta correta é o índice 4 ("O Brasil nos pés").
        imagem: "img/fundo5.png" // Imagem.
    }, // Fim da quinta pergunta.
    { // Início da sexta pergunta.
        pergunta: "Onde as Havaianas são mais populares?", // Pergunta.
        alternativas: ["Ásia", "Europa", "América do Sul", "África", "Antártida"], // Alternativas.
        correta: 2, // Resposta correta é o índice 2 ("América do Sul").
        imagem: "img/fundo6.png" // Imagem.
    }, // Fim da sexta pergunta.
    { // Início da sétima pergunta.
        pergunta: "As Havaianas ficaram famosas por serem:", // Pergunta.
        alternativas: ["Muito caras", "Muito pesadas", "Simples e acessíveis", "Difíceis de achar", "Sempre coloridas"], // Alternativas.
        correta: 2, // Resposta correta é o índice 2 ("Simples e acessíveis").
        imagem: "img/fundo7.png" // Imagem.
    }, // Fim da sétima pergunta.
    { // Início da oitava pergunta.
        pergunta: "Qual empresa é dona de Havaianas?", // Pergunta.
        alternativas: ["Nestlé", "Alpargatas", "Nike", "Adidas", "Puma"], // Alternativas.
        correta: 1, // Resposta correta é o índice 1 ("Alpargatas").
        imagem: "img/fundo8.png" // Imagem.
    }, // Fim da oitava pergunta.
    { // Início da nona pergunta.
        pergunta: "Onde as Havaianas começaram a ser fabricadas?", // Pergunta.
        alternativas: ["Bahia", "Rio de Janeiro", "São Paulo", "Paraíba", "Ceará"], // Alternativas.
        correta: 2, // Resposta correta é o índice 2 ("São Paulo").
        imagem: "img/fundo9.png" // Imagem.
    }, // Fim da nona pergunta.
    { // Início da décima pergunta.
        pergunta: "As Havaianas são famosas por qual característica?", // Pergunta.
        alternativas: ["Tecnologia avançada", "Design futurista", "Durabilidade", "Tamanho único", "Material reciclável"], // Alternativas.
        correta: 2, // Resposta correta é o índice 2 ("Durabilidade").
        imagem: "img/fundo10.png" // Imagem.
    } // Fim da décima pergunta.
]; // Fim do array de perguntas.

// =================================================================
// 2. VARIÁVEIS DE ESTADO E CONTROLE
// =================================================================

let indice = 0; // Controla qual pergunta estamos exibindo (começa na primeira, índice 0).
let pontuacao = 0; // Conta quantos pontos o jogador fez.
let tempo = 15; // Define o tempo inicial em segundos para cada pergunta.
let intervalo = null; // Guardará a referência do cronômetro (timer) para podermos pará-lo.
let erros = []; // Lista para registrar os números das questões em que o jogador errou.
let respondeu = false; // Flag (bandeira) que diz se a resposta foi selecionada nesta pergunta (True/False).

// =================================================================
// 3. SELETORES DE ELEMENTOS (Pegando os itens do HTML)
// =================================================================

const botaoIniciar = document.getElementById("botao-iniciar"); // Seleciona o botão de "Iniciar".
const telaInicial = document.querySelector(".inicial-box"); // Seleciona a caixa da tela inicial.
const app = document.querySelector(".app"); // Seleciona a caixa principal do Quiz.
const relogio = document.getElementById("time-left"); // Seleciona onde o tempo restante será mostrado.
const perguntaTitulo = document.getElementById("question"); // Seleciona onde o texto da pergunta será exibido.
const botoesResposta = document.querySelectorAll(".btn"); // Seleciona TODOS os botões de alternativa.
const botaoNext = document.querySelector(".next-btn"); // Seleciona o botão "Próxima".
const telaFinal = document.querySelector(".tela-final"); // Seleciona a caixa da tela de resultados finais.
const txtPontuacao = document.getElementById("pontuacao"); // Seleciona onde a pontuação final será escrita.
const botaoFinal = document.getElementById("botao-final"); // Seleciona o botão "Jogar de Novo" na tela final.

// <<< ELEMENTOS DE ÁUDIO >>>
const somAcerto = document.getElementById("som-acerto"); // Seleciona a tag <audio> do som de acerto.
const somErro = document.getElementById("som-erro"); // Seleciona a tag <audio> do som de erro.

// =================================================================
// 4. INICIALIZAÇÃO DA INTERFACE (Esconde as telas iniciais)
// =================================================================

app.style.display = "none"; // Oculta a tela principal do quiz.
telaFinal.style.display = "none"; // Oculta a tela de resultados.

// =================================================================
// 5. FUNÇÕES DE EVENTOS (O que acontece quando algo é clicado)
// =================================================================

// Quando clicar no botão iniciar
botaoIniciar.addEventListener("click", function(e){ // Adiciona um evento de escuta (listener) ao botão Iniciar.
    e.preventDefault(); // Impede que o botão execute o comportamento padrão (ex: recarregar a página).

    telaInicial.style.display = "none"; // Esconde a tela de introdução.
    app.style.display = "block"; // Mostra a tela do quiz.

    iniciarQuiz(); // Chama a função que prepara o jogo.
}); // Fim da função de evento do botão Iniciar.

// Função que inicia o quiz do zero
function iniciarQuiz(){ // Função que zera o estado do jogo.
    indice = 0; // Volta para a primeira pergunta.
    pontuacao = 0; // Zera a pontuação.
    erros = []; // Limpa a lista de erros.
    // Define o texto do botão "Próxima" ao iniciar o quiz
    botaoNext.textContent = "Próxima"; // Garante que o botão tenha o texto correto.
    carregarPergunta(); // Exibe a primeira pergunta na tela.
    iniciarTimer(); // Inicia o cronômetro.
} // Fim da função iniciarQuiz.

// Função que coloca a pergunta e alternativas na tela
function carregarPergunta(){ // Função responsável por atualizar a interface com novos dados.
    respondeu = false; // Reseta a flag para indicar que o usuário ainda não respondeu.
    let q = perguntas[indice]; // Pega o objeto da pergunta atual (ex: perguntas[0]).

    perguntaTitulo.textContent = q.pergunta; // Define o texto da pergunta no HTML.

    // coloca alternativas nos botões
    for (let i = 0; i < botoesResposta.length; i++){ // Loop que passa por cada um dos 5 botões de resposta.
        botoesResposta[i].textContent = q.alternativas[i]; // Coloca o texto da alternativa no botão.
        botoesResposta[i].disabled = false; // Garante que o botão pode ser clicado.
        botoesResposta[i].style.backgroundColor = ""; // Limpa qualquer cor de fundo (verde/vermelho).
        
        // quando clicar no botão, chama verificarResposta
        botoesResposta[i].onclick = function(){ // Adiciona a função a ser executada ao clicar no botão.
            verificarResposta(i); // Chama a verificação, passando o índice (0, 1, 2, etc.) do botão clicado.
        }; // Fim da função de clique do botão.
    } // Fim do loop for.

    // troca a imagem de fundo pela correta
    document.body.style.backgroundImage = "url('" + q.imagem + "')"; // Altera a imagem de fundo da página.
} // Fim da função carregarPergunta.

// Função que ativa o cronômetro
function iniciarTimer(){ // Função para controlar a contagem regressiva.
    tempo = 20; // Define o tempo inicial de 20 segundos.
    relogio.textContent = tempo; // Atualiza o número do tempo na tela.

    if (intervalo){ // Verifica se o timer anterior ainda está ativo.
        clearInterval(intervalo); // Se sim, ele é parado para evitar múltiplos timers rodando.
    } // Fim do if de parada.

    intervalo = setInterval(function(){ // Cria um novo timer que executa o código a cada 1000 milissegundos (1 segundo).
        tempo--; // Diminui o tempo em 1.
        relogio.textContent = tempo; // Atualiza o tempo na tela.

        const timerDiv = document.getElementById("timer"); // Seleciona o container do timer.

        // ativa alerta quando faltar 10 segundos ou menos
        if (tempo <= 10){ // Se faltam 10 segundos ou menos.
            timerDiv.classList.add("alerta"); // Adiciona uma classe CSS (ex: deixa o texto vermelho).
        } else { // Se o tempo for maior que 10.
            timerDiv.classList.remove("alerta"); // Remove o alerta.
        } // Fim do if/else de alerta.

        if (tempo <= 0){ // Se o tempo acabou (chegou a zero).
            clearInterval(intervalo); // Para o cronômetro.
            timerDiv.classList.remove("alerta"); // Remove o alerta.
            proximaPergunta(true); // Chama a função de avanço, indicando que o tempo esgotou (true).
        } // Fim do if de tempo esgotado.
    }, 1000); // Fim da função do timer e define o intervalo de 1000ms.
} // Fim da função iniciarTimer.


// Função que verifica a resposta clicada
function verificarResposta(indiceEscolhido){ // Função chamada quando o usuário clica em uma alternativa.
    respondeu = true; // Marca a flag 'respondeu' como true.
    let correta = perguntas[indice].correta; // Pega o índice da resposta correta da pergunta atual.

    if (indiceEscolhido === correta){ // Se o índice clicado for igual ao índice correto.
        pontuacao++; // Aumenta a pontuação em 1.
        botoesResposta[indiceEscolhido].style.backgroundColor = "green"; // Pinta o botão de verde.
        somAcerto.play(); // Toca o som de acerto.
    } // Fim do if de acerto.
    else { // Se errou
        erros.push(indice + 1); // Adiciona o número da questão errada à lista de erros.
        botoesResposta[indiceEscolhido].style.backgroundColor = "red"; // Pinta o botão clicado (errado) de vermelho.
        botoesResposta[correta].style.backgroundColor = "green"; // Pinta a resposta correta de verde para visualização.
        somErro.play(); // Toca o som de erro.
    } // Fim do else de erro.

    // desliga todos os botões de alternativa
    botoesResposta.forEach(btn => btn.disabled = true); // Desabilita todos os botões para que o usuário não mude a resposta.

    clearInterval(intervalo); // Para o timer, pois a resposta foi registrada.
} // Fim da função verificarResposta.

// Quando clicar no botão "Próxima"
botaoNext.addEventListener("click", function(){ // Adiciona um evento de clique ao botão "Próxima".
    proximaPergunta(); // Chama a função para avançar a pergunta.
}); // Fim da função de evento do botão Próxima.

// Função que passa para a próxima
function proximaPergunta(tempoEsgotado = false){ // Função que move o jogo para frente.

    // Verifica se o usuário NÃO clicou em nenhuma alternativa
    // APENAS RETORNA para que o timer continue rodando e o quiz não avance.
    if (!respondeu && !tempoEsgotado){ // Se não respondeu E o tempo não acabou.
        return; // Sai da função aqui, o timer continua rodando em segundo plano.
    } // Fim do if de segurança.

    if (tempoEsgotado){ // Se o parâmetro for true (o tempo acabou).
        erros.push(indice + 1); // Registra a questão como um erro.
    } // Fim do if.

    // continua normalmente se clicou
    indice++; // Avança para a próxima pergunta.
    
    // Garantimos que o texto do botão seja 'Próxima' ao avançar
    botaoNext.textContent = "Próxima"; // Define o texto do botão.

    if (indice >= perguntas.length){ // Verifica se o índice atingiu o final do array (quiz acabou).
        // Altera o botão para "Ver Resultados"
        botaoNext.textContent = "Ver Resultados"; // Muda o texto para a ação final.
        finalizarQuiz(); // Chama a tela de resultados.
    } // Fim do if de finalização.
    else { // Se ainda houverem perguntas.
        carregarPergunta(); // Carrega o conteúdo da nova pergunta.
        iniciarTimer(); // Reinicia o cronômetro.
    } // Fim do else.
} // Fim da função proximaPergunta.

// Tela final do quiz
function finalizarQuiz(){ // Função que exibe o resultado com feedback personalizado.
    app.style.display = "none"; // Oculta a tela do quiz.
    telaFinal.style.display = "block"; // Mostra a tela final.

    let mensagem = ""; // Variável para armazenar a mensagem personalizada.
    let acertos = pontuacao; // Armazena a quantidade de acertos.
    
    // <<< LÓGICA DE MENSAGENS PERSONALIZADAS POR PONTUAÇÃO >>>
    // Define a mensagem de feedback com base na pontuação
    if (acertos === 10) { // Se acertou todas as 10.
        mensagem = "Parabéns! Você é incrível, acertou todas as 10 questões! Um verdadeiro expert em Havaianas!"; // Mensagem de gabarito.
    } else if (acertos >= 8) { // Se acertou 8 ou 9.
        mensagem = `Excelente! Você acertou ${acertos} de 10 questões! Quase gabaritou, continue assim!`; // Mensagem de pontuação alta.
    } else if (acertos >= 5) { // Se acertou de 5 a 7.
        mensagem = `Nada mal! Você acertou ${acertos} de 10 questões. Já conhece bem a marca, mas ainda dá para melhorar!`; // Mensagem de pontuação média.
    } else if (acertos >= 1) { // Se acertou de 1 a 4.
        mensagem = `Bom esforço, você acertou ${acertos} de 10. Tente de novo para descobrir mais curiosidades!`; // Mensagem de pontuação baixa.
    } else { // Se acertou 0.
        mensagem = "Você não conhecia a Havaianas? Tente de novo! Estude as dicas e volte para gabaritar!"; // Mensagem de erro total.
    } // Fim da lógica de feedback.

    txtPontuacao.textContent = mensagem; // Exibe a mensagem personalizada.

} // Fim da função finalizarQuiz.

// Botão de jogar de novo
botaoFinal.addEventListener("click", function(){ // Adiciona evento de clique ao botão "Jogar de Novo".
    telaFinal.style.display = "none"; // Esconde a tela de resultados.
    telaInicial.style.display = "block"; // Volta para a tela inicial do jogo.
}); // Fim da função de evento do botão final.
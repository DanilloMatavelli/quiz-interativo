Objetivo do projeto

-O objetivo deste projeto é criar um quiz interativo utilizando React, onde o usuário poderá:

-Visualizar questões uma a uma.

-Responder cada questão selecionando uma das alternativas (A, B, C, D, E).

-Acompanhar o tempo gasto em cada questão.

-Avançar automaticamente para a próxima questão após selecionar uma resposta.

-Ao final, visualizar o resultado do quiz, incluindo:

-Pontuação por questão

-Respostas corretas e incorretas

-Tempo gasto em cada questão

-Resumo geral com total de acertos, percentual de acertos e menor tempo de resposta

-Além disso, o projeto tem como objetivo praticar conceitos fundamentais de React, como:

-useState: gerenciar estados do quiz, como questão atual, respostas e tempo gasto.

-useEffect: controlar efeitos colaterais, como o timer de cada questão.

-Passagem de props: enviar dados e funções entre componentes.

-CSS Modules: estilização de componentes de forma isolada.

-Componentes por responsabilidade: cada componente tem uma função específica (Header, QuestionCard, ScoreBoard).

---------------------------------------------------------------------------------------------------------

Estrutura dos componentes

O projeto está organizado em componentes reutilizáveis, cada um com sua responsabilidade:

1. Header

- Exibe informações do quiz:

- Título do quiz

- Questão atual / total de questões

- Timer da questão (contando tempo gasto)

- O timer é reiniciado automaticamente a cada nova questão.

2. QuestionCard

- Responsável por mostrar a questão atual e suas alternativas.

- Permite que o usuário selecione uma resposta clicando nos botões.

- Chama a função onAnswer do componente pai para avançar para a próxima questão e salvar a resposta.

3. ScoreBoard

- Exibe os resultados do quiz após todas as questões serem respondidas.

- Para cada questão, mostra:

- Enunciado da questão

- Resposta escolhida pelo usuário

- Resposta correta

- Pontuação da questão

- Tempo gasto para responder

- Destaque visual para perguntas corretas (verde) e incorretas (vermelho)

- Resumo geral no topo:

- Pontuação final

- Menor tempo de resposta

- Total de acertos e percentual de acertos

- Botão para reiniciar o quiz.

---------------------------------------------------------------------------------------------------------

Como executar o jogo

Clonar o repositorio abaixo, com o link: https://github.com/DanilloMatavelli/quiz-interativo

Executar o react com o comando: npm i

Para rodar o jogo execute o comando: npm run dev
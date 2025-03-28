📝 Descrição
- Nosso próximo projeto usando React será a implementação de um app de flashcards chamado Zap Recall! 
- Flashcards são cartões de estudos que contém uma pergunta/afirmação na frente e uma resposta atrás. A ideia é ler a pergunta ou afirmação e tentar - lembrar da reposta. Isso te ajuda a saber quais conteúdos você tem mais frescos na memória e quais precisam de uma revisão.
- Quando lembramos instantaneamente de um flashcard, tivemos um "Zap!"⚡
- Conjuntos de flashcards são chamados de decks. Este app deverá possuir um deck com pelo menos 8 flashcards.




🛠️ Recursos
- As imagens usadas nesse projeto estão na pasta "assets".


✅ Requisitos
Geral:
- Manipule o HTML usando somente React (sem usar o document nem o localStorage). 
- Não é permitido o uso de Context nem de Router! Veremos essas matérias mais para frente, não se preocupe 😄
- Todo o armazenamento de informações deve ser feito via estados.
- Nesse projeto, a estilização deve ser feita com styled-components obrigatoriamente.
- Você pode usar o deck que desejar com perguntas sobre qualquer tema que te inspire. Mas, caso prefira, temos aqui um exemplo de um deck sobre React:
    - Q: O que é JSX? R: Uma extensão de linguagem do JavaScript
    - Q: O React é __  R: uma biblioteca JavaScript para construção de interfaces
    - Q: Componentes devem iniciar com __  R: letra maiúscula
    - Q: Podemos colocar __ dentro do JSX R:: expressões
    - Q: O ReactDOM nos ajuda __  R: interagindo com a DOM para colocar componentes React na mesma
    - Q: Usamos o npm para __  R: gerenciar os pacotes necessários e suas dependências
    - Q: Usamos props para __ R: passar diferentes informações para componentes 
    - Q: Usamos estado (state) para __  R: dizer para o React quais informações quando atualizadas devem renderizar a tela novamente

    Em formato de objeto:

    const cards = [
	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{ question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{ question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{ question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]

- Deve ser utilizado o Vite para a criação do projeto.

Layout:
- Aplicar layout seguindo o Figma.
- Para os textos, use as fontes indicadas no layout do Figma.
- Note que as medidas do tamanho das telas no figma são apenas para referência! 
    - Apesar de o projeto ser apenas mobile, celulares diferentes possuem dimensões diferentes e seu site deve funcionar independentemente disso. 
    - A tela não deve ter tamanho fixo. Teste o seu layout com várias dimensões de tela diferentes.


Componentização e dados:
- Os elementos da página devem ser componentizados com React em arquivos separados.
- Os dados dinâmicos da página (como o deck, flashcards, etc) devem ser representados como arrays de objetos no JavaScript e renderizados na tela utilizando o map.     


Flashcards:
- Todos os flashcards devem aparecer na tela virados para baixo e indexados por números (ex: Pergunta 1, Pergunta 2), de modo a “esconder” o termo ou pergunta que ele contém.
- Ao clicar na setinha de “play” de um flashcard, a pergunta ou termo correspondente ao flashcard deve aparecer (não é necessária nenhuma animação).
- Para ver a resposta do flashcard, o usuário deve clicar no ícone de “virar” (o componente do cartão deve ser o mesmo, apenas vai ter seu layout adaptado).
- Ao virar um flashcard...
    - O usuário deve visualizar a resposta correta para a pergunta e os três botões (Não lembrei, Quase não lembrei ou Zap).
    - Ao clicar em qualquer um dos botões, o flashcard deverá ser dado como respondido e terá seu status alterado para refletir a escolha do usuário:
        - Flashcard incorreto (Não lembrei)
        - Flashcard correto com esforço (Quase não lembrei)
        - Flashcard correto imediatamente (Zap!)
    - Depois de respondida, a pergunta deverá ficar fechada e seu texto riscado com a cor correta correspondente ao seu status e um ícone. Ela não poderá ser aberta novamente.

Contador de conclusão:
- O contador deve mostrar quantas perguntas o usuário já respondeu e quantas perguntas há no total.
- Sempre que uma carta for respondida (ou seja, houve um clique nos botões), o número de flashcards respondidos deve ser atualizado.
- O número de flashcards respondidos nunca pode ser maior do que o número total.

Deploy:
- Ao terminar o projeto, você obrigatoriamente deverá realizar o deploy utilizando a Vercel.
- Coloque o link do deploy no readme do projeto.


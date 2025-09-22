# Detalhamento das Funcionalidades

Este documento descreve em detalhes cada uma das funcionalidades disponíveis no sistema **Controle de Notas**.

## Menu Principal

Ao iniciar a aplicação, o usuário se depara com um menu principal com as seguintes opções:

### 1. Atribuir Nota

-   **Descrição:** Permite que o usuário adicione ou altere a nota de um bimestre específico.
-   **Como usar:**
    1.  Escolha a opção `1` no menu.
    2.  O sistema solicitará que você digite o bimestre (um número de 1 a 4).
    3.  Em seguida, pedirá que você digite a nota (um número de 0 a 10).
-   **Resultado:**
    -   Se os dados forem válidos, a mensagem `"Nota atribuída com sucesso!"` será exibida.
    -   Se a nota máxima (10) já tiver sido atribuída, o sistema informará que não é possível alterar.
-   **Validações:**
    -   O bimestre deve ser um número inteiro entre 1 e 4.
    -   A nota deve ser um número entre 0 e 10.
    -   Caso dados inválidos sejam inseridos, uma mensagem de erro será exibida.

### 2. Consultar Nota de um Bimestre

-   **Descrição:** Exibe a nota que o aluno obteve em um bimestre específico.
-   **Como usar:**
    1.  Escolha a opção `2` no menu.
    2.  Digite o número do bimestre (1 a 4) que deseja consultar.
-   **Resultado:**
    -   O sistema exibirá a nota, por exemplo: `"Nota do 1º bimestre: 8"`.
-   **Validações:**
    -   Caso um bimestre inválido seja inserido (ex: 5), a mensagem `"Erro: O bimestre deve ser um número inteiro válido."` será mostrada.

### 3. Consultar Situação Atual

-   **Descrição:** Calcula a média de todas as notas lançadas e informa se o aluno está aprovado ou reprovado. A média para aprovação é **6.0**.
-   **Como usar:**
    1.  Escolha a opção `3` no menu.
-   **Resultado:**
    -   **Se aprovado:** `Média: 7.50 → Aprovado ✅`
    -   **Se reprovado:** `Média: 4.25 → Reprovado ❌`

### 0. Sair

-   **Descrição:** Encerra a execução da aplicação.
-   **Como usar:**
    1.  Escolha a opção `0` no menu.
-   **Resultado:**
    -   A mensagem `"Saindo..."` é exibida e o programa é finalizado.

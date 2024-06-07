# Cypress WEB Automation Test

## Pre-requisitos
* Você deve ter o Node v20 ou superior e o npm v10 instalados em sua máquina.

### **1. Desenvolvimento do Plano de Testes**

Para automatizar o plano de testes desenvolvido, foi utilizada a ferramenta de testes [Cypress](https://www.cypress.io/). Para poder executar esses casos de teste você precisa clonar este repositório GitHub e executar o seguinte comando de dentro do diretório principal para instalar as dependências: `npm install`.

Após instalar as dependências você pode executar todos os testes que são automatizados usando o comando: npm run test. Observe que esses testes serão executados localmente. Além disso, os casos de teste automatizados do Cypress estão integrados e vinculados à ferramenta de gerenciamento de testes QASE. Portanto, se você deseja executar casos de teste automatizados e ter seus resultados de execução atualizados no QASE, você pode simplesmente executar o comando npm run test:qase em sua linha de comando. Depois disso, você pode verificar a seção "execuções de teste" do QASE e o teste que acabou de ser executado, analisar os resultados, evidências e exportar relatórios detalhados dessa execução de teste.

### **2. Crie scripts de automação para os cenários**
Para automatizar o plano de testes desenvolvido, foi utilizada a ferramenta de testes [Cypress](https://www.cypress.io/). Para poder executar esses casos de teste você precisa clonar este repositório GitHub e executar o seguinte comando de dentro do diretório principal para instalar as dependências: `npm install`.

Após instalar as dependências você pode executar todos os testes do plano de testes que são automatizados usando o comando: `npm run test`. Observe que esses testes serão executados **localmente** e no modo **headless**, o que significa que você não verá os testes reais sendo executados, apenas através da linha de comando com os resultados no final. Se você deseja ver os testes rodando você só precisa usar o comando `npx cypress open` para abrir o cliente Cypress e a partir daí você pode escolher a especificação que deseja executar e poderá ver o teste rodando visualmente em uma instância do Chrome ou, dentre outros navegadores.

Além disso, os casos de teste automatizados do Cypress estão integrados e vinculados à ferramenta de gerenciamento de testes QASE. Portanto, se você deseja executar casos de teste automatizados e ter seus resultados atualizados no QASE, você pode simplesmente executar o comando `npm run test:qase` em sua linha de comando. Depois disso, você pode verificar a seção "Test Runs" do QASE para a execução de teste que acabou de ser executada, analisar os resultados, evidências e exportar relatórios detalhados dessa execução de teste.

## **3. Relatórios de Bugs**
**O relatório, resultados de testes e bugs encontrados:**
Os resultados dos testes podem ser vistos de várias maneiras, como diretamente na linha de comando, através do client Cypress quando os testes são executados por meio dele e também nas seções de "Test Runs" do QASE quando os testes são executados usando a integração QASE.
Com o QASE, os relatórios de teste são muito fáceis de obter. Ao acessar uma execução de teste QASE você pode obter o relatório através do botão "exportar" em modo PDF ou CSV, o relatório é muito detalhado e contém cada caso de teste e para os casos de teste com falha, possui suas evidências, comentários e stacktraces (quando executado de forma automatizada) conectado corretamente. Além disso, você também pode gerar um relatório completo por meio de um link público ([como este](https://app.qase.io/public/report/1384870dd7298b83745d21d98ba405e79b482fa5?tab=execution#test-cases)). É uma ótima forma de compartilhar resultados e relatórios com pessoas que não têm acesso à plataforma.

## Observações
- Arquivos como `cypress.env.json` e `cypress.config.json` devem ser arquivos adicionados ao git ignore devido às informações confidenciais que eles carregam, como variáveis ​​importantes e chaves de API, por exemplo. Neste repositório eles foram enviados apenas para este teste, para que as pessoas possam cloná-lo e executá-lo corretamente.
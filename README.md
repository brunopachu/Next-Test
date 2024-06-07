# Cypress WEB Automation Test

## Pre-requisitos
* Você deve ter o Node v20 ou superior e o npm v10 instalados em sua máquina.

### **1. Desenvolvimento do Plano de Testes**

Para automatizar o plano de testes desenvolvido, foi utilizada a ferramenta de testes [Cypress](https://www.cypress.io/). Para poder executar esses casos de teste você precisa clonar este repositório GitHub e executar o seguinte comando de dentro do diretório principal para instalar as dependências: `npm install`.

Após instalar as dependências você pode executar todos os testes que são automatizados usando o comando: npm run test. Observe que esses testes serão executados localmente. Além disso, os casos de teste automatizados do Cypress estão integrados e vinculados à ferramenta de gerenciamento de testes QASE. Portanto, se você deseja executar casos de teste automatizados e ter seus resultados de execução atualizados no QASE, você pode simplesmente executar o comando npm run test:qase em sua linha de comando. Depois disso, você pode verificar a seção "execuções de teste" do QASE e o teste que acabou de ser executado, analisar os resultados, evidências e exportar relatórios detalhados dessa execução de teste.

### **2. Crie scripts de automação para os cenários**

Os casos de teste automatizados do Cypress estão integrados e vinculados à ferramenta de gerenciamento de testes QASE. Portanto, se você deseja executar casos de teste automatizados e ter seus resultados atualizados no QASE, você pode simplesmente executar o comando `npm run test:qase` em sua linha de comando. Depois disso, você pode verificar a seção "Test Runs" do QASE para a execução de teste que acabou de ser executada, analisar os resultados, evidências e exportar relatórios detalhados dessa execução de teste.

Para acessar a plataforma você precisará clicar no link a seguir e usar estas credenciais:
- https://app.qase.io/projects
- E-mail: brunopachu12@gmail.com
- Senha: Teste@12345!

Após o login, você deve selecionar o projeto "MBWay_APP", para os casos de testes da APP (manuais e API) ou "MBWay_WEB", para os casos de testes WEB (automatizados). 
Na seção "Repository", você encontrará todos os casos de teste que foram criados a partir dos requisitos de atribuição.
Os planos de teste são construídos dentro da seção "Test Plans" e você encontrará planos de teste que foram feitos usando os casos de teste do repositório. Todos os casos de teste têm suas informações descritas com descrições, tipos, etapas e outros. Você pode acessar isso clicando nos casos de teste do repositório.
Além disso, na seção "Test runs" você encontrará execuções de testes para os casos de teste desenvolvidos. Lá será possível ver uma demonstração de como seria uma execução de teste bem-sucedida e falhada.

## **3. Relatórios de Bugs**

**O relatório, resultados de testes e bugs encontrados:**
Os resultados dos testes podem ser vistos de várias maneiras, como diretamente na linha de comando, através do client Cypress quando os testes são executados por meio dele e também nas seções de "Test Runs" do QASE quando os testes são executados usando a integração QASE.
Com o QASE, os relatórios de teste são muito fáceis de obter. Ao acessar uma execução de teste QASE você pode obter o relatório através do botão "exportar" em modo PDF ou CSV, o relatório é muito detalhado e contém cada caso de teste e para os casos de teste com falha, possui suas evidências, comentários e stacktraces (quando executado de forma automatizada) conectado corretamente. Além disso, você também pode gerar um relatório completo por meio de um link público ([como este](https://app.qase.io/public/report/1384870dd7298b83745d21d98ba405e79b482fa5?tab=execution#test-cases)). É uma ótima forma de compartilhar resultados e relatórios com pessoas que não têm acesso à plataforma.

Nestes testes foi encontrado apenas um defeito, pois conforme podem ver no relatório acima, o campo TELEFONE do formulário de registo de clientes do site aceita mais do que 9 números.

## Observações
- Arquivos como `cypress.env.json` e `cypress.config.json` devem ser arquivos adicionados ao git ignore devido às informações confidenciais que eles carregam, como variáveis ​​importantes e chaves de API, por exemplo. Neste repositório eles foram enviados apenas para este teste, para que as pessoas possam cloná-lo e executá-lo corretamente.
- Não foram realizados testes exaustivos, pois o objetivo foi apenas demonstrar conhecimento e não testar a plataforma de facto.
- Não foi possível realizar os testes automatizados Mobile, pois devido ao pouco tempo disponível para a execução da tarefa decidi focar nos testes WEB.
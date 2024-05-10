# prova-tecnica-g4f-frontend

Prova realizada para ingressar na G4F. Este repositório contem o Frontend em React

O Backend em Adonis.js se encontra no repositório:

https://github.com/vinhadelli/prova-tecnica-g4f-backend

## Como Executar

Como executar a aplicação

### Localmente

Executar o script `deploy-local` para inicializar o "banco" em json-server na porta 3000 e fazer o deploy da aplicação react na porta 4000.
Há uma versão `.ps1` para Windows e uma `.sh` para Linux.

### Com Docker

Executar o script `deploy-docker` para construir as imagens do "banco" em json-server e da aplicação React e fazer o deploy dos conteineres com o json-server escutando na porta 3000 e a aplicação escutando na porta 4000. O Script também para e deleta o container da execução anterior, caso ele ainda esteja rodando.
Há uma versão `.ps1` para Windows e uma `.sh` para Linux.

## Testando a aplicação

### Com testes automatizados

Basta executar o comando `npm test` para que sejam executados os testes utilizando Jest.

### Manualmente

Execute a aplicação e utilize o browser moderno de sua preferência para acessar a aplicação.

## Justificando a Estrutura de Pastas

A estrutura utilizada foi fortemente influênciada pela estrutura de pastas criadas na criação do projeto React.js. E ela naturalmente já segue um padrão de organização bom e não foi necessário fazer grandes alterações
Além das pastas criadas na criação do projeto React.js, foram algumas pastas para melhor organizar os arquivos.

A pasta database foi criada para armazenar o arquivo json utilizado pelo pacote json-server, que é utilizado como backend dessa aplicação.

A pasta public foi criada automaticamente e contem os arquivos HTML básicos da aplicação.

A pasta src é onde a maioria do código fonte é armazenada. Em sua raiz ela armazena alguns arquivos criados automaticamente, dentre eles, o index.tsx, arquivo de entrada da aplicação. As pastas criadas dentro da pasta src seguem abaixo:

- components - Pasta criada para armazenar os componentes customizados da aplicação. Dentro dela foi criada ainda a pasta notícia, para armazenar um componente de tabela.
- routes - Ela armazena páginas da aplicação discriminadas no React Router configurado. Contem também o arquivo teste para a funcionalidade de busca de CEP.
- service - Contém os arquivos responsáveis por se comunicar com as APIs utilizando axios.

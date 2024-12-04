# SME-SIGPAE-POC-Testes

## **Teste Automatizado**

- Este projeto visa automatizar API e Front de forma a facilitar a validação de itens de forma regressiva.
- Ele contém os casos de teste do SIGPAE.

<div align="center">
  <img src="./cypress/fixtures/images/image_sigpae.jpg" alt="Descrição da imagem" width="300">
</div>

## **Tecnologias Usadas**

![JavaScript](https://img.shields.io/badge/-Javascript-yellow) ![Cypress](https://img.shields.io/badge/-Cypress-white) ![ESLint](https://img.shields.io/badge/-ESLint-%234B32C3)

## **Pré-requisitos**

- Ter o Node instalado na maquina
- Link de instalação do Node (https://nodejs.org/en)
- Clone o projeto em seu diretório de preferência e execute `npm install` na raiz do projeto

## **Estrutura**

- Cypress
  - Fixtures (pasta com arquivo cypress padrão)
  - e2e (pasta com diretórios de teste API e Front)
  - Screenshots(Pasta onde são armazenadas as capturas de tela da execução dos testes)
  - Support(Pasta com arquivos de comandos para os testes de API e Front do SIGPAE)
  - Videos(Pasta onde ficam armazenados os vídeos da execução dos testes)
  - node_modules(Baixado automaticamente na instalação após o comando npm install)

## **Como executar os testes**

- Abra o serviço de terminal
- Acesse o diretório e após executar o comando `npm install` execute os testes com o comando abaixo:
  - Use o comando `npx cypress run` para execução completa via terminal
  - Use o comando `npx cypress open` para abrir a janela de execução e selecionar os casos a serem executados

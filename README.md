# Teste Prático - Estágio de Programação Web

## 📌 Funcionalidades
 Este projeto consiste em um formulário de cadastro simples com os seguintes campos:
  - **Nome**
  - **E-mail**
  - **Senha**
- Um botão de "Enviar" que exibe os dados preenchidos em um alerta (popup) ao clicar.
- Um botão de "Limpar" que apaga rapidamente os dados preenchidos nos campos.
  - **Observação:** A página é **responsiva**, funcionando bem tanto em dispositivos móveis quanto em desktop.

---

## 🚩 Como instalar e usar o projeto:
**Siga os passos abaixo:**
- **Baixe ou clone o projeto** em seu computador.
  - Caso baixe o projeto, extraia a pasta no local de sua preferência.
  - Para clonar via Git, use o comando abaixo:
  
     ```bash
      git clone https://github.com/AlissaGabriel/processo-seletivo.git
     ```
     
- **Acesse a pasta** extraída ou clonada e clique no arquivo chamado "index" para visualizar o formulário.
- **Preencha os campos** do formulário e clique no botão "Enviar".
- Ao clicar em "Enviar", um **alerta** exibirá os dados fornecidos. Para fechar, clique no botão "OK".
- Após fechar o alerta, os campos do formulário serão automaticamente limpos e poderão ser preenchidos novamente.
---

## 📁 Estrutura dos arquivos:
O projeto está organizado da seguinte forma:
- `index.html`: Contém o formulário com os campos Nome, E-mail e Senha, além dos botões de "Enviar" e "Limpar".
- `style.css`: Responsável pela estilização da página, tornando-a responsiva e visualmente agradável.
- `script.js`: Dentro deste arquivo, foram criadas duas funções:
  - Uma para capturar os dados do formulário e exibi-los no alerta.
  - Outra para alternar a visibilidade da senha.

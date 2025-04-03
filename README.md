# Teste Prático - Estágio de Programação Web

## 📌 Funcionalidades
 Este projeto consiste em um formulário de cadastro simples com os seguintes campos:
  - **Nome**
  - **E-mail**
  - **Senha**
    
Além disso, possui duas funcionalidades principais:
- Botão de **submit**: Um botão de "Enviar" que exibe os dados preenchidos em um alerta (popup) ao clicar.
- Botão de **reset**: Um botão de "Limpar" que apaga rapidamente os dados preenchidos nos campos.

---

## Responsividade: 
A página é **responsiva**, funcionando bem tanto em dispositivos móveis quanto em desktop.

---

## 🚩 Como instalar e usar o projeto:
Siga os passos abaixo:
- **Baixe ou clone o projeto** em seu computador.
  - Caso baixe o projeto, extraia a pasta no local de sua preferência.
  - Para clonar via Git, use o comando abaixo:
  
     ```bash
      git clone https://github.com/AlissaGabriel/processo-seletivo.git
     ```
     
- **Acesse a pasta** extraída ou clonada e abra o arquivo chamado **`index.html`** no seu navegador para visualizar o formulário.
- **Preencha os campos** do formulário e clique no botão "Enviar".
- Ao clicar em "Enviar", um **alerta (popup)** exibirá os dados fornecidos. Para fechar, clique no botão "OK".
- Após fechar o alerta, os campos do formulário serão automaticamente limpos e poderão ser preenchidos novamente.
---

## 📁 Estrutura dos arquivos:
O projeto está organizado da seguinte forma:
- **`index.html`**: Contém o formulário com os campos Nome, E-mail e Senha, além dos botões de "Enviar" e "Limpar".
- Dentro da pasta **"assets"**, há duas subpastas chamadas **"css"** e **"js"**:
    - **`css/style.css`**: Responsável pela estilização da página, tornando-a responsiva e visualmente agradável.
    - **`js/script.js`**: Dentro deste arquivo, foram criadas duas funções:
      - A primeira captura os dados do formulário e exibe um alerta (popup) com essas informações.
      - A segunda permite alternar a visibilidade da senha, permitindo ocultá-la ou mostrá-la.
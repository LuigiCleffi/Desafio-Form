"use strict";
const limparForm = () => {
  document.getElementById("logradouro").value = "";
  document.getElementById("uf").value = "";
  document.getElementById("localidade").value = "";
  document.getElementById("bairro").value = "";
};

const preencherForm = (endereco) => {
  document.getElementById("logradouro").value = endereco.logradouro;
  document.getElementById("uf").value = endereco.uf;
  document.getElementById("localidade").value = endereco.localidade;
  document.getElementById("bairro").value = endereco.bairro;
};
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async () => {
  limparForm();
  const cep = document.getElementById("cep").value;
  const url = `https://viacep.com.br/ws/${cep}/json`;
  if (cepValido(cep)) {

    const dados = await fetch(url);
    const endereco = await dados.json();
    if (endereco.hasOwnProperty("erro")) {
      document.getElementById("logradouro").value = "Cep Não Encontrado";
    } else {
      preencherForm(endereco);
    }

  } else {
    document.getElementById("logradouro").value = "Cep Incorreto";
  }
};

document.getElementById("cep").addEventListener("focusout", pesquisarCep);

document.getElementById("form").addEventListener("submit", )
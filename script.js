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
/*API CORREIOS */
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


$("#submit").click(() => {
  
  
  check();

});

function check(){
 let name = document.myform.name.value;
 let email = document.myform.email.value;
 let cpf = document.myform.cpf.value;
 let nascimento = document.myform.nascimento.value;
 let cep = document.myform.cep.value;
 let cidade = document.myform.localidade.value;
 let rua = document.myform.logradouro.value;
 let estado = document.myform.uf.value; 
 let numero = document.myform.numero.value;
 let bairro = document.myform.bairro.value;

 if(cep == "" || cep == null || email == "" || email == null || name == "" || name == null || cpf == "" || cpf == null ||
 nascimento == "" || nascimento == null || cidade == "" || cidade == null || rua == "" || rua == null || estado == "" || estado == null || numero == "" || numero == null || bairro == "" || bairro == null) {
  alert("Ops! tem campo vazio")
  }else{
  $(".modal-confirm").show(350);
    $(".blur-it, .navbar").css({
      filter: "blur(2px)",
    });
  }
  
  


 document.getElementById('nameTb').innerHTML = name;
 document.getElementById('emailTb').innerHTML = email;
 document.getElementById('cpfTb').innerHTML = cpf;
 document.getElementById('nascimentoTb').innerHTML = nascimento;
 document.getElementById('cepTb').innerHTML = cep;
 document.getElementById('cidadeTb').innerHTML = cidade;
 document.getElementById('logradouroTb').innerHTML = rua;
 document.getElementById('estadoTb').innerHTML = estado;
 document.getElementById('numeroTb').innerHTML = numero;
 document.getElementById('bairroTb').innerHTML = bairro;


 let result = [email, name, cpf, nascimento, cep, numero, estado, rua, cidade, bairro]
 for(let i = 0; i < result.length; i++ ){
  console.log(result[i])
 }
 /*OU */
 /*result.forEach((index, value)=>{
   console(value)
 })*/


 


}





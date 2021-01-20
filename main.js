var cadastro = JSON.parse(localStorage.getItem('Funcionarios'));

if (cadastro == null) { 
    cadastro = []
}

function addCadastro(){
    cadastro.push({
      'Nome': document.getElementById('nome').value,
      'CPF' : document.getElementById('cpf').value,
      'RG' : document.getElementById('rg').value,
      'Data' : document.getElementById('nascimento').value,
      'CNH' : document.getElementById('cnh').value,
      'Estado Civil' : document.getElementById('civil').value,
      'CEP' : document.getElementById('cep').value,
      'Rua' : document.getElementById('rua').value,
      'Número' : document.getElementById('numero').value,
      'Bairro' : document.getElementById('bairro').value,
      'Complemento' : document.getElementById('complemento').value,
      'Cidade' : document.getElementById('cidade').value,
      'Estado' : document.getElementById('estado').value,
        });
  const jsonFunc = JSON.stringify(cadastro);
  localStorage.setItem("Funcionarios", jsonFunc);

 if (document.getElementById('nome').value == "") {
    alert("Preencha o Nome do Funcionário.");
    nome.focus();
    localStorage.clear();
    return false;
 }

 if (document.getElementById('cpf').value == "" || document.getElementById('cpf').value < 14) {
    alert("Informe o CPF do Funcionário.");
    cpf.focus();
    localStorage.clear();
    return false;
 }

 if (document.getElementById('rg').value == "" || document.getElementById('rg').value < 12) {
    alert("Informe o RG do Funcionário.");
    rg.focus();
    localStorage.clear();
    return false;
 }

 if (document.getElementById('nascimento').value == "") {
    alert("Informe a Data de Nascimento do Funcionário.");
    nascimento.focus();
    localStorage.clear();
    return false;
 }

 if (document.getElementById('cnh').value == "") {
    alert("Selecione o Tipo de CNH do Funcionário.");
    cnh.focus();
    localStorage.clear();
    return false;
 }

 if (document.getElementById('civil').value == "") {
    alert("Selecione o Estado Cívil do Funcionário.");
    civil.focus();
    localStorage.clear();
    return false;
 }

 if (document.querySelector('#cep').value == "" || document.querySelector('#cep').value < 9) {
    alert("Informe o CEP da residência do Funcionário.");
    cep.focus();
    localStorage.clear();
    return false;
 }

 if (document.getElementById('numero').value == "") {
    alert("Informe o Número da residência do do Funcionário.");
    numero.focus();
    localStorage.clear();
    return false;
 }
 else {

    location.href=location.href
    alert("Novo Funcionario Cadastrado com Sucesso.");
    return true;
 }

}


function mascara(t, mask) {
    var i = t.value.length;
    var saida = mask.substring(1, 0);
    var texto = mask.substring(i)
    if (texto.substring(0, 1) != saida) {
        t.value += texto.substring(0, 1);
    }
}


function validarrg() {
    var rg = document.getElementById("rg").value;
    if (rg.length == 12) {
        alert("RG Válido!")
    } else {
        alert("RG Inválido!")
    }
}

function fMasc(objeto, mascara) {
    obj = objeto
    masc = mascara
    setTimeout("fMascEx()", 1)
}

function fMascEx() {
    obj.value = masc(obj.value)
}

function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
}

function ValidaCPF() {
    var RegraValida = document.getElementById("cpf").value;
    var cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
    if (cpfValido.test(RegraValida) == true) {
        alert("CPF Válido");
    } else {
        alert("CPF Inválido");
    }
}

function validaNome(){
    var Regranome = document.getElementById("nome").value;
      
    if (document.getElementById('nome').value == "") {
        alert("Preencha o Nome do Funcionário.");
        nome.focus();
        localStorage.clear();
        return false;
    }
}

function validadata (){
    const data = document.getElementById("nascimento").value;
    data = data.replace(/\//g, "-");
    var data_array = data.split("-");

    if(data_array[0].length != 4){
       data = data_array[2]+"-"+data_array[1]+"-"+data_array[0];
    }

    var hoje = new Date();
    var nasc  = new Date(data);
    var idade = hoje.getFullYear() - nasc.getFullYear();
    var m = hoje.getMonth() - nasc.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;
}



function getDadosEnderecoCEP(cep) {

    let xhr = new XMLHttpRequest()

    let url = 'https://viacep.com.br/ws/' + cep + '/json/unicode/'

    xhr.open('GET', url, true)

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
             let dadosJSONText = xhr.responseText
                let dadosJSONObj = JSON.parse(dadosJSONText)

                document.getElementById('rua').value = dadosJSONObj.logradouro
                document.getElementById('bairro').value = dadosJSONObj.bairro
                document.getElementById('cidade').value = dadosJSONObj.localidade
                document.getElementById('estado').value = dadosJSONObj.uf
            }
        }
    }
    xhr.send();
}

function mCEP(ceps){
    ceps=ceps.replace(/\D/g,"")
    ceps=ceps.replace(/^(\d{5})(\d)/,"$1-$2")
    return ceps
}

function validanumero(){
    const num = document.getElementById('numero').value;
    if (numero == '') {
        alert ('Preencha o número da residência')
    }
}


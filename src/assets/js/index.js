$(document).ready(function(){
  BuscarApi();
});


function BuscarApi() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var response = xhttp.responseText;
        const resposta = JSON.parse(response);
        resposta.map(function (item, index) {
          const elemento = document.getElementById(item.id);
          if (elemento) document.getElementById(item.id).placeholder = item.title;
        });
      }
    };
    xhttp.open(
      "GET",
      "https://marqponto-api-dev.azurewebsites.net/api/v1/info/testAndre",
      true
    );
    xhttp.send();
};

$("#formulario").submit(function () {
  if (
    $("#fdd4a9fa-dd87-4a7c-b4b5-8f9e6bb61871").val() != "" &&
    $("#0c3fb434-e180-422b-9ef4-20ede7201692").val() != "" &&
    $("#2ddbfbf3-b5bb-4848-8aea-9c06e7972e5a").val() != "" &&
    $("#fb14a494-7f9a-4bf9-9a39-1b9c1e1e76c2").val() != "" &&
    $("#472065b2-e3fa-4ece-91e3-0a09df0f5208").val() != "" &&
    $("#83d015b2-8ace-4184-876f-a97cff7592d0").val() != "" &&
    $("#679abb07-567f-4139-87de-65d46f56f69d").val() != "" &&
    $("#d3aca5cf-79c9-4377-8912-8403403ae1e6").val() != "" &&
    $("#92e10f2a-66e6-492c-a3c7-2c469a26db24").val() != "" &&
    $("#359769b9-4fe7-46fe-a009-441a2fa0cd5e").val() != "" &&
    $("#190c8425-c90d-4acd-b9d2-638cb5cc14e4").val() != "" &&
    $("#4697d3b4-ff04-4b05-9353-2c6ae33a19f3").val() != "" &&
    $("#891f10cf-1c66-410a-ac25-32cfb0783883").val() != "" &&
    $("#d0586d6e-1caa-4941-9970-25f086290bdb").val() != "" &&
    $("#7d3ee3cb-79c0-4d89-8482-be1da55b3387").val() != ""
  ) {
    var msg = "Cadastro realizado com sucesso!\r\n";
    msg += "Nome do gato: " + $("#fdd4a9fa-dd87-4a7c-b4b5-8f9e6bb61871").val() + "\r\n";
    msg += "Nome da mãe: " + $("#0c3fb434-e180-422b-9ef4-20ede7201692").val() + "\r\n";
    msg += "Nome do pai: " + $("#2ddbfbf3-b5bb-4848-8aea-9c06e7972e5a").val() + "\r\n";
    msg += "Nome da tia: " + $("#fb14a494-7f9a-4bf9-9a39-1b9c1e1e76c2").val() + "\r\n";
    msg += "Telefone: " + $("#472065b2-e3fa-4ece-91e3-0a09df0f5208").val() + "\r\n";
    msg += "Numero do RG: " + $("#83d015b2-8ace-4184-876f-a97cff7592d0").val() + "\r\n";
    msg += "Data de nascimento: " + $("#679abb07-567f-4139-87de-65d46f56f69d").val() + "\r\n";
    msg += "Estado civil: " + $("#d3aca5cf-79c9-4377-8912-8403403ae1e6").val() + "\r\n";
    msg += "Grau institucional: " + $("#92e10f2a-66e6-492c-a3c7-2c469a26db24").val() + "\r\n";
    msg += "Dados bancários: " + $("#359769b9-4fe7-46fe-a009-441a2fa0cd5e").val() + "\r\n";
    msg += "Endereço residencial: " + $("#190c8425-c90d-4acd-b9d2-638cb5cc14e4").val() + "\r\n";
    msg += "Número CNH: " + $("#4697d3b4-ff04-4b05-9353-2c6ae33a19f3").val() + "\r\n";
    msg += "Número da carteira de trabalho: " + $("#891f10cf-1c66-410a-ac25-32cfb0783883").val() + "\r\n";
    msg += "Numero do PIS ou NIS: " + $("#d0586d6e-1caa-4941-9970-25f086290bdb").val() + "\r\n";
    msg += "Registro profissional: " + $("#7d3ee3cb-79c0-4d89-8482-be1da55b3387").val() + "\r\n";
    alert(msg);
  }
});
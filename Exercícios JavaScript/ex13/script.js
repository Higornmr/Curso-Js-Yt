function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.querySelector("#txtano");
  var res = document.querySelector("div#res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert(" [ERROR] Verifique os dados e tente novamente! ");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 3) {
        //Bebe
        img.setAttribute("src", "./estilo css/bebe-menino.jpg");
      } else if (idade < 10) {
        //Criança
        img.setAttribute("src", "./estilo css/criança-homem.jpg");
      } else if (idade < 21) {
        //Adolecente
        img.setAttribute("src", "./estilo css/jovem-homem.jpg");
      } else if (idade < 60) {
        //Adulto
        img.setAttribute("src", "./estilo css/homem.jpg");
      } else {
        // Idoso
        img.setAttribute("src", "./estilo css/idoso.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (fsex[1].checked) {
        genero = "Mulher";
        if (idade >= 0 && idade < 3) {
          //Bebe
          img.setAttribute("src", "./estilo css/bebe-menina.jpg");
        } else if (idade < 10) {
          //Criança
          img.setAttribute("src", "./estilo css/criança-mulher.jpg");
        } else if (idade < 21) {
          //Adolecente
          img.setAttribute("src", "./estilo css/jovem-mulher.jpg");
        } else if (idade < 60) {
          //Adulto
          img.setAttribute("src", "./estilo css/mulher.jpg");
        } else {
          // Idoso
          img.setAttribute("src", "./estilo css/idosa.jpg");
        }
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}

function carregar() {
  var msg = window.document.querySelector("#msg");
  var img = window.document.querySelector("#image");
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    img.src = "./estilo css/manha.jpg";
    document.body.style.background = "#EDC7A9";
  } else if (hora >= 12 && hora <= 18) {
    img.src = "./estilo css/tarde.jpg";
    document.body.style.background = "#366DD2";
  } else {
    img.src = "./estilo css/noite.jpg";
    document.body.style.background = "#473656";
  }
}

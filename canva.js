function buttonFunction() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 150, 75);
  ctx.fillStyle = "#00FF00";

  ctx.fillRect(0, 0, 20, 20);

  ctx.fillRect(30, 30, 20, 20);
}


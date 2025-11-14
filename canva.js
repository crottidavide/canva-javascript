function buttonFunction() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ff9900ff";
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = "#fbff00ff";

  ctx.fillRect(0, 0, 10, 10);

  ctx.fillRect(20, 20, 10, 10);
   
    ctx.fillRect(40, 40, 10, 10);

}


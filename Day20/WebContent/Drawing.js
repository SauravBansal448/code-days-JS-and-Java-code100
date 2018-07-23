function draw() 
  {
      var canvas = document.getElementById("canvas");
      if (canvas.getContext)
      {
        var context = canvas.getContext("2d");

        context.fillStyle = "rgb(256,0,0)";
        context.fillRect (15, 10, 55, 50);
        
        context.fillStyle = "rgba(0, 0, 200, 0.6)";
        context.fillRect (35, 30, 55, 50);
      }
  }
  // generator function
  function getColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
  }

  //contrast function
  function getConstrastingColor() {
      var hex = getColor();
      hex = hex.slice(1);
      r = parseInt(hex.substring(0,2), 16);
      g = parseInt(hex.substring(2,4), 16);
      b = parseInt(hex.substring(4,6), 16);
      r = 255 - r; 
      g = 255 - g;
      b = 255 - b;
      r = r.toString(16);
      g = g.toString(16);
      b = b.toString(16);
      return "#" + r + g + b;
    }

  // sets background color style
    function setBackground() {
      var bgColor = getColor();
      var txColor = getConstrastingColor();
      document.body.style.background = bgColor;
      document.getElementById("color").style.color = txColor;
      document.getElementById("bg").innerHTML = bgColor;
      document.getElementById("txt").innerHTML = txColor;
    }

  // runs function on space key
    document.body.onkeyup = function(e){
        if(e.keyCode == 32){
          setBackground();
          document.getElementById("message").style.display="none";
          document.getElementById("color").style.display="inline";
        }
    }



// generator function
  function getColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
  }
// sets background color style
  function setBackground() {
    var bgColor = getColor();
    document.body.style.background = bgColor;
    document.getElementById("hex").innerHTML = bgColor;
  }
// runs function on space key
  document.body.onkeyup = function(e){
      if(e.keyCode == 32){
        setBackground();
      }
  }

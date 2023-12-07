window.addEventListener('load', function (e) {
  var posX = document.getElementById("pos-x"),
    posY = document.getElementById("pos-y"),
    posZ = document.getElementById("pos-z"),
    card = document.getElementById("card-1");

  window.addEventListener('mousemove', function (e) {
    rotateElement(-((45 * (e.y - window.innerHeight / 2)) / window.innerHeight / 2),
      (45 * (e.x - window.innerWidth / 2)) / window.innerWidth / 2);
  });

  function rotateElement(x, y) {
    card.style.transform = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
  }

})
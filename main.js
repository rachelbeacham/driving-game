var $car = document.querySelector('.car');
var go = null;
var numberOfSpacePresses = 0;

var data = {
  direction: 'east',
  location: {
    x: 20,
    y: 20
  },
  moving: false
};

document.addEventListener('keydown', turnCar);
document.addEventListener('keydown', function (e) {
  if (e.code === 'Space') {
    numberOfSpacePresses += 1;
    if (numberOfSpacePresses % 2 === 1) {
      go = setInterval(startCar, 16);
    }
    if (numberOfSpacePresses % 2 === 0) {
      clearInterval(go);
      data.moving = false;
    }
  }
});

function turnCar(e) {
  var keyPressed = e.key;
  if (keyPressed === 'ArrowUp') {
    $car.className = 'car north';
    data.direction = 'north';
  } else if (keyPressed === 'ArrowLeft') {
    $car.className = 'car west';
    data.direction = 'west';
  } else if (keyPressed === 'ArrowRight') {
    $car.className = 'car';
    data.direction = 'east';
  } else if (keyPressed === 'ArrowDown') {
    $car.className = 'car south';
    data.direction = 'south';
  }
}

function startCar() {
  data.location.x = data.location.x + 5;
  $car.style.left = data.location.x + 'px';
  data.moving = true;
}

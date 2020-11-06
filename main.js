var $car = document.querySelector('.car');
var go = null;

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
    if (data.moving === false) {
      go = setInterval(drive, 16);
    }
    if (data.moving === true) {
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

function drive() {
  if (data.direction === 'east') {
    data.location.x = data.location.x + 5;
    $car.style.left = data.location.x + 'px';
  }
  if (data.direction === 'south') {
    data.location.y = data.location.y + 5;
    $car.style.top = data.location.y + 'px';
  }
  if (data.direction === 'west') {
    data.location.x = data.location.x - 5;
    $car.style.left = data.location.x + 'px';
  }
  if (data.direction === 'north') {
    data.location.y = data.location.y - 5;
    $car.style.top = data.location.y + 'px';
  }
  data.moving = true;
}

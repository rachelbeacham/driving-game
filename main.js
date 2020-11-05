var $car = document.querySelector('.car')

var data = {
  direction: 'east',
  location: {
    x: '20px',
    y: '20px'
  }
}

document.addEventListener('keydown', turnCar)

function turnCar(e) {
  var keyPressed = e.key;
  if (keyPressed === 'ArrowUp') {
    $car.className = 'car north';
    data.direction = 'north'
  } else if (keyPressed ==='ArrowLeft') {
    $car.className = 'car west';
    data.direction = 'west';
  } else if (keyPressed === 'ArrowRight') {
    $car.className = 'car';
    data.direction = 'east';
  } else if (keyPressed === 'ArrowDown') {
    $car.className = 'car south';
    data.direction = 'south';
  } else {
    return;
  }
 }

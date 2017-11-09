var colorBox = document.getElementById('addColor');
var palette = document.getElementById('palette');

// Add New Color event
colorBox.addEventListener('submit', addBox);

// Add box event
function addBox(e){
  e.preventDefault();

  console.log('Hello');

  // Get color input
  var newColor = document.getElementById('newColor').value;

  console.log(newColor);

  //create new box
  var box = document.createElement('div');
  // add classes
  box.className = 'color-box';

  console.log(box);
}

var colorBox = document.getElementById('addColor');
var palette = document.getElementById('palette');

// Add New Color event
colorBox.addEventListener('submit', addBox);

//Remove Box Color event
palette.addEventListener('click', removeBox);

//Verify Hexadecimal ...
//Apply color to existing Box ...
//Ajust boxes responsively ...

// Add New Box Color
function addBox(e){
  e.preventDefault();

  // Get color input
  var newColor = document.getElementById('newColor').value;

    //create new box
  var box = document.createElement('div');
  // add classes
  box.className = 'color-box';
  console.log(box);

  //create color input
  var colorInput = document.createElement('input');
  // add classes
  colorInput.className = 'box-color box-input';

  // append to box
  box.appendChild(colorInput);

  // create close button
  var closeBtn = document.createElement('button');
  // add Class
  closeBtn.className = 'close-btn';
  // add text
  closeBtn.appendChild(document.createTextNode('X'));

  // append to box
  box.appendChild(closeBtn);

  // append box to wraper
  palette.appendChild(box);
};

// Remove Color Box

function removeBox(){
  
};

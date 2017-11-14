var colorBox = document.getElementById('addColor');
var palette = document.getElementById('palette');
var newColor = document.getElementsByClassName('new-color');

// Add New Color event
colorBox.addEventListener('submit', addBox);

//Remove Box Color event
palette.addEventListener('click', removeBox);

document.body.addEventListener('submit' , changeColor);

function changeColor(e){
  if(e.target.classList.contains('new-color')){
    for(var i = 0; i < newColor.length; i++){
      console.log(newColor[i].value);
    }
  }
};

// Add New Box Color
function addBox(e){
  e.preventDefault();

  // Get color input

    //create new box
  var box = document.createElement('div');
  box.className = 'color-box';

  //add name based on background-color
  var boxName = document.createElement('h3');
  boxName.innerHTML = document.getElementById('color-input').value;
  box.appendChild(boxName);

  //color form
  var changeColorForm = document.createElement('form');
  box.appendChild(changeColorForm);

  //create color input
  // var changeColorInput = document.createElement('input');
  // changeColorInput.className = 'box-color box-input new-color';
  // changeColorForm.appendChild(changeColorInput);

  //color submit
  var changeColorSubmit = document.createElement('input');
  changeColorSubmit.setAttribute('type' , 'color');
  changeColorSubmit.setAttribute('value' , document.getElementById('color-input').value)
  // changeColorSubmit.innerHTML = "Change Color"
  changeColorForm.appendChild(changeColorSubmit);

  // create close button
  var closeBtn = document.createElement('button');
  closeBtn.className = 'close-btn';
  closeBtn.appendChild(document.createTextNode('X'));
  box.appendChild(closeBtn);

  // append box to wraper
  palette.appendChild(box);
};

// Remove Color Box
function removeBox(e){
  if(e.target.classList.contains('close-btn')){
    if(confirm('Remove this color from palette?')){
      var box = e.target.parentElement;
      palette.removeChild(box);
    }
  }
};

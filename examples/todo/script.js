// Create variables for our form and list
var form = document.querySelectorAll('.new-item-form')[0];
var list = document.querySelectorAll('.list')[0];

// Create listener for form submissions
function formListener(e){
  // Prevent the form from submitting by default
  e.preventDefault();
  
  // Get the value from the form input
  // using the input's name attribute
  var value = form['new-item-input'].value;

  // Create new li element to insert in list
  var item = document.createElement('li');
  item.setAttribute('class', 'item');
  
  // Create checkbox to toggle item status
  var checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('class', 'item-checkbox');
  
  // Create span to wrap title of item
  var title = document.createElement('span');
  title.setAttribute('class', 'item-title');
  title.textContent = value;
  
  // Add checkbox and title to li element
  item.appendChild(checkbox);
  item.appendChild(title);

  // Add li element to list
  list.appendChild(item);
}

// Add an event listener for form submit events
form.addEventListener('submit', formListener);
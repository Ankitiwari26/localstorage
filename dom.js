console.log("hello world");

// Function to handle the deletion of an item
function handleDelete() {
  this.parentElement.remove();
}

// Function to handle form submission (adding items)
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get input values
  var itemName = document.getElementById('itemNameInput').value.trim();
  var itemDescription = document.getElementById('itemDescriptionInput').value.trim();

  // Check if both name and description are provided
  if (itemName !== '' && itemDescription !== '') {
    // Create new list item
    var newListItem = document.createElement('li');
    newListItem.classList.add('list-group-item');

    // Create delete button
    var deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'float-right', 'delete-btn');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', handleDelete);

    // Create edit button (for future functionality)
    var editButton = document.createElement('button');
    editButton.classList.add('btn', 'btn-info', 'btn-sm', 'float-right', 'edit-btn');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function () {
      // Add your edit functionality here when edit button is clicked
      console.log("Edit button clicked");
    });

    // Create item name and description elements
    var itemNameElement = document.createElement('span');
    itemNameElement.textContent = itemName;

    var itemDescriptionElement = document.createElement('p');
    itemDescriptionElement.textContent = itemDescription;

    // Append elements to the list item
    newListItem.appendChild(itemNameElement);
    newListItem.appendChild(deleteButton);
    newListItem.appendChild(editButton);
    newListItem.appendChild(itemDescriptionElement);

    // Append the new list item to the list
    document.getElementById('items').appendChild(newListItem);

    // Clear the input fields
    document.getElementById('itemNameInput').value = '';
    document.getElementById('itemDescriptionInput').value = '';

    // Store the data in local storage
    storeDataInLocalStorage(itemName, itemDescription);
  }
}

// Function to store data in local storage
function storeDataInLocalStorage(name, description) {
  // Check if local storage is supported by the browser
  if (typeof Storage !== 'undefined') {
    // Retrieve existing data from local storage
    var storedData = JSON.parse(localStorage.getItem('itemData')) || [];

    // Add new data to the array
    storedData.push({
      name: name,
      description: description
    });

    // Save the updated data back to local storage
    localStorage.setItem('itemData', JSON.stringify(storedData));
  } else {
    console.log("Local storage is not supported.");
  }
}

// Select the add item form and add the submit event listener
document.getElementById('addItemForm').addEventListener('submit', handleFormSubmit);

// Select all delete buttons and add event listeners
var deleteButtons = document.querySelectorAll('.delete-btn');
deleteButtons.forEach(function (deleteButton) {
  deleteButton.addEventListener('click', handleDelete);
});

// Select all edit buttons (for future functionality)
var editButtons = document.querySelectorAll('.edit-btn');
editButtons.forEach(function (editButton) {
  editButton.addEventListener('click', function () {
    // Add your edit functionality here when edit button is clicked
    console.log("Edit button clicked");
  });
});

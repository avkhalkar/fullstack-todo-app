// main.js

// from api.js
import {
  createItem,
  getItems,
  updateItem,
  deleteItem
} from "./api.js";

// from ui.js
import {
  renderItems,
  showErrors,
  clearErrors
} from "./ui.js";

const form = document.getElementById("item-form");
const taskInput = document.getElementById("task");
const dateInput = document.getElementById("date");
const completedInput = document.getElementById("completed");
const submitButton = document.querySelector("#item-form button[type='submit']");

let editingItemId = null;

// Helpers

function extractError(response){
  if(!response) return "Unknown error"
  if(response.message) return response.message;
  if(response.errors) return response.errors;

  return "Something went wrong";
}

// Format date for date input (YYYY-MM-DD)
function formatDateForInput(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Update button text based on edit mode
function updateButtonText() {
  if (editingItemId) {
    submitButton.textContent = "Update";
  } else {
    submitButton.textContent = "Add";
  }
}

// Load items

async function loadItems() {
    clearErrors();

    try{
      const res = await getItems();

      if(res.message){
        showErrors(res.message);
        return;
      }

      renderItems(res, handleEdit, handleDelete);
    }
    catch(err){
      showErrors("Server unreachable");
    }
}

// Create/Update

form.addEventListener("submit", async(e)=>{
  e.preventDefault();
  clearErrors();

  const data = {
    task: taskInput.value,
    date: dateInput.value,
    completed: completedInput.checked
  };

  try{
    let res;

    if(editingItemId){
      res = await updateItem(editingItemId, data);
    }
    else{
      res = await createItem(data);
    }

    if(res.message || res.errors){
      showErrors(extractError(res));
      return;
    }

    resetForm();
    loadItems();
  }
  catch(err){
    showErrors("Server error");
  }
});

// Edit

function handleEdit(item){
  
  editingItemId = item._id;

  taskInput.value = item.task;
  // Format date properly for date input
  dateInput.value = formatDateForInput(item.date);
  completedInput.checked = item.completed;
  
  // Update button text to "Update"
  updateButtonText();
  
  // Scroll to form for better UX
  form.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Delete
async function handleDelete(id) {
  clearErrors();

  try{
    const res = await deleteItem(id);

    if(res?.message){
      showErrors(res.message);
      return;
    }
    loadItems();
  }
  catch(err){
    showErrors("Delete failed");
  }
}

// Utilities

function resetForm(){
  editingItemId = null;
  form.reset();
  // Reset button text to "Add"
  updateButtonText();
}

// Init

loadItems();
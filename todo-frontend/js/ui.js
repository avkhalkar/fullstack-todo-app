const itemList = document.getElementById("item-list");
const errorBox = document.getElementById("error-box");

export function clearItems() {
  itemList.innerHTML = "";
}

export function clearErrors() {
  errorBox.innerHTML = "";
}

export function showErrors(errors){
  clearErrors();
  if(!errors)return;

  // errors can be string or array
  const list = document.createElement("ul");

  if(Array.isArray(errors)){
    errors.forEach(err=>{
      const li = document.createElement("li");
      li.textContent = err;
      list.append(li);
    });
  }
  else{
    const li = document.createElement("li");
    li.textContent = errors;
    list.appendChild(li);
  }

  errorBox.appendChild(list);
}

// Format date to readable format (removes time portion)
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  });
}

export function renderItems(items, onEdit, onDelete){
  clearItems();

  items.forEach(item=>{
    const li = document.createElement("li");
    
    // Format the date properly
    const formattedDate = formatDate(item.date);

    li.innerHTML = `
      <strong>${item.task}</strong>
      (${formattedDate})
      [${item.completed ? "Done" : "Pending"}]    
      <button data-edit>Edit</button>
      <button data-delete>Delete</button>
    `;

    li.querySelector("[data-edit]").addEventListener("click", ()=>{
      onEdit(item);
    });

    li.querySelector("[data-delete]").addEventListener("click", ()=>{
      onDelete(item._id);
    });

    itemList.appendChild(li);
  });
}
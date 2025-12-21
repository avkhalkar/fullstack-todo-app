// Backend API port
const API_PORT = 3005;

const BASE_URL = `http://localhost:${API_PORT}/api`;

export async function createItem(data) {
  const res = await fetch(`${BASE_URL}/create-item`,
    {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify(data)
    }
  );
  return res.json();
};

export async function getItems() {
  const res = await fetch(`${BASE_URL}/get-items`);
  return res.json();
};

export async function updateItem(id, data) {
  const res = await fetch(`${BASE_URL}/edit-item/${id}`, 
    {
      method:"PUT",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify(data)
    }
  );
  return res.json();
};

export async function deleteItem(id) {
  const res = await fetch(`${BASE_URL}/delete-item/${id}`, 
    {
      method:"DELETE",
    }
  );
  return res.json();
};
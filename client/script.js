const API_URL = "http://localhost:5000/api/items";

// Fetch and display items
async function loadItems() {
    const res = await fetch(API_URL);
    const data = await res.json();

    const list = document.getElementById("itemsList");
    list.innerHTML = "";

    data.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name}
            <button onclick="deleteItem(${item.id})">Delete</button>
        `;
        list.appendChild(li);
    });
}

//add new items  

async function addItem() {
    const input = document.getElementById("itemInput");
    const name = input.value.trim();

    if (!name) return alert("Please enter a name!");

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name })
    });

    input.value = "";
    loadItems();
}


 //delete items

async function deleteItem(id) {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    loadItems();
}

loadItems();


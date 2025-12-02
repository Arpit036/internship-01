const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 5000;

app.use(cors())
app.use(express.json())


let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];


app.get('/api/items', (req, res) => {
  res.json([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
  ]);
});


app.post('/api/items', (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

app.delete('/api/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    items = items.filter(item => item.id !== itemId);
    res.json({ message: 'Item deleted' });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// "server complete"
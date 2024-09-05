let juices = [
    { id: 1, name: 'Apple Juice', ingredients: ['Apples', 'Water', 'Sugar'] },
    { id: 2, name: 'Orange Juice', ingredients: ['Oranges', 'Water', 'Sugar'] },
    { id: 3, name: 'Grape Juice', ingredients: ['Grapes', 'Water', 'Sugar'] },
    { id: 4, name: 'Banana Juice', ingredients: ['Bananas', 'Milk', 'Sugar'] }
];

// Get all juices
function getAllJuices() {
    return juices;
}

// Add a new juice
function addJuice(name, ingredients) {
    const newJuice = {
        id: Date.now(),
        name: name,
        ingredients: ingredients.split(',').map(item => item.trim())
    };
    juices.push(newJuice);
    return newJuice;
}

// Update a juice by ID
function updateJuice(id, name, ingredients) {
    const juice = juices.find(juice => juice.id === id);
    if (!juice) return null;
    juice.name = name;
    juice.ingredients = ingredients.split(',').map(item => item.trim());
    return juice;
}

// Delete a juice by ID
function deleteJuice(id) {
    juices = juices.filter(juice => juice.id !== id);
}

module.exports = {
    getAllJuices,
    addJuice,
    updateJuice,
    deleteJuice
};

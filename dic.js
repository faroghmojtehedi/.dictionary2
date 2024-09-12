const dictionary = {
    "Hallo": {
        "translation": "Hello",
        "definition": "A greeting used to say hello.",
        "synonyms": ["Guten Tag", "Hi", "Servus"]
    },
    "Welt": {
        "translation": "World",
        "definition": "The earth, together with all of its countries and peoples.",
        "synonyms": ["Erde", "Globus"]
    },
    "Liebe": {
        "translation": "Love",
        "definition": "An intense feeling of deep affection.",
        "synonyms": ["Zuneigung", "Verliebtheit"]
    }
};

document.getElementById('searchBtn').addEventListener('click', () => {
    const word = document.getElementById('searchBar').value.trim();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';  // Clear previous result
    
    if (dictionary[word]) {
        const entry = dictionary[word];
        resultDiv.innerHTML = `
            <h2 class="text-2xl font-semibold">Translation: ${entry.translation}</h2>
            <p><strong>Definition:</strong> ${entry.definition}</p>
            <p><strong>Synonyms:</strong> ${entry.synonyms.join(', ')}</p>
        `;
    } else {
        resultDiv.innerHTML = '<p class="text-red-500">Word not found in the dictionary.</p>';
    }
});
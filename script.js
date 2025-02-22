// List of bands
const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Function to remove articles from band names for sorting
function stripArticle(band) {
    return band.replace(/^(a |an |the )/i, '').trim();
}

// Sorting the bands while ignoring articles
const sortedBands = bands.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));

// Get the list element
const list = document.getElementById('bands');

// Append sorted bands to the list
sortedBands.forEach((band) => {
    const li = document.createElement('li');
    li.textContent = band; // Keep original names
    list.appendChild(li);
});

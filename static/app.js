// Get search form element
const searchForm = document.getElementById('book-search-form');

// Handle form submission
searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent normal form submission
    
    // Get the user's search query
    const query = document.getElementById('search-query').value.trim();

    if (query !== "") {
        // Store the search query in localStorage for results page
        localStorage.setItem('searchQuery', query);
        
        // Redirect to results page
        window.location.href = 'results.html';
    } else {
        alert("Please enter a search term.");
    }
});

// Load results on results page
document.addEventListener('DOMContentLoaded', function() {
    const searchTerm = localStorage.getItem('searchQuery');

    if (searchTerm) {
        document.getElementById('search-term').textContent = searchTerm;
        displayResults(searchTerm);
    }
});

// Mock function to display search results
function displayResults(query) {
    const resultsContainer = document.getElementById('results-container');
    
    // Mock book results for now (replace with actual scraping later)
    const books = [
        { title: "Pride and Prejudice", downloadLink: "#" },
        { title: "Moby Dick", downloadLink: "#" },
        { title: "War and Peace", downloadLink: "#" }
    ];

    // Clear container
    resultsContainer.innerHTML = '';

    // Display each book as a result
    books.forEach(book => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        
        const title = document.createElement('h2');
        title.textContent = book.title;

        const downloadBtn = document.createElement('a');
        downloadBtn.textContent = 'Download';
        downloadBtn.href = book.downloadLink;
        downloadBtn.classList.add('download-btn');

        resultItem.appendChild(title);
        resultItem.appendChild(downloadBtn);

        resultsContainer.appendChild(resultItem);
    });
}

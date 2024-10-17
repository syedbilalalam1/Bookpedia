document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const searchTerm = document.getElementById('searchTerm').value;
    const searchField = document.getElementById('searchField').value;

    fetch('/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `searchTerm=${searchTerm}&searchField=${searchField}`
    })
    .then(response => response.json())
    .then(data => {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = ''; // Clear previous results

        if (data.length > 0) {
            data.forEach(book => {
                const bookElement = document.createElement('div');
                bookElement.innerHTML = `<h2>${book.Title}</h2>
                                         <p>Author: ${book.Author}</p>
                                         <p>Publisher: ${book.Publisher}</p>
                                         <p>Year: ${book.Year}</p>
                                         <p><a href="${book.Link}" target="_blank">Download</a></p>`;
                resultsDiv.appendChild(bookElement);
            });
        } else {
            resultsDiv.innerHTML = '<p>No results found.</p>';
        }
    });
});

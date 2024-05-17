function includeHTML(url, elementId) {
    // Use the fetch API to make the request
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            // Insert the HTML into the specified element
            document.getElementById(elementId).innerHTML = html;
        })
        .catch(e => {
            console.error('Error including HTML: ', e);
        });
}
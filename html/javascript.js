// Function to update the visitor count
function updateVisitorCount() {
    // Replace with your Azure Function URL
    var functionUrl = 'https://fn-aswbackend4124.azurewebsites.net/api/visitorCount';

    // Make a fetch request to the Azure Function
    fetch(functionUrl)
        .then(response => {
            console.log('Response:', response);
            return response.json();})
        .then(data => {
            console.log('Data:', data);
            document.getElementById('CounterVisitor').textContent = data;
        })
        .catch(error => {
            console.error('Error fetching visitor count:', error);
        });
}

// Call the function on page load
updateVisitorCount();
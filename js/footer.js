// Footer Component JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Function to load the footer component
    function loadFooterComponent() {
        const footerPlaceholder = document.getElementById('footer');
        
        if (footerPlaceholder) {
            // Fetch the footer component HTML
            fetch('/component/footer.html')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to load footer component');
                    }
                    return response.text();
                })
                .then(html => {
                    // Insert the footer HTML into the placeholder
                    footerPlaceholder.innerHTML = html;
                })
                .catch(error => {
                    console.error('Error loading footer component:', error);
                });
        }
    }
    
    // Load the footer component
    loadFooterComponent();
});
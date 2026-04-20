// Header Component JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Function to load the header component
    function loadHeaderComponent() {
        const headerPlaceholder = document.getElementById('header');
        
        if (headerPlaceholder) {
            // Fetch the header component HTML
            fetch('../component/header.html')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to load header component');
                    }
                    return response.text();
                })
                .then(html => {
                    // Insert the header HTML into the placeholder
                    headerPlaceholder.innerHTML = html;
                    
                    // Set active class for current page
                    setActiveNavLink();
                })
                .catch(error => {
                    console.error('Error loading header component:', error);
                });
        }
    }
    
    // Function to set active class on the current page's nav link
    function setActiveNavLink() {
        // Get current page path
        const currentPath = window.location.pathname;
        const filename = currentPath.substring(currentPath.lastIndexOf('/') + 1);
        
        // Find all nav links
        const navLinks = document.querySelectorAll('.nav-item.nav-link');
        
        // Remove active class from all links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Set active class on current page link
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === filename || (filename === '' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
    
    // Load the header component
    loadHeaderComponent();
});
// Function to show/hide dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    const textBox = document.querySelector('.textBox');
    const optionMenu = document.querySelector('.option');

    // Toggle the visibility of the dropdown options
    textBox.addEventListener('click', function() {
        optionMenu.style.display = optionMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Hide the dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!textBox.contains(event.target) && !optionMenu.contains(event.target)) {
            optionMenu.style.display = 'none';
        }
    });

    // Function to handle option selection
    window.show = function(value) {
        textBox.value = value;
        optionMenu.style.display = 'none';
    }
});

// Function to hide/show burger menu navigation bar
// This gets the elements that have the class name 'menuButton' and 'menu' to use them in the function below
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

// Show the menu after clicking on the button
menuButton.addEventListener('click', () => {
    menu.classList.toggle('show');
});
 // Get all menu items that have a submenu
    document.querySelectorAll('.has-submenu > .menu-item').forEach(function (menuItem) {
        // Add click event listener to each of them
        menuItem.addEventListener('click', function (e) {
            // Prevent default link behavior
            e.preventDefault();

            // Get the submenu for this item
            let submenu = this.nextElementSibling;

            // Toggle the 'active' class to show/hide the submenu
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
            } else {
                submenu.style.display = 'block';
            }
        });
    });
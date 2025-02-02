  // Function to open the modal
  function openModal() {
    document.getElementById("locationModal").style.display = "flex";
}

// Function to close the modal
function closeModal() {
    document.getElementById("locationModal").style.display = "none";
}

// Function to handle "Enable Location"
function enableLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                alert(`Your location is enabled.\nLatitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
            },
            () => {
                alert("Unable to retrieve your location.");
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Live search suggestions functionality
const searchInput = document.getElementById('searchInput');
const suggestionsBox = document.getElementById('suggestionsBox');

// Sample items to search through
const items = [
    'Fruits & Vegetables',
    'Dairy, Bread & Eggs',
    'Atta, Rice, Oil & Dals',
    'Meats, Fish & Eggs',
    'Masala & Dry Fruits',
    'Breakfast & Sauces',
    'Packaged Food',
    'Chocolates',
    'Biscuits',
    'Sweets & Snacks'
];

searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();
    suggestionsBox.innerHTML = ''; // Clear previous suggestions
    suggestionsBox.style.display = 'none'; // Hide suggestions box if no input

    if (query) {
        // Filter items based on the query
        const filteredItems = items.filter(item => item.toLowerCase().includes(query));

        if (filteredItems.length > 0) {
            suggestionsBox.style.display = 'block'; // Show suggestions box
            filteredItems.forEach(item => {
                const suggestionDiv = document.createElement('div');
                suggestionDiv.textContent = item;
                suggestionDiv.classList.add('suggestion');
                suggestionDiv.addEventListener('click', () => {
                    searchInput.value = item; // Set search bar value to selected item
                    suggestionsBox.style.display = 'none'; // Hide suggestions after selection
                });
                suggestionsBox.appendChild(suggestionDiv);
            });
        } else {
            suggestionsBox.style.display = 'none'; // Hide suggestions if no match
        }
    }
});
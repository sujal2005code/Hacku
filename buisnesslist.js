// Extended data for cities based on state selection
const stateCityMap = {
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane", "Aurangabad", "Solapur", "Amravati"],
    Karnataka: ["Bengaluru", "Mysuru", "Mangalore", "Hubli", "Belgaum", "Davangere", "Bellary", "Shimoga"],
    TamilNadu: ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli", "Tiruppur", "Erode", "Vellore"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar"],
    UttarPradesh: ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Meerut", "Varanasi", "Prayagraj", "Bareilly"],
    Haryana: ["Gurgaon", "Faridabad", "Panipat", "Ambala", "Yamunanagar", "Hisar", "Rohtak", "Sonipat"],
    AndhraPradesh: ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Rajahmundry", "Kadapa", "Tirupati"],
    Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam", "Thrissur", "Palakkad", "Alappuzha", "Kannur"],
    Delhi: ["New Delhi", "Delhi", "Noida", "Gurugram", "Ghaziabad", "Faridabad", "Dwarka", "Rohini"],
    Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga", "Bihar Sharif", "Ara"],
    // Add more states and cities as needed
};

document.getElementById('state').addEventListener('change', function() {
    const selectedState = this.value;
    const citySelect = document.getElementById('city');
    
    // Clear previous city options
    citySelect.innerHTML = '<option value="" disabled selected>Select City</option>';

    // Populate city options based on the selected state
    if (selectedState in stateCityMap) {
        stateCityMap[selectedState].forEach(function(city) {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
});

document.getElementById('businessForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const businessName = document.getElementById('businessName').value;
    const ownerName = document.getElementById('ownerName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const category = document.getElementById('category').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const description = document.getElementById('description').value;

    const businessList = document.getElementById('businessList');

    const businessItem = document.createElement('div');
    businessItem.classList.add('business-item');

    businessItem.innerHTML = `
        <h3>${businessName}</h3>
        <p><strong>Owner:</strong> ${ownerName}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Location:</strong> ${city}, ${state}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Contact:</strong> ${email} | ${phone}</p>
    `;

    businessList.appendChild(businessItem);

    // Reset form fields
    document.getElementById('businessForm').reset();
});

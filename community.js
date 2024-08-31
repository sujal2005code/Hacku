document.getElementById('joinCommunityBtn').addEventListener('click', function() {
    const formContainer = document.getElementById('communityFormContainer');
    formContainer.style.display = 'block';
});

const countryToStates = {
    India: ['Maharashtra', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Rajasthan'],
    USA: ['California', 'New York', 'Texas', 'Florida', 'Illinois'],
    UK: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
    Australia: ['New South Wales', 'Queensland', 'Victoria', 'Tasmania'],
    // Add more countries and states as needed
};

document.getElementById('country').addEventListener('change', function() {
    const country = this.value;
    const states = countryToStates[country] || [];
    const stateSelect = document.getElementById('state');
    
    stateSelect.innerHTML = '<option value="" disabled selected>Select State</option>';
    
    states.forEach(function(state) {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });
});

document.getElementById('communityForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const countryCode = document.getElementById('countryCode').value;
    const phoneNumber = document.getElementById('phone').value;
    const fullPhoneNumber = `${countryCode} ${phoneNumber}`;

    const name = document.getElementById('name').value;
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;
    const joinStateCommunity = document.getElementById('joinStateCommunity').checked ? "Yes" : "No";

    alert(`Thank you, ${name}, for joining the community!\n\nPhone: ${fullPhoneNumber}\nCountry: ${country}\nState: ${state}\nJoin State Community: ${joinStateCommunity}`);

    document.getElementById('communityForm').reset();
});

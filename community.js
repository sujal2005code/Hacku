document.getElementById('joinCommunityBtn').addEventListener('click', function() {
    const formContainer = document.getElementById('communityFormContainer');
    formContainer.style.display = 'block';
    console.log('Form container displayed');  // Debugging line
});

document.getElementById('communityForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the form from submitting in the traditional way

    console.log('Form submission triggered');  // Debugging line

    const countryCodeElement = document.getElementById('countryCode');
    const phoneElement = document.getElementById('phone');
    const nameElement = document.getElementById('name');
    const countryElement = document.getElementById('country');
    const stateElement = document.getElementById('state');
    const joinStateCommunityElement = document.getElementById('joinStateCommunity');

    // Logging each element to see which one is missing
    console.log('Country Code Element:', countryCodeElement);
    console.log('Phone Element:', phoneElement);
    console.log('Name Element:', nameElement);
    console.log('Country Element:', countryElement);
    console.log('State Element:', stateElement);
    console.log('Join State Community Element:', joinStateCommunityElement);

    if (!countryCodeElement || !phoneElement || !nameElement || !countryElement || !stateElement || !joinStateCommunityElement) {
        console.error('One or more elements are missing from the DOM');
        return;
    }

    // If all elements exist, proceed to collect the data
    const countryCode = countryCodeElement.value;
    const phoneNumber = phoneElement.value;
    const fullPhoneNumber = `${countryCode} ${phoneNumber}`;

    const name = nameElement.value;
    const country = countryElement.value;
    const state = stateElement.value;
    const joinStateCommunity = joinStateCommunityElement.checked ? "Yes" : "No";

    // Alert notification with all the form details
    alert(`Thank you, ${name}, for joining the community!\n\nPhone: ${fullPhoneNumber}\nCountry: ${country}\nState: ${state}\nJoin State Community: ${joinStateCommunity}`);

    console.log('Alert should have been displayed');  // Debugging line

    // Optionally reset the form after submission
    document.getElementById('communityForm').reset();
});

document.getElementById('joinCommunityBtn').addEventListener('click', function() {
    const formContainer = document.getElementById('communityFormContainer');
    formContainer.style.display = 'block';
});

document.getElementById('communityForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const country = document.getElementById('country').value;
    const state = document.getElementById('state').value;
    const joinStateCommunity = document.getElementById('joinStateCommunity').checked;

    alert(`Thank you, ${name}, for joining the community!`);
    document.getElementById('communityForm').reset();
});

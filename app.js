let validation_key = document.getElementById('key').value;
let form = document.getElementById('form');
let error = document.getElementById('error');

function acceptValidationKey() {
form.addEventListener('submit', (e) => {
    let messages = []
        if(validation_key !== "265nh43aar39o9p00tz5er678sd9q") {
            messages.push('Wrong validation key.');
        }
        else {
            window.location.href = 'nikolium.html';
        }
        if(messages > 0) {
            e.preventDefault();
            error.innerText = messages;
        }
})
}
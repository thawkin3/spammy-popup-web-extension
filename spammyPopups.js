alert('spammy popups is running!');

var colorOptions = ['deeppink', '#4d90fe', '#2fff82', '#50ffff'];

function addPopup() {
    var fakePopup = document.createElement('DIV');
    fakePopup.innerHTML = 'Hot singles in your area want to meet you!';
    fakePopup.style = `position: fixed; z-index: 99999999; padding: 20px; top: ${Math.random() * (window.innerHeight - 60)}px; left: ${Math.random() * (window.innerWidth - 400)}px; background: ${colorOptions[Math.floor(Math.random() * colorOptions.length)]};`;
    document.body.appendChild(fakePopup);
}

setInterval(addPopup, 1000);

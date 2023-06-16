const valvulaButton = document.getElementById('valvulaButton');
const tanqueButton = document.getElementById('tanqueButton');
const oilButton = document.getElementById('oilButton');

valvulaButton.addEventListener('click', () => {

    valvulaButton.classList.add('selected');
    tanqueButton.classList.remove('selected');
    oilButton.classList.remove('selected');

});

tanqueButton.addEventListener('click', () => {

    valvulaButton.classList.remove('selected');
    tanqueButton.classList.add('selected');
    oilButton.classList.remove('selected');

});

oilButton.addEventListener('click', () => {

    valvulaButton.classList.remove('selected');
    tanqueButton.classList.remove('selected');
    oilButton.classList.add('selected');

});

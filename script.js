let buttonOn = document.querySelector('#button-share-on');
let buttonOff = document.querySelector('#button-share-off');
let shareDiv = document.querySelector('#share-div');

buttonOn.addEventListener('click', function () {
    shareDiv.classList.toggle('hidden');
})

buttonOff.addEventListener('click', function () {
    shareDiv.classList.toggle('hidden');
})




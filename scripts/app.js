const playerConfigOverlayElement = document.getElementById("config-overlay")
const backdropElement = document.getElementById("backdrop")
const formElement = document.querySelector('form')

const editPlayer1BtnElement = document.getElementById('edit-Player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-Player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn')

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer1BtnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig)
backdropElement.addEventListener('click', closePlayerConfig)

formElement.addEventListener('submit', savePlayerConfig);
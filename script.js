const contentTypes = document.querySelectorAll('.type');
const contentItems = document.querySelectorAll('.card');

const videoOverlay = document.querySelector('.play-icon');
const videoItem = document.querySelector('.iframe');

const menuIcon = document.querySelector('.menu');
const menu = document.querySelector('aside');
const menuOverlay = document.querySelector('.overlay');
const deleteIcon = document.querySelector('.delete-circle-btn');

videoOverlay.addEventListener('click', displayVideo);
menuIcon.addEventListener('click', showMenu);
deleteIcon.addEventListener('click', hideMenu);
menuOverlay.addEventListener('click', hideMenu);


const body = document.querySelector('body');

function displayVideo() {
  hideIcon();
  showVideo();
}

function showMenu() {
  menu.classList.add('showAside');
  menuOverlay.classList.add('showOverlay');
  deleteIcon.classList.add('showDeleteIcon');
  body.classList.add('overHidden');
}

function hideMenu() {
  menu.classList.remove('showAside');
  menuOverlay.classList.remove('showOverlay');
  deleteIcon.classList.remove('showDeleteIcon');
  body.classList.remove('overHidden');
}

function hideIcon() {
  videoOverlay.classList.add('hide');
}

function showVideo() {
  videoItem.classList.add('show');
}

function removeBorder() {
  contentTypes.forEach(item => item.classList.remove('border-bottom'));
};

function selectItem() {
  removeBorder();
  removeShow();
  removeActive();
  this.classList.add('border-bottom');
  this.classList.add('active');
  const cardsToShow = document.querySelectorAll(`#${this.id}-item`);
  console.log(this.id);
  
  console.log(cardsToShow);
  
  cardsToShow.forEach(card => card.classList.add('show'));
}

function removeActive() {
  contentTypes.forEach(item => item.classList.remove('active'));
}



function removeShow() {
  contentItems.forEach(item => item.classList.remove('show'));
}


contentTypes.forEach(item => {
  item.addEventListener('click', selectItem);
})


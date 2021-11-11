let toggleBtn = document.querySelector('.block__close');
let replaceBtn = document.querySelector('.block__replace');
let firstBlock = document.querySelector('.block__item_full');
let secondBlock = document.querySelector('.block__item_two');
let thirdBlock = document.querySelector('.block__item_three');
let modal = document.querySelector('.content__modal');
let closeButton = document.querySelector('.content__modal-close');

closeButton.addEventListener('click', () => modal.classList.remove('content__modal_opened'));
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('content__modal_opened');
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === 'Escape') {
    modal.classList.remove('content__modal_opened');
  }
})

let delayPopup = 1000;
setTimeout("modal.classList.add('content__modal_opened')", delayPopup);


toggleBtn.addEventListener('click', () => {
  firstBlock.classList.toggle('block__item_toggle');
});

function swapElements(el1, el2) {
  let prev1 = el1.previousSibling;
  let prev2 = el2.previousSibling;

  prev1.after(el2);
  prev2.after(el1);
}

replaceBtn.addEventListener('click', () => {
  swapElements(thirdBlock, secondBlock)
})
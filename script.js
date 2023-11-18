'use strict';

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');
//modal1
const modal1 = document.querySelector('.modal1');
const btnsOpenModal1 = document.querySelector('.show-modal1');
const btnCloseModal1 = document.querySelector('.close-modal1');
const overlay1 = document.querySelector('.overlay1');

//modal2
const modal2 = document.querySelector('.modal2');
const btnsOpenModal2 = document.querySelector('.show-modal2');
const btnCloseModal2 = document.querySelector('.close-modal2');
const overlay2 = document.querySelector('.overlay2');

//modal3
const modal3 = document.querySelector('.modal3');
const btnsOpenModal3 = document.querySelector('.show-modal3');
const btnCloseModal3 = document.querySelector('.close-modal3');
const overlay3 = document.querySelector('.overlay3');

// const openModal = function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   // console.log(e.key);

//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });

//modal1
btnsOpenModal1.addEventListener('click', function () {
  modal1.classList.remove('hidden');
  overlay1.classList.remove('hidden');
});

btnCloseModal1.addEventListener('click', function () {
  modal1.classList.add('hidden');
  overlay1.classList.add('hidden');
});
//end modal1

//modal2
btnsOpenModal2.addEventListener('click', function () {
  modal2.classList.remove('hidden');
  overlay2.classList.remove('hidden');
});

btnCloseModal2.addEventListener('click', function () {
  modal2.classList.add('hidden');
  overlay2.classList.add('hidden');
});
//end modal2

//modal3
btnsOpenModal3.addEventListener('click', function () {
  modal3.classList.remove('hidden');
  overlay3.classList.remove('hidden');
});

btnCloseModal3.addEventListener('click', function () {
  modal3.classList.add('hidden');
  overlay3.classList.add('hidden');
});
//end modal3

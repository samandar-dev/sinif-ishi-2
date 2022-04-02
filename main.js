const text = document.querySelector('.text');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const tBtn1 = document.querySelector('.t-btn1');
const tBtn2 = document.querySelector('.t-btn2');
const tBtn3 = document.querySelector('.t-btn3');
const tBtn4 = document.querySelector('.t-btn4');
const tBtn5 = document.querySelector('.t-btn5');
const btnSpan1 = document.querySelector('.btn-span1');
const btnSpan2 = document.querySelector('.btn-span2');
const btnSpan3 = document.querySelector('.btn-span3');
let count = 1

btn1.addEventListener('click', () => {
  btn2.classList.remove('act');
  btnSpan2.classList.remove('act-span');
  btn3.classList.remove('act');
  btnSpan3.classList.remove('act-span');

  text.textContent = 'Choose title content';
  tBtn1.classList.remove('d-none');
  tBtn2.classList.add('d-none');
  tBtn3.classList.add('d-none');
  tBtn4.classList.add('d-none');
  tBtn5.classList.add('d-none');
  count = 1
})

btn2.addEventListener('click', () => {
  if (count == 1) {
    btn2.classList.add('act');
    btnSpan2.classList.add('act-span');
    btn3.classList.remove('act');
    btnSpan3.classList.remove('act-span');

    text.textContent = 'Choose description content';
    tBtn1.classList.add('d-none');
    tBtn2.classList.remove('d-none');
    tBtn3.classList.remove('d-none');
    tBtn4.classList.add('d-none');
    tBtn5.classList.add('d-none');
    count = 2
  }
})

btn3.addEventListener('click', () => {
  if (count == 2) {
    btn2.classList.add('act');
    btnSpan2.classList.add('act-span');
    btn3.classList.add('act');
    btnSpan3.classList.add('act-span');

    text.textContent = 'Choose data content';
    tBtn1.classList.add('d-none');
    tBtn2.classList.add('d-none');
    tBtn3.classList.add('d-none');
    tBtn4.classList.remove('d-none');
    tBtn5.classList.remove('d-none');
    count = 1
  }
})

tBtn1.addEventListener('click', () => {
  btn2.classList.add('act');
  btnSpan2.classList.add('act-span');
  btn3.classList.remove('act');
  btnSpan3.classList.remove('act-span');

  text.textContent = 'Choose description content';
  tBtn1.classList.add('d-none');
  tBtn2.classList.remove('d-none');
  tBtn3.classList.remove('d-none');
  tBtn4.classList.add('d-none');
  tBtn5.classList.add('d-none');
})

tBtn2.addEventListener('click', () => {
  btn2.classList.remove('act');
  btnSpan2.classList.remove('act-span');
  btn3.classList.remove('act');
  btnSpan3.classList.remove('act-span');

  text.textContent = 'Choose title content';
  tBtn1.classList.remove('d-none');
  tBtn2.classList.add('d-none');
  tBtn3.classList.add('d-none');
  tBtn4.classList.add('d-none');
  tBtn5.classList.add('d-none');
})

tBtn3.addEventListener('click', () => {
  btn2.classList.add('act');
  btnSpan2.classList.add('act-span');
  btn3.classList.add('act');
  btnSpan3.classList.add('act-span');

  text.textContent = 'Choose data content';
  tBtn1.classList.add('d-none');
  tBtn2.classList.add('d-none');
  tBtn3.classList.add('d-none');
  tBtn4.classList.remove('d-none');
  tBtn5.classList.remove('d-none');
})

tBtn4.addEventListener('click', () => {
  btn2.classList.add('act');
  btnSpan2.classList.add('act-span');
  btn3.classList.remove('act');
  btnSpan3.classList.remove('act-span');

  text.textContent = 'Choose description content';
  tBtn1.classList.add('d-none');
  tBtn2.classList.remove('d-none');
  tBtn3.classList.remove('d-none');
  tBtn4.classList.add('d-none');
  tBtn5.classList.add('d-none');
})

tBtn5.addEventListener('click', () => {
  btn2.classList.add('act');
  btnSpan2.classList.add('act-span');
  btn3.classList.add('act');
  btnSpan3.classList.add('act-span');

  text.textContent = 'Ok, were done. Thanks for sending is your data!';
  tBtn1.classList.add('d-none');
  tBtn2.classList.add('d-none');
  tBtn3.classList.add('d-none');
  tBtn4.classList.add('d-none');
  tBtn5.classList.add('d-none');
})

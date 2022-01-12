const countEl = document.querySelector('#counter-el');
const saveEl = document.querySelector('#save-el');
const btnIncrement = document.querySelector('#btnIncrement');
const btnSaveInf = document.querySelector('#btnSaveInf');
const btnDelete = document.querySelector('#btnDelete');
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  saveEl.textContent += count + ' - ';
  countEl.textContent = 0;
  count = 0;
}

function deleteCountEntries() {
  saveEl.textContent = '';
  countEl.textContent = 0;
  count = 0;
}

btnIncrement.addEventListener('click', () => increment());

btnSaveInf.addEventListener('click', () => save());

btnDelete.addEventListener('click', () => deleteCountEntries());

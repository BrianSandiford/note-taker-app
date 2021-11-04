'use strict';
let count = 1;
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelector('.show-modal');
const modalText = document.querySelector('.modal-text');

const openModal = function (note) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  modalText.textContent = note;
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

document.querySelector('#addnote').addEventListener('click', function () {
  const note = document.querySelector('#note').value;
  const table = document.getElementById('table');
  const a = String(document.getElementById('table').rows[1].textContent);
  const b = 'No notes added yet!';
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  const btnCloseModal = document.querySelector('.close-modal');
  const btnsOpenModal = document.querySelector('.show-modal');

  if (a.includes(b)) {
    table.deleteRow(1);
    const row = table.insertRow(1);
    const cell1 = row.insertCell(0);
    cell1.innerHTML = `<td>
    <h4>Note ${count}</h4>
    <p class="fifty-chars">${note}</p>
    <button class="show-modal" id="viewdetail">View Detail</button>
  </td>`;
    count++;
  } else {
    const row = table.insertRow(1);
    const cell1 = row.insertCell(0);
    cell1.innerHTML = `<td>
    <h4>Note ${count}</h4>
    <p class="fifty-chars">${note}</p>
    <button class="show-modal" id="viewdetail">View Detail</button>
  </td>`;
    count++;
  }

  const allRows = document.querySelectorAll('tr');

  for (let i = 0; i < allRows.length; i++) {
    allRows[i].addEventListener('mouseover', function () {
      allRows[i]
        .querySelector('.show-modal')
        .addEventListener('click', function () {
          openModal(note);
        });
    });
  }
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
});

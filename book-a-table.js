const text = 
document.getElementById('text-title');
const title = "Welcome to Mother's hands Pizza!";
let index = 1;


setInterval(writeText, 150);

function writeText() {
    text.innerText = title.slice(0, index);
    index++;
        if (index > title.length) {
            index = 1;
        }
}

const bookAtableBtn = document.getElementById('book-a-table')
const addBookAtableModal = document.getElementById('add-modal');
const backdrop = document.getElementById('backdrop');
const cancelModalBtn = document.querySelector('.btn--passive');
const confirmBookAtable = document.querySelector('.btn--success');


bookAtableBtn.addEventListener('clik', showBookAtableForm);

function showBookAtableForm() {
 addBookAtableModal.classList.add('visible');
 backdrop.classList.add('visible');
}

confirmBookAtable.addEventListener('click', makeAreservation);

function makeAreservation() {
    let addName = document.getElementById('name');
    let addEmail = document.getElementById('e-mail');
    let addData = document.getElementById('data');
    let addOra = document.getElementById('ora');
    
    if (checkIfEmptyInput(addName) || checkIfEmptyInput(addEmail) || checkIfEmptyInput(addData) || checkIfEmptyInput(addOra) );
        alert('Va rugam sa completati toate campurile formularului');

}



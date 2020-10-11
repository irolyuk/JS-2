const btnAdd = document.querySelector('button[data-add]');
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('.js-output span');
const btnRst = document.querySelector('button[data-reset]');
let total = 0;

btnAdd.addEventListener('click', function () {
    console.log('click hehehe');
    const value = Number(valueInput.value);
    console.log(valueInput.value);


    total += value;
    outputEl.textContent = total;
    
    valueInput.value = '';
});

btnRst.addEventListener('click', function() {
    total = 0;
    outputEl.textContent = 0;
})
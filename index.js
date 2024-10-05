var amount = document.getElementById("amount");
var note = document.getElementById("note");
var expense = document.getElementById("expense");
var income = document.getElementById("income");
var balance = document.getElementById("balance");
var historyItem = document.getElementById('history-item');

function credit(amount, note) {
    if(amount.value === ''){
        alert("You haven't submitted any value. Enter any value");
    }
    else if (parseInt(amount.value) < 0) {
        balance.innerText = parseInt(balance.innerText) + parseInt(amount.value);
        expense.innerText = parseInt(expense.innerText) - parseInt(amount.value);        
    } 
    else {
        income.innerText = parseInt(income.innerText) + parseInt(amount.value);
        balance.innerText = parseInt(balance.innerText) + parseInt(amount.value);
        historyAppend(amount, note);
    }
   
}

function historyAppend(amount, note){
    note = document.getElementById('note');
    historyItem = document.getElementById('historyNote');
    historyItem = note.value;
    if(amount.value <= 0){
        alert("You have submitted any value. Enter any value");    }
    else{

        document.getElementById('history-items').innerHTML += `<span class="history-item" id="history-item">
        <p id="historyNote">${historyItem}</p>
        <p id="historyAmount">₹${amount.value}</p>
        </span>`
        amount.value = '';
        note.value = '';
    }
}
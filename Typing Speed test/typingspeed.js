let quoteDisplayEl = document.getElementById('quoteDisplay');
let counterEl = document.getElementById('counter');
let quoteInputEl = document.getElementById('quoteInput');
let submitBtnEl = document.getElementById('submitBtn');
let result = document.getElementById('result');
let resetBtn = document.getElementById('resetBtn');
let spinnerEl = document.getElementById('spinner');
let speedTypingTest = document.getElementById('quoteTestContainer');

let options = {
    method: 'GET'
};
speedTypingTest.classList.add('d-none');
spinnerEl.classList.remove('d-none');

fetch('https://apis.ccbp.in/random-quote', options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        console.log(jsonData);
        speedTypingTest.classList.remove('d-none');
        spinnerEl.classList.add('d-none');
        quoteDisplayEl.textContent = jsonData.content;
        let uniqId = setInterval(function() {
            counterEl.textContent = parseInt(counterEl.textContent) + 1;
        }, 1000);
        submitBtnEl.addEventListener('click', function() {
            if (quoteInputEl.value !== "") {
                if (quoteInputEl.value === quoteDisplayEl.textContent) {
                    clearInterval(uniqId);
                    result.textContent = 'You typed the sentense in ' + counterEl.textContent + ' seconds';
                } else {
                    result.textContent = 'You typed incorrect sentense';
                }
            }
        });
        resetBtn.addEventListener('click', function() {
            let options = {
                method: 'GET'
            };
            speedTypingTest.classList.add('d-none');
            spinnerEl.classList.remove('d-none');
            fetch('https://apis.ccbp.in/random-quote', options)
                .then(function(response) {
                    return response.json();
                })
                .then(function(jsonData) {
                    console.log(jsonData);
                    speedTypingTest.classList.remove('d-none');
                    spinnerEl.classList.add('d-none');
                    quoteDisplayEl.textContent = jsonData.content;
                    counterEl.textContent = 0;
                });
            quoteInputEl.value = '';
        });
    });
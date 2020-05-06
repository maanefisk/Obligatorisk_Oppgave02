// controller (ingenting her ennå)
function chooseBar(barNo) {
    chosenBar = chosenBar == barNo ? null : barNo;
    show();
    return;
    }

function addNewBar() {
    checkValue();
    if (inputValue > 0) { numbers.push(inputValue); }
    show();
    }

function removeBar() {
    numbers.splice((chosenBar - 1), 1);
    show();
    }

function changeABar() {
    checkValue();
    numbers[chosenBar-1] = inputValue;
    show();
    }


function checkValue() {
    if (inputValue > 10 || inputValue < 1){alert('Invalid input number');}
    }


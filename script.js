// controller (ingenting her ennå)
function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}

function choosery(barNo,number) {
    theHeight = number;
    chosenBar = chosenBar == barNo ? null : barNo;
    inputValue = theHeight;
    stateOfButton()
        show();
    }

function addNewBar() {
    checkValue();
    var theInput = inputValue;
    if (theInput > 0) { numbers.push(theInput); }
    show();
    }

function removeBar() {
    numbers.splice((chosenBar - 1), 1);
    show();
    }

function changeABar() {
    checkValue();
    var thePosition = numbers.indexOf(theHeight)+1;
    numbers[thePosition-1] = inputValue;
    show();
    }

function stateOfButton() {
    (chosenBar != undefined ? state = 'enabled' : state = undefined)
    }

function checkValue() {
    if (inputValue > 10 || inputValue < 1){alert('Unvalid input number');}
    }


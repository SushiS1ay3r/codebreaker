/**CREDITS TO https://codepen.io/MkDay/pen/YzryPwE FOR THE CLOCK DISPLAY*/

let topBox = document.querySelector("#top-box");

let bottomBox = document.querySelector("#bottom-box");

let on = "Snow";
let off = "transparent";

let zero = () => {
  topBox.style.borderTopColor = on;
  topBox.style.borderLeftColor = on;
  topBox.style.borderRightColor = on;
  topBox.style.borderBottomColor = off;

  bottomBox.style.borderTopColor = off;
  bottomBox.style.borderLeftColor = on;
  bottomBox.style.borderRightColor = on;
  bottomBox.style.borderBottomColor = on;
};

let one = () => {
  topBox.style.borderTopColor = off;
  topBox.style.borderLeftColor = off;
  topBox.style.borderRightColor = on;
  topBox.style.borderBottomColor = off;
  topBox.style.borderBottomColor = off;

  bottomBox.style.borderTopColor = off;
  bottomBox.style.borderLeftColor = off;
  bottomBox.style.borderRightColor = on;
  bottomBox.style.borderBottomColor = off;
};

let two = () => {
  topBox.style.borderTopColor = on;
  topBox.style.borderLeftColor = off;
  topBox.style.borderRightColor = on;
  topBox.style.borderBottomColor = on;

  bottomBox.style.borderTopColor = on;
  bottomBox.style.borderLeftColor = on;
  bottomBox.style.borderRightColor = off;
  bottomBox.style.borderBottomColor = on;
};

let three = () => {
  topBox.style.borderTopColor = on;
  topBox.style.borderLeftColor = off;
  topBox.style.borderRightColor = on;
  topBox.style.borderBottomColor = on;

  bottomBox.style.borderTopColor = on;
  bottomBox.style.borderLeftColor = off;
  bottomBox.style.borderRightColor = on;
  bottomBox.style.borderBottomColor = on;
};

let four = () => {
  topBox.style.borderTopColor = off;
  topBox.style.borderLeftColor = on;
  topBox.style.borderRightColor = on;
  topBox.style.borderBottomColor = on;

  bottomBox.style.borderTopColor = on;
  bottomBox.style.borderLeftColor = off;
  bottomBox.style.borderRightColor = on;
  bottomBox.style.borderBottomColor = off;
};

let five = () => {
  topBox.style.borderTopColor = on;
  topBox.style.borderLeftColor = on;
  topBox.style.borderRightColor = off;
  topBox.style.borderBottomColor = on;

  bottomBox.style.borderTopColor = on;
  bottomBox.style.borderLeftColor = off;
  bottomBox.style.borderRightColor = on;
  bottomBox.style.borderBottomColor = on;
};

let six = () => {
  topBox.style.borderTopColor = on;
  topBox.style.borderLeftColor = on;
  topBox.style.borderRightColor = off;
  topBox.style.borderBottomColor = on;

  bottomBox.style.borderTopColor = on;
  bottomBox.style.borderLeftColor = on;
  bottomBox.style.borderRightColor = on;
  bottomBox.style.borderBottomColor = on;
};

let seven = () => {
  topBox.style.borderTopColor = on;
  topBox.style.borderLeftColor = on;
  topBox.style.borderRightColor = on;
  topBox.style.borderBottomColor = off;

  bottomBox.style.borderTopColor = off;
  bottomBox.style.borderLeftColor = off;
  bottomBox.style.borderRightColor = on;
  bottomBox.style.borderBottomColor = off;
};

let eight = () => {
  topBox.style.borderTopColor = on;
  topBox.style.borderLeftColor = on;
  topBox.style.borderRightColor = on;
  topBox.style.borderBottomColor = on;

  bottomBox.style.borderTopColor = on;
  bottomBox.style.borderLeftColor = on;
  bottomBox.style.borderRightColor = on;
  bottomBox.style.borderBottomColor = on;
};

let nine = () => {
  topBox.style.borderTopColor = on;
  topBox.style.borderLeftColor = on;
  topBox.style.borderRightColor = on;
  topBox.style.borderBottomColor = on;

  bottomBox.style.borderTopColor = on;
  bottomBox.style.borderLeftColor = off;
  bottomBox.style.borderRightColor = on;
  bottomBox.style.borderBottomColor = on;
};

function playNumbers() {
  setTimeout(zero, 0);
  setTimeout(one, 1000);
  setTimeout(two, 2000);
  setTimeout(three, 3000);
  setTimeout(four, 4000);
  setTimeout(five, 5000);
  setTimeout(six, 6000);
  setTimeout(seven, 7000);
}


/** ends here */


/** my functions */
function clock()
{
    totalTurns--;
    
    if (totalTurns === 7)
    {
        setTimeout(seven);
    }

    if (totalTurns === 6)
    {
        setTimeout(six);
    }

    if (totalTurns === 5)
    {
        setTimeout(five);
    }

    if (totalTurns === 4)
    {
        setTimeout(four);
    }

    if (totalTurns === 3)
    {
        setTimeout(three);
    }

    if (totalTurns === 2)
    {
        setTimeout(two);
    }

    if (totalTurns === 1)
    {
        setTimeout(one);
    }

    if (totalTurns === 0)
    {
        setTimeout(zero);
    }
}

// function vaultNumber(number)
// {
//     document.getElementById("vaultDisplay").value = number; 
// }

function random3DigitNumber()
{
    while (true) 
    {
        const randomNumber = Math.floor(Math.random() * (333 - 111) + 111);
        const numString = randomNumber.toString();

        if (/^[123]{3}$/.test(numString)) // https://www.w3schools.com/jsref/jsref_regexp_test.asp <---- (super cool test() function I learned back then)
        {
            return randomNumber;
        }
    }
}

function initialization() 
{
    totalTurns = 7; 
    setTimeout(seven);
    randomNumber = random3DigitNumber();
}

function resetGame()
{
    initialization();
    clearButton();
    var logMessage = document.getElementById("logContainer");
    logMessage.textContent = "";
}

function compareNumbers(number)
{
    console.log(randomNumber);
    if (number < randomNumber)
    {
        logger("Your inputted number: " + number + "." + " The vault number is higher.");
        clock();

        if (totalTurns === 0)
        {
            logger("Sorry you have lost the game :(, I will restart the game for you.");
            logger("The answer was " + randomNumber + ".");
            setTimeout(resetGame, 5000);
        }
    }

    else if (number > randomNumber)
    {
        logger("Your inputted number: " + number + "." + " The vault number is lower.");
        clock();

        if (totalTurns === 0)
        {
            logger("Sorry you have lost the game :(, I will restart the game for you.");
            logger("The answer was " + randomNumber + ".");
            setTimeout(resetGame, 5000);
        }
    }

    else
    {
        logger("WOHOOO!!!!! Correct! BINGO, YOU GOT INTO THE VAULT FILLED WITH DIAMONDS!!!");
        setTimeout(resetGame, 5000);
    }
}

function addDigits(number)
{
    var vaultDisplay = document.getElementById("vaultDisplay");
    var userNum = vaultDisplay.value;
    
    
    vaultDisplay.value += number;
    
    if(userNum.length+1 === 3)
    {
        
        var userInput = parseInt(userNum + number);
        setTimeout(clearButton, 100);
        
        compareNumbers(userInput);
    }

    console.log(userNum.length);


    console.log(number);


}

function logger(messageGiven)
{
    var logMessage = document.getElementById("logContainer");
    var infor = document.createElement("p");
    infor.textContent = "The computer says - " + messageGiven;
    logMessage.appendChild(infor);


}

function clearButton()
{
    var vaultDisplay = document.getElementById("vaultDisplay");
    console.log("testing")
    vaultDisplay.value = "";
}

window.onload = initialization;


//Get String's Value - Controller/
function getValue(){
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
}

//Reverse String - Model/Logic
function reverseString(userString){
    let revString = [];
    //let name = namy;
    //name[0] = "n";
    //name[3] = "y";
    //last position = name.length - 1

    //reverse using forLoop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }

    return revString;
}

//Display Revered String - View/Display
function displayString(revString){
    //write message
    document.getElementById("msg").innerHTML = `Your String reversed is: ${revString}`;
    //show alert
    document.getElementById("alert").classList.remove("invisible");
}
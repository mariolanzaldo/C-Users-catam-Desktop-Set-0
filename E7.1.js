function hexTorgb(hex) {
    let validInput = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!validInput) {
        throw new Error('Invalid Input')
    }

    let r = parseInt(validInput[1], 16);
    let g = parseInt(validInput[2], 16);
    let b = parseInt(validInput[3], 16);
    let rgb = console.log(`rgb(${r},${g},${b})`);
    return rgb;
}

hexTorgb("#0033ff");

function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
       // Regular expression to match 'pet_' followed by exactly 4 numbers and then alphabet characters
       let validInput = /^pet_\d{4}[A-Z][a-zA-Z]+$/;

    // Check if input matches the pattern
    if (validInput.test(input)) {
        result = 'Valid Syntax 🟢';
    } else {
        result = 'Invalid Syntax 🔴';
    }
            document.getElementById('result').innerText = result;
}



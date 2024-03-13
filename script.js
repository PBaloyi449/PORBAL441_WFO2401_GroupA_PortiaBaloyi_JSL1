function validateSyntax() {
    // Get the input value from the HTML input element
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
       let validInput = /^pet_(200[0-9]|201[0-9]|202[0-4])[A-Z][a-zA-Z]+$/;

    // Check if input matches the pattern
    if (validInput.test(input)) {
        result = 'Valid Syntax 🟢';
    } else {
        result = 'Invalid Syntax 🔴';
    }
    // Update the content of the HTML element to display the validation result
            document.getElementById('result').innerText = result;
}



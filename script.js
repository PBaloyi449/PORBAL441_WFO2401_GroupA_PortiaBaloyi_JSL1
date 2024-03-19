function validateSyntax() {
    // Get the input value from the HTML input element
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // Function to validate input
    function isValidInput(input) {
        // Check if input starts with "pet_"
        if (!input.startsWith("pet_")) {
            return false;
        }

        // Extract year portion from input
        // Extract year portion from input
        const yearMatch = input.match(/^pet_(20[0-2][0-9])/);
        if (!yearMatch) {
            return false;
        }
        const year = yearMatch[1];

        // Check if year is within the valid range
        if (parseInt(year) < 2000 || parseInt(year) > 2024) {
            return false;
        }

        // Check if next character after year is a capital letter
        const capitalLetter = input.charAt(8);
        if (capitalLetter !== capitalLetter.toUpperCase()) {
            return false;
        }

        // Check if the rest of the string contains only alphabetic characters
        const restOfString = input.substring(9);
        if (!/^[a-zA-Z]+$/.test(restOfString)) {
            return false;
        }

        // If all checks pass, input is valid
        return true;
    }

    // Define the regular expression pattern
    //let validInput = /^pet_(20[0-2][0-4])[A-Z][a-zA-Z]+$/;

    // Check if input matches the pattern
    if (isValidInput(input)) {
        result = 'Valid Syntax 🟢';
    } else {
        result = 'Invalid Syntax 🔴';
    }
    // Update the content of the HTML element to display the validation result
    document.getElementById('result').innerText = result;
}

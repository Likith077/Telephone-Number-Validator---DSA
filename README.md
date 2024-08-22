
# Telephone Number Validator

This project is a simple and user-friendly web application designed to validate US telephone numbers. It checks whether a given input is a valid US phone number and displays the result accordingly.

## Features

- **Real-time Validation:** Validate any US phone number by entering it into the input field.
- **Clear Functionality:** Easily clear the input and results with the `Clear` button.
- **Responsive Design:** The app is fully responsive and looks great on all devices.

## Project Structure

- **HTML (`Phone.html`)**: The structure of the web page.
- **CSS (`phone.css`)**: The styling for the page, ensuring a clean and modern look.
- **JavaScript (`phone.js`)**: The logic that handles phone number validation and user interactions.

## Usage

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/telephone-number-validator.git
   cd telephone-number-validator
   ```

2. **Open the `Phone.html` file in your web browser:**

   You can do this by double-clicking the file or by using a local server.

3. **Enter a US phone number in the input field.**

4. **Click the `Check` button to validate the phone number.**
   - If valid, you'll see a green message stating the number is valid.
   - If invalid, a red message will indicate the number is invalid.

5. **Click the `Clear` button to reset the input and results.**

## Code Explanation

### HTML (`Phone.html`)

The HTML file sets up the structure of the page, including:
- A heading (`<h1>`) for the title.
- An input field to enter the phone number.
- Buttons to check the validity of the phone number and clear the results.
- A results section to display the validation outcome.

### CSS (`phone.css`)

The CSS file styles the page with:
- **Responsive design:** Ensuring it works on various screen sizes.
- **Input and Button styles:** Providing a modern and clean look.
- **Result display:** Using colors to visually distinguish valid and invalid numbers.

### JavaScript (`phone.js`)

The JavaScript file handles the logic of the application:
- **Event Listeners:** Trigger actions on button clicks.
- **Validation Logic:** Using a regular expression to check the phone number format.
- **Dynamic Results:** Displaying the outcome with appropriate styling based on the validity of the number.



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

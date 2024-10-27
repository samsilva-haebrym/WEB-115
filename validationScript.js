    // JavaScript code for form validation
    
        document.addEventListener('DOMContentLoaded', function () {
          // Get the form and input field
          const form = document.getElementById('myForm');
          const inputField = document.getElementById('inputField');
      
          // Add event listener to form submission
          form.addEventListener('submit', function (event) {
            // Prevent form from submitting
              event.preventDefault();
      
              // Retrieve the input field value
              const inputValue = inputField.value;
      
              // Regular expression pattern for alphanumeric input
              const alphanumericRegex = /^[a-zA-Z0-9]+$/;
      
              // Check if the input value matches the pattern
              // Valid input: display confirmation and submit the form
              if (alphanumericRegex.test(inputValue)) {
                  alert('Your form has been submitted successfully!');
              // Invalid input: display error message
              } else {
                  alert('Uh oh! Your input must be alphanumeric. Please try again!');
              }
          });
      });
      
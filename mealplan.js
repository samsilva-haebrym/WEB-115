// Select meal input container
const mealInputsContainer = document.getElementById('mealInputs');

// Array for weekdays
const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Meal types
const meals = ["Breakfast", "Snack 1", "Lunch", "Snack 2", "Dinner"];

// Populate meal plan inputs dynamically
function createMealInputs() {
    weekdays.forEach(day => {
        let daySection = `<h3>${day}</h3>`;
        meals.forEach(meal => {
            daySection += `
                <label for="${day}-${meal}">${meal}:</label>
                <input type="text" id="${day}-${meal}" placeholder="Enter ${meal}"><br>`;
        });
        mealInputsContainer.innerHTML += daySection + "<br>";
    });
}

// Generate meal plan
document.getElementById('generatePlan').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    
    // Validate email
    if (!email || !email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

    // Collect user input
    let mealPlan = `<h2>Weekly Meal Plan for ${document.getElementById('name').value}</h2>`;
    weekdays.forEach(day => {
        mealPlan += `<h3>${day}</h3><ul>`;
        meals.forEach(meal => {
            const mealInput = document.getElementById(`${day}-${meal}`).value || "Not specified";
            mealPlan += `<li>${meal}: ${mealInput}</li>`;
        });
        mealPlan += "</ul>";
    });

    // Open new page and display meal plan
    const newPage = window.open();
    let mealPlanText = `Weekly Meal Plan for ${document.getElementById('name').value}`;

    weekdays.forEach(day => {
        mealPlanText += `${day}:\n`;
        meals.forEach(meal => {
            const mealInput = document.getElementById(`${day}-${meal}`).value || "Not specified";
            mealPlanText += `${meal}: ${mealInput}\n`;
        });
        mealPlanText += "\n";
    });

    // Inject meal plan and buttons into the new page
    newPage.document.write(`
        <html>
            <head>
                <title>Your Meal Plan</title>
                <link rel="stylesheet" href="mealstyles.css">
            </head>
            <body>
                ${mealPlan}
                <button onclick="window.print()">Print Plan</button>
                <button onclick="downloadMealPlan()">Download Plan</button>

                <script>
                    function downloadMealPlan() {
                        const blob = new Blob([\`${mealPlanText}\`], { type: "text/plain" });
                        const url = URL.createObjectURL(blob);
                        const link = document.createElement("a");
                        link.href = url;
                        link.download = "meal_plan.txt";
                        link.click();
                        URL.revokeObjectURL(url);  // Clean up the URL
                    }
                </script>
            </body>
        </html>
    `);
});

// Initialize meal inputs on page load
createMealInputs();

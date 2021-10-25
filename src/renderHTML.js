let htmlWritten = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="./assets/css/reset.css">
                <link rel="stylesheet" href="./assets/css/style.css">
                <title>Team Profile</title>
            </head>
                <body>
                    <header>
                        <h1>My Team Manager</h1>
                    </header>

                    <main>
                        <div class="card">
                            <h2 class="member-name">Member Name</h2>
                            <div class="card-info">
                                <p class="id">ID: </p>
                                <hr>
                                <p class="email">Email: </p>
                                <hr>
                                <p class="employee-info">Engineer</p>
                            </div>
                        </div>
                    </main>

                    <script src="./assets/javascript/script.js"></script>
                </body>
            </html>`;

let manager;
let engineerArray;
let internArray;

// Separates the whole array into different ones based on position
function filterEmployees(array) {
    // Filter array to have Employees filtered
    manager = array[0];
    engineerArray = array.filter((value) => {
        return value.getRole() === 'Engineer';
    });
    internArray = array.filter((value) => {
        return value.getRole() === 'Intern';
    })
}

// Create cards for html file
function createCards(employee) {

}


module.exports = generateHTML;
// script.js
const students = [
    { name: "Riya Sharma", marks: "85%", class: "10th" },
    { name: "Rohan Patel", marks: "70%", class: "12th" }
];

const studentGrid = document.getElementById('studentGrid');
const searchInput = document.getElementById('searchInput');

// I struggled to understand how .map() returns a new array, 
// so I wrote it out step-by-step instead of using a one-liner.
function displayCards(data) {
    studentGrid.innerHTML = ""; // Clearing the grid before showing new results
    
    data.map(function(s) {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = "<h3>" + s.name + "</h3><p>Marks: " + s.marks + "</p>";
        studentGrid.appendChild(card);
    });
}

displayCards(students);

// My filter attempt: I had to look up how to check the search box value
searchInput.addEventListener('keyup', function() {
    let searchVal = searchInput.value.toUpperCase();
    let filtered = students.filter(function(s) {
        return s.name.toUpperCase().includes(searchVal);
    });
    displayCards(filtered);
});
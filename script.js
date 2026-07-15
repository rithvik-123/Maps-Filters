// 1. Create an array of student objects
const students = [
    { name: "Salmaan Ahmed", marks: "38%", class: "3rd", address: "India" },
    { name: "Riya Sharma", marks: "85%", class: "10th", address: "123, ABC Colony, Delhi" },
    { name: "Rohan Patel", marks: "70%", class: "12th", address: "456, XYZ Street, Mumbai" },
    { name: "Priya Singh", marks: "95%", class: "8th", address: "789, PQR Nagar, Bangalore" },
    { name: "Ankit Gupta", marks: "60%", class: "9th", address: "101, LMN Road, Kolkata" },
    { name: "Neha Verma", marks: "80%", class: "11th", address: "222, DEF Avenue, Chennai" },
    { name: "Manoj Kumar", marks: "75%", class: "10th", address: "333, GHI Lane, Hyderabad" },
    { name: "Pooja Mishra", marks: "88%", class: "12th", address: "444, STU Colony, Pune" },
    { name: "Rajesh Singhania", marks: "92%", class: "9th", address: "555, VWX Street, Jaipur" }
];

// Select DOM elements
const studentGrid = document.getElementById('studentGrid');
const searchInput = document.getElementById('searchInput');
const resultHeading = document.getElementById('resultHeading');

// 2. Function to render student records using the .map() function
function renderStudents(dataToRender) {
    // Map transforms the array of objects into an array of HTML strings
    const htmlStrings = dataToRender.map(student => {
        return `
            <div class="card">
                <p>Student Name: <strong>${student.name}</strong></p>
                <p>Marks: ${student.marks}</p>
                <p>Class: ${student.class}</p>
                <p>Address: ${student.address}</p>
            </div>
        `;
    });

    // .join('') removes the commas between array items when placing it in the DOM
    studentGrid.innerHTML = htmlStrings.join('');
}

// Initial render of all students when the page loads
renderStudents(students);

// 3. Implement search functionality using the .filter() function
searchInput.addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();

    // Update the dynamic heading if a user is typing
    if (searchTerm.length > 0) {
        // Uppercase the first letter for the UI display
        const displayTerm = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);
        resultHeading.textContent = `Search Results for ${displayTerm}...`;
    } else {
        resultHeading.textContent = '';
    }

    // Filter the array based on whether the student's name includes the search term
    const filteredStudents = students.filter(student => 
        student.name.toLowerCase().includes(searchTerm)
    );

    // Re-render the grid with only the filtered results
    renderStudents(filteredStudents);
});
# JavaScript - Map & Filter Exercise

## Description
This project satisfies the requirements to create a web page that dynamically displays student records using HTML, CSS, and JavaScript. 

Key technical implementations include:
*   **Array of Objects:** The data is structured as an array of student objects containing attributes for `name`, `marks`, `class`, and `address`.
*   **`.map()` Method:** The `renderStudents()` function utilizes the JavaScript `map()` method to iterate over the array and dynamically generate HTML card markup for each student.
*   **`.filter()` Method:** An event listener is attached to the search input field. As the user types, the `filter()` method is executed in real-time to return only the student objects whose names match the search criteria. The DOM is then updated with the filtered results.

## How to Run
1. Unzip the project folder.
2. Ensure `index.html`, `style.css`, and `script.js` are in the exact same directory.
3. Open `index.html` in your web browser.
4. Type a name (e.g., "Riya" or "R") into the search box to observe the real-time filtering and dynamic UI updates.
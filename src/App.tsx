import "./styles.css";

/**
 * Evaluation:
 * - functionality
 * - code architecture/style
 * - how you move through code
 *
 * At the end the page output should look like this -> public/result.png
 *
 * 1. Create a REACT component
 * 2. Render HTML <table>
 * 3. Create an interface for data from source public/data.json (`fetch("data.json")`)
 * 4. Get data from public/data.json using async/await
 * 4.1. use useState hook to store data
 * 5. Render fetched data within the HTML Table
 * 5.1. Render each object in a new table row
 * 5.2. Render header cells generically by object keys
 * 5.3. Iterate through data and render content cells
 * 5.3.1. Roles cell displays given roles as strings, separated by commas
 * 6. Display the image (url: https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745 ) on the right side next to the table (using Flexbox).
 * 6.1. Table should fill 50% of the page horizontally.
 * 6.2. Image should be centered horizontally in the right 50% of the page.
 * 6.3. Image and the table should be centered vertically
 */

// 1) Declaring references to the elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// 2) Click event listener for the "Add Chapter" button
button.addEventListener('click', function() {
	// 3) Check if input is not blank
	if (input.value.trim() !== '') {
		// li element
		const li = document.createElement('li');
		
		// delete button
		const deleteButton = document.createElement('button');
		
		// Set the text content for li and delete button
		li.textContent = input.value;
		deleteButton.textContent = '❌';
		
		// Append delete button to li
		li.append(deleteButton);
		
		// Append li to the list
		list.append(li);
		
		// Add event listener for the delete button
		deleteButton.addEventListener('click', function() {
			list.removeChild(li);
			input.focus();
		});

		// Clear the input and set focus back
		input.value = '';
		input.focus();
	} else {
		// Handle empty input
		alert("Please enter a valid book and chapter.");
		input.focus();
	}
});

/*Theme*/ 
const themeSelector = document.querySelector('#themeSelector');
themeSelector.addEventListener('change', function() {
    if (themeSelector.value === 'vibrant') {
        document.body.className = 'vibrant';
    } else if (themeSelector.value === 'dark') {
        document.body.className = 'dark';
    } else {
        document.body.className = '';  // default theme
    }
});



const chapterSummaries = {
    "Alma 5": "Alma asks over 40 probing questions...",
    "Alma 32": "Alma teaches about faith as a seed...",
    // Add more chapters and their summaries here
};

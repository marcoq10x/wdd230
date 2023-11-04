// 1) Declaring references to the elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// 2) Click event listener for the "Add Chapter" button
button.addEventListener('click', function() {
	// 3) Check if input is not blank
	if (input.value.trim() !== '') {
        displayList(input.value);             // Call to displayList function
        chaptersArray.push(input.value);      // Add the input value to the chapters array
        setChapterList();                     // Update localStorage with the new array
        input.value = '';                     // Clear input field
        input.focus();                        // Refocus input field
  } else {
    // Handle empty input
    alert("Please enter a valid book and chapter.");
    input.focus();
  }
});


function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
  
    li.textContent = item; // The text content is the item passed into the function
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete'); // A class can beadded for styling if needed
  
    // Append the delete button to the li element
    li.append(deleteButton);
    // Append the li element to the list in the DOM
    list.append(li);
  
    // Add the click event listener to the delete button
    deleteButton.addEventListener('click', function () {
      list.removeChild(li); // Remove the li from the DOM
      deleteChapter(item); // Call the deleteChapter function to handle removal from array and localStorage
      input.focus(); // Set focus back to the input element
    });
  }
  
//updates the localStorage with the current state of the chaptersArray
  function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
  }
  
//retrieves the list of favorite chapters from localStorage
  function getChapterList() {
    const storedList = localStorage.getItem('myFavBOMList');
    if (storedList) {
      return JSON.parse(storedList);
    }
    return []; // Returns  empty array if nothing is stored
  }
  

  function deleteChapter(chapter) {
    // Remove the '❌' from the chapter text
    chapter = chapter.slice(0, -1).trim();

    // Filter out the chapter to delete from  chaptersArray
    chaptersArray = chaptersArray.filter(item => item !== chapter);
  
    // Update  localStorage with new array
    setChapterList();
  }
  


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
};


//Web Storage API - localStorage
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });
  
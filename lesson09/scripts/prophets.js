const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets); // commented out after testing
    displayProphets(data.prophets);
  }
  
  getProphetData();
  


  const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
      // Create elements for each prophet card
      let card = document.createElement('section');
      let fullName = document.createElement('h2');
      let birthDate = document.createElement('h3');
      let birthPlace = document.createElement('h3');
      let portrait = document.createElement('img');
  
      // Set content for the elements
      fullName.textContent = `${prophet.name} ${prophet.lastname}`;
      birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
      birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
  
      // Set attributes for the image
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append elements to the card in the desired order
      card.appendChild(fullName);
      card.appendChild(birthDate);
      card.appendChild(birthPlace);
      card.appendChild(portrait); // Image after the name, date, and place
  
      // Append the card to the cards container
      cards.appendChild(card);
    });
  }
  

  
  
// links.js
const baseURL = "https://marcoq10x.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (response.ok) {
      const data = await response.json();
      displayLinks(data.lessons);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

// function displayLinks(lessons) {
//   const navList = document.querySelector('.lesson-links'); //<ul class="lesson-links"></ul> in HTML where  links will appear

//   navList.innerHTML = ''; // Clears any existing content in the list


//   lessons.forEach(lesson => {
//     let listItem = document.createElement('li');
//     listItem.innerHTML = `<strong>Lesson ${lesson.lesson}</strong>`;
//     let sublist = document.createElement('ul');

//     lesson.links.forEach(link => {
//       let subListItem = document.createElement('li');
//       subListItem.innerHTML = `<a href="${baseURL}${link.url}">${link.title}</a>`;
//       sublist.appendChild(subListItem);
//     });

//     listItem.appendChild(sublist);
//     navList.appendChild(listItem);
//   });
// }

// getLinks();


function displayLinks(lessons) {
  const navList = document.querySelector('.lesson-links');
  navList.innerHTML = ''; // Clears any existing content in the list

  lessons.forEach(lesson => {
    let listItem = document.createElement('li');
    listItem.innerHTML = `<strong>Lesson ${lesson.lesson}</strong>`;
    let sublist = document.createElement('ul');

    lesson.links.forEach(link => {
      let subListItem = document.createElement('li');
      // Check if the link is an absolute URL
      const href = link.url.startsWith('http') ? link.url : `${baseURL}${link.url}`;
      console.log('Link HREF:', href); // Add this line to log the href
      subListItem.innerHTML = `<a href="${href}">${link.title}</a>`;
      sublist.appendChild(subListItem);
    });

    listItem.appendChild(sublist);
    navList.appendChild(listItem);
  });
}

getLinks();

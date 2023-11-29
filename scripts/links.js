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

function displayLinks(lessons) {
  const navList = document.querySelector('.lesson-links'); //<ul class="lesson-links"></ul> in HTML where  links will appear

  lessons.forEach(lesson => {
    let listItem = document.createElement('li');
    listItem.innerHTML = `<strong>Lesson ${lesson.lesson}</strong>`;
    let sublist = document.createElement('ul');

    lesson.links.forEach(link => {
      let subListItem = document.createElement('li');
      subListItem.innerHTML = `<a href="${baseURL}${link.url}">${link.title}</a>`;
      sublist.appendChild(subListItem);
    });

    listItem.appendChild(sublist);
    navList.appendChild(listItem);
  });
}

getLinks();

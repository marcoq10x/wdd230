// JS for the Company Spotlight Ad adding of members randomly that have gold memberships 
// Function to fetch members and display gold members in the spotlight
async function displayGoldMembersSpotlight() {
    try {
        // Fetch member data from the JSON file
        const response = await fetch('/wdd230/chamber/data/members.json');
        const data = await response.json();
        const goldMembers = data.members.filter(member => member.membershipLevel === "Gold");

        // Randomly select three gold members
        let selectedMembers = [];
        while (selectedMembers.length < 3) {
            const randomIndex = Math.floor(Math.random() * goldMembers.length);
            const member = goldMembers.splice(randomIndex, 1)[0];
            if (!selectedMembers.includes(member)) {
                selectedMembers.push(member);
            }
        }

        // Get the container for the company spotlight
        const spotlightContainer = document.querySelector('.company-spotlight-container');
        spotlightContainer.innerHTML = ''; // Clear previous entries

        // Create HTML for each selected member and add to  the container
        selectedMembers.forEach(member => {
            const memberHTML = `
                <div class="spotlight-member">
                    <h3>${member.name}</h3>
                    <p>${member.additionalInfo}</p>
                    <a href="${member.url}" target="_blank">Visit Website</a>
                </div>
            `;
            spotlightContainer.innerHTML += memberHTML;
        });
    } catch (error) {
        console.error('There was an error fetching the members data: ', error);
    }
}

// Load the gold members spotlight when the DOM is ready
document.addEventListener('DOMContentLoaded', displayGoldMembersSpotlight);

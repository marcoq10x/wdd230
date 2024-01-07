// JavaScript  Scoots  Table in the Rentals Page 
document.addEventListener('DOMContentLoaded', function() {
    fetch('/wdd230/scoots/data/rental.json') // Adjust the path if necessary
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        const tableBody = document.getElementById('rentalPricingTable').getElementsByTagName('tbody')[0];
  
        data.forEach(item => {
          let row = tableBody.insertRow();
          row.innerHTML = `
            <td>${item.RentalType}</td>
            <td>${item.MaxPersons}</td>
            <td>${item.Reservation.HalfDay}</td>
            <td>${item.Reservation.FullDay}</td>
            <td>${item.WalkIn.HalfDay}</td>
            <td>${item.WalkIn.FullDay}</td>
          `;
        });
      })
      .catch(error => {
        console.error('Could not fetch rental data: ', error);
      });
  });
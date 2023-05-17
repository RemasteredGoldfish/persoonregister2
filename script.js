fetch('opdracht2_bijlage.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(person => {
      const { voornaam, achternaam, nationaliteit, leeftijd, gewicht } = person;

      // Maak een nieuw div-element aan voor elke persoon
      const personDiv = document.createElement('div');
      personDiv.classList.add('person');

      // Voeg de gegevens van de persoon toe aan het div-element
      personDiv.innerHTML = `
        <p>Voornaam: <span>${voornaam}</span></p>
        <p>Achternaam: <span>${achternaam}</span></p>
        <p>Nationaliteit: <span>${nationaliteit}</span></p>
        <p>Leeftijd: <span>${leeftijd}</span></p>
        <p>Gewicht: <span>${gewicht}</span></p>
      `;
      document.getElementById('person-details').appendChild(personDiv);
    });
  })
  .catch(error => {
    console.log('Er is een fout opgetreden bij het laden van de gegevens:', error);
  });

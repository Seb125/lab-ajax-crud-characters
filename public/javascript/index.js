const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then(characters => {
      const charactersContainer = document.querySelector('.characters-container');

      

      // Loop through the characters and create elements for each
      characters.forEach(character => {
        const characterInfo = document.createElement('div');
        characterInfo.classList.add('character-info');

        const nameElement = document.createElement('div');
        nameElement.classList.add('name');
        nameElement.textContent = `Name: ${character.name}`;

        const occupationElement = document.createElement('div');
        occupationElement.classList.add('occupation');
        occupationElement.textContent = `Occupation: ${character.occupation}`;

        const cartoonElement = document.createElement('div');
        cartoonElement.classList.add('cartoon');
        cartoonElement.textContent = `Is a Cartoon: ${character.cartoon}`;

        const weaponElement = document.createElement('div');
        weaponElement.classList.add('weapon');
        weaponElement.textContent = `Weapon: ${character.weapon}`;

        characterInfo.appendChild(nameElement);
        characterInfo.appendChild(occupationElement);
        characterInfo.appendChild(cartoonElement);
        characterInfo.appendChild(weaponElement);

        charactersContainer.appendChild(characterInfo);
      });
    })
    .catch(error => {
      console.error('Error fetching characters:', error);
    });

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});

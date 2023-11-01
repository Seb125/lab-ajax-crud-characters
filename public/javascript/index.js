const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    .then(characters => {
      const charactersContainer = document.querySelector('.characters-container');
      
      
      while (charactersContainer.firstChild) {
        charactersContainer.removeChild(charactersContainer.firstChild);
      }
      
      
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
    
    characterIdInput = document.querySelector('input[name="character-id"]');

    let inputValue = characterIdInput.value;
    
    charactersAPI.getOneRegister(inputValue)
    .then(character => {
      const charactersContainer = document.querySelector('.characters-container');
      
      
      while (charactersContainer.firstChild) {
        charactersContainer.removeChild(charactersContainer.firstChild);
      }

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
});

  document.getElementById('delete-one').addEventListener('click', function (event) {
    characterIdInput = document.querySelector('input[name="character-id-delete"]');

    let inputValue = characterIdInput.value;
    
    charactersAPI.deleteOneRegister(inputValue)
    .then(character => {
  });
});

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const form = document.getElementById('edit-character-form');

    const ID = form.querySelector('input[name="chr-id"]');
    const nameInput = form.querySelector('input[name="name"]');
    const occupationInput = form.querySelector('input[name="occupation"]');
    const weaponInput = form.querySelector('input[name="weapon"]');
    const cartoonInput = form.querySelector('input[name="cartoon"]');

    const id = ID.value;
    const name = nameInput.value;
    const occupation = occupationInput.value;
    const weapon = weaponInput.value;
    const isCartoon = cartoonInput.checked; 

    const data = {
      "name": name,
      "occupation": occupation,
      "weapon": weapon,
      "cartoon": isCartoon

    }

    for (const key in data) {
      if (data[key] === "") {
        delete data[key];
      }
    }

    charactersAPI.updateOneRegister(id, data)
    .then(character => {
      let button = document.querySelector("#send-data")
      button.style.color = "green";
      
  })
  .catch(error => {
    console.error('Error fetching characters:', error);
    let button = document.querySelector("#send-data")
      button.style.backgroundColor = "red"
  });

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const form = document.getElementById('new-character-form');

    const nameInput = form.querySelector('input[name="name"]');
    const occupationInput = form.querySelector('input[name="occupation"]');
    const weaponInput = form.querySelector('input[name="weapon"]');
    const cartoonInput = form.querySelector('input[name="cartoon"]');


    const name = nameInput.value;
    const occupation = occupationInput.value;
    const weapon = weaponInput.value;
    const isCartoon = cartoonInput.checked; 

    const data = {
      "name": name,
      "occupation": occupation,
      "weapon": weapon,
      "cartoon": isCartoon

    }

    charactersAPI.createOneRegister(data)
    .then(character => {
      let button = document.querySelector("#send-data")
      button.style.color = "green";
      
  })
  .catch(error => {
    console.error('Error fetching characters:', error);
    let button = document.querySelector("#send-data")
      button.style.backgroundColor = "red"
  });

  });
  
});

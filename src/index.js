$(function() {
  console.log('jquery document ready');

  const $tbody = $('tbody');
  const $form = $('form.ui.form');

  fetch(`http://localhost:3000/animals/`)
    .then(res => res.json())
    .then(json => {
      json.forEach(animalData => {
        const animal = new Animal(animalData);
        $tbody.append(animal.render());
      });
    });

  $form.on('submit', ev => {
    ev.preventDefault();
    console.log('submitted');
    const name = $('#animal-name').val();
    const species = $('#animal-species').val();
    const gender = $('#animal-gender')
      .children('.active')
      .data().value;

    fetch(`http://localhost:3000/animals/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify({ name, gender, speciesName: species })
    })
      .then(res => res.json())
      .then(json => {
        const newAnimal = new Animal(json);
        $tbody.append(newAnimal.render());
      });
  });
});

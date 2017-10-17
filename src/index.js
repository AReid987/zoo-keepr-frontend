$(function() {
  console.log('jquery document ready');
  const adapter = new Adapter();
  const $tbody = $('tbody');
  const $form = $('form.ui.form');

  adapter.fetchAnimals().then(animals => {
    animals.forEach(animalData => {
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

    adapter.createAnimal({ name, gender, speciesName: species }).then(json => {
      const newAnimal = new Animal(json);
      $tbody.append(newAnimal.render());
    });
  });
});

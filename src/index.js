$(function() {
  const adapter = new Adapter();
  const $tbody = $('tbody');
  const $form = $('form.ui.form');

  adapter.fetchAnimals().then(animals => {
    console.log(animals);
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

    adapter
      .createAnimal({ name, gender, speciesName: species })
      .then(json => {
        console.log('response from api: ', json);
        const newAnimal = new Animal(json);
        $tbody.append(newAnimal.render());
      })
      .catch(err => {
        console.log('err: ', err);
        //       err.json().then(json => {
        //         $form.append(`<div class="ui error message">
        //   <div class="header">That Animal could not be saved</div>
        //   ${json.errors.map(msg => `<p>${msg}</p>`).join('')}
        // </div>`);
        //       });
      });
  });
});

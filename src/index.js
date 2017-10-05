$(function() {
  console.log('process: ', process.env);
  const $tBody = $('tbody');
  const $form = $('form.ui.form');
  const api = new Api();

  $form.on('submit', function(ev) {
    ev.preventDefault();

    $('.ui.error.message').remove();
    $form.removeClass('error');

    const $nameInput = $('#animal-name');
    const name = $nameInput.val();
    $nameInput.val('');

    const $genderInput = $('#animal-gender');
    const gender = $genderInput.children('.active').data().value;
    $('.ui.form .ui.dropdown').dropdown('restore defaults');

    const $speciesInput = $('#animal-species');
    const species = $speciesInput.val();
    $speciesInput.val('');

    const data = { name, gender, species };

    // comment
    api
      .createAnimal(data)
      .then(res => {
        console.log('res', res);
        const animal = new Animal(res);
        $tBody.append(animal.render());
      })
      .catch(err => {
        $form.addClass('error');
        $form.prepend(`
            <div class="ui error message">
              <div class="header">Your Animal couldn't be saved</div>
              <p>Two animals of the same species cannot have the same name</p>
            </div>
            `);
      });
  });

  api.fetchAnimals().then(res => {
    console.log(res);
    res.forEach(animalData => {
      const animal = new Animal(animalData);
      $tBody.append(animal.render());
    });
  });
});

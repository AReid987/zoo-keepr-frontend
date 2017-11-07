class Animal {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.gender = data.gender;
    this.speciesId = data.species_id;
  }

  render() {
    return `
    <tr>
      <td>${this.name}</td>
      <td>${this.gender}</td>
      <td>${this.speciesId}</td>
    </tr>
    `;
  }
}

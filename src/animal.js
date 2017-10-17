class Animal {
  constructor(data) {}

  render() {
    return `
    <tr>
      <td>${this.name}</td>
      <td>${this.gender}</td>
      <td>${this.species}</td>
    </tr>
    `;
  }
}

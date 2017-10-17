class Adapter {
  constructor() {
    this.baseURL = `http://localhost:3000/`;
  }

  createAnimal(body) {
    return this.post(`${this.baseURL}/animals/`, body);
  }

  fetchAnimals() {
    return this.get(`${this.baseURL}/animals/`);
  }

  fetchAnimal(id) {
    return this.get(`${this.baseURL}/animals/${id}`);
  }

  get(url) {
    return fetch(url).then(res => res.json());
  }

  post(url, body) {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json());
  }
}

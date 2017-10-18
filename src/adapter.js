class Adapter {
  constructor() {
    // http://localhost:3000/api/v1/animals
    this.baseURL = `http://localhost:3000/api/v1`;
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
    })
      .then(this.handleErrors)
      .then(res => res.json());
  }

  handleErrors(response) {
    if (!response.ok) {
      throw response;
    }
    return response;
  }
}

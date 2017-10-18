class Api {
  fetchAnimals() {
    return this.get(`http://localhost:3000/api/v1animals/`);
  }

  createAnimal(data) {
    return this.post(`http://localhost:3000/api/v1/animals/`, data);
  }

  get(url) {
    return fetch(url).then(res => res.json());
  }

  post(url, body) {
    return fetch(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
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

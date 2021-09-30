/** @format */

export default class API {
  async getMovie(name) {
    const response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=892862af&s=${name}`
    );
    const data = await response.json();
    return data;
  }
  async getDefaultMovie() {
    const response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=892862af`
    );
    const data = await response.json();
    return data;
  }
}

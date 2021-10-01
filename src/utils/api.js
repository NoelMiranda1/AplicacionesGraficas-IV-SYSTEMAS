/** @format */

export default class API {
  async getMovie(name) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?&api_key=4d5015d85f00f15236a9437603354887&query=${name}`
    );
    const data = await response.json();
    return data;
  }
  async getDefaultMovie() {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularyti.desc&api_key=4d5015d85f00f15236a9437603354887`
    );
    const data = await response.json();
    return data;
  }
  async getImage(urlImage) {
    const response = `https://image.tmdb.org/t/p/w1280/${urlImage}`;

    return response;
  }
}

// Image https://image.tmdb.org/t/p/w1280/

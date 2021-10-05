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
      `https://api.themoviedb.org/3/movie/top_rated?api_key=4d5015d85f00f15236a9437603354887&language=en-US&page=1`
    );
    const data = await response.json();
    return data;
  }
  async getDetailsMovie(id) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4d5015d85f00f15236a9437603354887&language=en-US`
    );
    const data = await response.json();
    return data;
  }
  async getAlternativeMovie(id) {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=4d5015d85f00f15236a9437603354887&language=en-US&page=1`
    );
    const data = await response.json();
    return data;
  }
  async getImage(urlImage) {
    const response = `https://image.tmdb.org/t/p/w1280/${urlImage}`;

    return response;
  }
}

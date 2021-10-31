const API_KEY = process.env.MOVIE_API_KEY;
const API_URL = process.env.BASE_API_URL;

// GET: fetch movie post
export const getPost = async () => {
  const request = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
  ).then((res) => res.json());
  return request.results || [];
};

// POST: favorite movie
export const addFavorite = async (data) => {
  const request = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
  return request.results || [];
};

// GET: favorite movie
export const getFavorite = async () => {
  const request = await fetch(`${API_URL}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());
  return request || [];
};

// DELETE: favorite movie
export const removeFavorite = async (data) => {
  const request = await fetch(`${API_URL}/${data}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return request || [];
};

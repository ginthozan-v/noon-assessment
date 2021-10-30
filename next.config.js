module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "image.tmdb.org"],
  },
  env: {
    MOVIE_API_KEY: process.env.MOVIE_API_KEY,
    BASE_API_URL: process.env.BASE_API_URL,
  },
};

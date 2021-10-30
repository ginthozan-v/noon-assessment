import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Post from "../components/Post";
import { getFavorite, getPost, removeFavorite } from "./api/Request";

function FavoritePage() {
  const [favoriteMovie, setFavoriteMovie] = useState([]);

  const fetchFavoriteMovie = async () => {
    try {
      const movieData = await getPost();

      if (movieData.length > 0) {
        const favMovieData = await getFavorite();

        let favMovieDataObj = [];
        favMovieData.map((favorite) => {
          const results = movieData.find(
            (movie) => movie.id == favorite.movie_id
          );
          favMovieDataObj.push({
            id: results.id,
            title: results.original_title || results.original_name,
            img: results.backdrop_path || results.poster_path,
            releaseDate: results.release_date,
            overview: results.overview,
            vote: results.vote_count,
            favorite: true,
          });
        });
        setFavoriteMovie(favMovieDataObj);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onFavoriteHandle = async (value) => {
    try {
      await removeFavorite(value);
      fetchFavoriteMovie();
      console.log("Delete success");
    } catch (err) {
      console.log("remove err", err);
    }
  };

  useEffect(() => {
    fetchFavoriteMovie();
  }, []);

  return (
    <Layout>
      <div className="timeline">
        {favoriteMovie?.map((favMov) => (
          <Post
            key={favMov.id}
            id={favMov.id}
            title={favMov.title}
            img={favMov.img}
            releaseDate={favMov.releaseDate}
            overview={favMov.overview}
            vote={favMov.vote}
            favorite={favMov.favorite}
            onFavoriteHandle={onFavoriteHandle}
          />
        ))}
      </div>
    </Layout>
  );
}

export default FavoritePage;

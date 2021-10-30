import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Post from "../components/Post";
import { addFavorite, getPost } from "./api/Request";

function HomePage() {
  const [movies, setMovies] = useState([]);

  const fetchPost = async () => {
    const data = await getPost();
    let movieData = [];
    movieData = data.map((m) => ({
      id: m.id,
      title: m.original_title || m.original_name,
      img: m.backdrop_path || m.poster_path,
      releaseDate: m.release_date,
      overview: m.overview,
      vote: m.vote_count,
      favorite: false,
    }));
    setMovies(movieData);
  };

  const onFavoriteHandle = async (value) => {
    const date = Date.now();
    const params = {
      movie_id: value,
      timestamp: date,
    };
    try {
      await addFavorite(params);
      fetchPost();
      console.log("success");
    } catch (err) {
      console.log("Add Favorite Error >>", err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Layout>
      <div className="timeline">
        {movies.map((m) => (
          <Post
            key={m.id}
            id={m.id}
            title={m.title}
            img={m.img}
            releaseDate={m.releaseDate}
            overview={m.overview}
            vote={m.vote}
            favorite={m.favorite}
            onFavoriteHandle={onFavoriteHandle}
          />
        ))}
      </div>
    </Layout>
  );
}

export default HomePage;

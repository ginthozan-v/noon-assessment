import react, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import Image from "next/image";
import { Favorite } from "@mui/icons-material";

function Post({
  id,
  title,
  img,
  releaseDate,
  overview,
  vote,
  favorite,
  onFavoriteHandle,
}) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={BASE_URL + img} />
        <p>{releaseDate}</p>
      </div>
      <div className="post__image">
        <Image
          layout="responsive"
          src={BASE_URL + img}
          height={1080}
          width={1920}
        />
        <div className="post__image-bottom">
          <div>
            <p className="movie_overview">{overview}</p>
            <p className="movie_title">{title}</p>
          </div>
          <Favorite
            className={`favorite_btn ${favorite ? "favorite" : ""}`}
            onClick={() => onFavoriteHandle(id)}
          />
        </div>
      </div>
      <div className="post__footer">Vote Count: {vote}</div>
    </div>
  );
}

export default Post;

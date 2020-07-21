import React from "react";

const MovieImage = ({ movieImageUrl, movieTitle, width }) => {
  var movieSrcUrl = `https://image.tmdb.org/t/p/w500${movieImageUrl}`;
   if(movieImageUrl != null){
    movieSrcUrl = `https://image.tmdb.org/t/p/w500${movieImageUrl}`;
   }else{
     movieSrcUrl = "https://via.placeholder.com/500x280/e45fd9/ffffff?text=Sorry+Image+not+avaible"
   }
  const imageStyle = {
    width: width,
    paddingBottom: "10px"
  };

  return (
    <img src={movieSrcUrl} alt={`Movie ${movieTitle}`} style={imageStyle} />
  );
};

export default MovieImage;
import React, {useEffect,useState} from 'react';
import Header from './Header';
import Movie from './Movie';
import API_KEY from '../api-config';
import ModalComponent from './Modal';
import Search from './Search';


const dataFetcher = async (url, setMovieArr) => {
  const request = await fetch(url);
  const data = await request.json()

  setMovieArr(data.results);
  console.log(data.results);
  return data;
};

function App() {
  const trendingMovisUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

  const [movieArr, setMovieArr] = useState([]);
  const [modalSelectedMovie, setModalSelectedMovie] = useState();
  const [modalInitialState, setModalInitialState] = useState(false);

  useEffect(() => {
    dataFetcher(trendingMovisUrl, setMovieArr);
  },[trendingMovisUrl])

  const searchHandler = searchValue => {
   const searchMovieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchValue}`;
   dataFetcher(searchMovieUrl,setMovieArr);
 }

  return ( 
  <div className="App">
    <Header title={"Movie SA"}/>
      <Search searchHandler= {searchHandler}/>
    <div className="movie-grid-container">
    {movieArr.length > 0
     ? movieArr.map((itemMovie, index) => {
     return (
        <Movie 
          key={index} 
          setModalInitialState={setModalInitialState}
          setModalSelectedMovie={setModalSelectedMovie}
          itemMovie= {itemMovie}
     />
     );
    })
    : ""}
    </div>
    <ModalComponent 
      modalState = {modalInitialState}
      setModalState = {setModalInitialState}
      modalSelectedMovie={modalSelectedMovie}
      setModalSelectedMovie={setModalSelectedMovie}
      
    />
  </div>
  );
}

export default App;

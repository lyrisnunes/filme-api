import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

import {api} from '../../services/api';
import { Container, Loading } from '../Movie/styles';

export function Movie(){
   const {id} = useParams();
   const [movie, setMovie] = useState({});
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      async function loadMovie(){
         await api.get(`/movie/${id}`, {
            params:{
               api_key: "61eec8e33f00ef34a385a4fa120c8313",
               language: "pt-BR",
            }
         })
         .then((response)=> {
            setMovie(response.data);
            setLoading(false);
         })
         .catch(() => {
            console.log("filme não encontrado")
         })
      }
      loadMovie();
   }, [])

   if(loading){
      return(
         <Loading>
            <h2>Carregando detalhes....</h2>
         </Loading>
      )
   }

   return(
      <Container>
         <h2>Filme em cartaz: {movie.title}</h2>
         <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
         <h3>Sobre o filme</h3>
         <p>{movie.overview}</p>
         <p className='vote'>Avaliação: {movie.vote_average} / 10</p>

         <div className='btn'>
            <button>Salvar</button>
            <button><a href="#"></a>Trailer</button>
         </div>
      </Container>
   )
}
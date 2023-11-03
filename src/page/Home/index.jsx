import { useState, useEffect } from "react";
import {api} from "../../services/api";
import { Container, Loading, Content } from "./styles";
import { Link } from "react-router-dom";

export function Home(){
   const [ movies, setMovies] = useState([]);
   const [loading, setLoading] = useState(true); // vai começar como true

   useEffect(() => {

      async function loadMovies(){
         const response = await api.get("movie/now_playing", {
            params:{
               api_key: "61eec8e33f00ef34a385a4fa120c8313",
               language: "pt-BR",
               page:1,
            }
         })
         // armazenar apenas 10 filmes
         setMovies(response.data.results.slice(0,10))
         setLoading(false)
      }
      loadMovies();
   
   }, [])

   // se for verdadeiro
   if(loading){
      return(
         <Loading>
            <h2>Carregando...</h2>
         </Loading>
      )
   }

   return(
      <Content>
       <p>Os melhores filmes aqui, os melhores filmes em cartas aqui no NET<span>.</span>FILME</p>
         <Container>
               <div>
                  {movies.map((movie) => {
                     return(
                        <article key={movie.id}>
                           <h4>{movie.title}</h4>
                           <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                           <Link to={`/movie/${movie.id}`}>Acessar</Link>
                        </article>
                     )
                  })}
               </div>
         </Container>
      </Content>
   )
}
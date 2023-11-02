import { useState, useEffect } from "react";
import {api} from "../../services/api";
import { Container } from "./styles";

// useEffect  toda vez que nossa página for recarregada ir na nossa api e buscar as requisições
// useState para armazenar as informações da minh api

export function Home(){
   const [ movies, setMovies] = useState([]);

   useEffect(() => {

      async function loadMovies(){
         const response = await api.get("movie/now_playing", {
            params:{
               api_key: "61eec8e33f00ef34a385a4fa120c8313",
               language: "pt-BR",
               page:1,
            }
         })

         console.log(response.data)
      }
      loadMovies();
   
   }, [])


   return(
      <Container>
         <h2>teste</h2>
      </Container>
   )
}
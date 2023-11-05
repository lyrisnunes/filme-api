import { useEffect, useState } from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Favorites(){
   const [movie, setMovie] = useState([]);

   useEffect(() => {

      const myList = localStorage.getItem("@netmovie");
      setMovie(JSON.parse(myList) || [])
   
   }, [])
   
   return(
      <Container>
         <h1>Meus filmes</h1>

         <ul>
            {movie.map((item)=> {
               return(
                  <li key={item.id}>
                     <span>{item.title}</span>
                     <div className="btn">
                        <Link to={`/movie/${item.id}`}>Ver detalhes</Link>
                        <button>Excluir</button>
                     </div>
                  </li>
               )
            })}
         </ul>
      </Container>
   )
}
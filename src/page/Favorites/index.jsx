import { useEffect, useState } from "react";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export function Favorites(){
   const [movie, setMovie] = useState([]);

   useEffect(() => {

      const myList = localStorage.getItem("@netmovie");
      setMovie(JSON.parse(myList) || [])
   
   }, [])

   function deleteMovie(id){
      let filterMovie = movie.filter((item) => {
         return (item.id !== id) // vai devolver tudo que é diferente do id que clicou
      })

      setMovie(filterMovie)
      localStorage.setItem("@netmovie", JSON.stringify(filterMovie))// salvar no localStorage
      toast.success("Filme removido com sucesso.")

   }
  
   return(
      <Container>
         <h1>Meus filmes</h1>
            {movie.length === 0 && <span>Você não possui nenhum filme salvo. <br /> <br /> :(</span>}
         <ul>
            {movie.map((item)=> {
               return(
                  <li key={item.id}>
                     <span>{item.title}</span>
                     <div className="btn">
                        <Link to={`/movie/${item.id}`}>Ver detalhes</Link>
                        <button onClick={() => deleteMovie(item.id)}>Excluir</button>
                     </div>
                  </li>
               )
            })}
         </ul>
      </Container>
   )
}
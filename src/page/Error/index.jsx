import { Link } from "react-router-dom";
import { Container } from "./styles";

export function Error(){
   return(
      <Container>
         <h1>404</h1>
         <h2>Página não encontrada.</h2>
         <Link to="/">Veja todos os filmes</Link>
      </Container>
   )
}
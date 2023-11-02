import { Container } from "./styles";
import { Link } from "react-router-dom";

export function Header(){
   return(
      <Container>
         <Link className="logo" to="/">NET<span>.</span>FILME</Link>
         <Link className="btn" to="/">Meus filmes favoritos</Link>
      </Container>
   )
}
import { BrowserRouter,Routes, Route } from "react-router-dom";

import { Home } from "./page/Home";
import { Movie } from "./page/Movie";
import { Favorites } from "./page/Favorites";
import { Error } from "./page/Error";


import { Header } from "./components/Header";

export function RoutesApp(){
   return(
      <BrowserRouter>
      <Header/>
         <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/movie/:id" element={ <Movie/> }/>
            <Route path="/favorites" element={<Favorites/> }/>
            <Route path="*" element={<Error/>} />
         </Routes>
      </BrowserRouter>
   )
}


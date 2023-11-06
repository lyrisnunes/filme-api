import { RoutesApp } from "./routes";

import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export function App(){
   return(
      <div>
      <ToastContainer autoClose={3000}/>
         <RoutesApp/>
      </div>
   )
}
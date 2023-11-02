import axios from "axios";
// Base URL: https://api.themoviedb.org/3/
// URL da API: movie/now_playing?api_key=61eec8e33f00ef34a385a4fa120c8313&language=pt-BR

//biblioteca axios para lidar com requisições.
// configuração da base da URL.

export const api = axios.create({
   baseURL: 'https://api.themoviedb.org/3/'
});
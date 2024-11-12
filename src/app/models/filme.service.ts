import { Injectable } from '@angular/core';
import { Filme } from './filme';


@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private filmes: Filme[] = [
    {
      Title: 'Batman',
      Year: '1989',
      Director: 'Tim Burton',
      Genre: '',
      Country: 'EUA',
      Poster: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com.au%2Fbatman-1989-Posters-Actress-Decoration%2Fdp%2FB09SY348GN&psig=AOvVaw1VJ5_Fb7YEcEpMK-t6Y-vn&ust=1731522083460000&source=imhttps://m.media-amazon.com/images/M/MV5BYzZmZWViM2EtNzhlMi00NzBlLWE0MWEtZDFjMjk3YjIyNTBhXkEyXkFqcGc@._V1_SX300.jpgages&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCO'
    },
    {
      Title: 'The Godfather',
      Year: '1972',
      Director: 'Francis Ford Coppola',
      Country: 'EUA',
      Genre: 'Crime',
      Poster: 'https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_SX300.jpg'
    }
  ]
  constructor() { }

  buscarFilmePorTitulo(titulo: string): Filme | undefined {
    return this.filmes.find(f => f.Title.toLocaleLowerCase() == titulo.trim().toLowerCase())
  }
}

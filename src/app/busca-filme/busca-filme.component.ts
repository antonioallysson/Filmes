import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FilmeService } from '../models/filme.service';
import { Filme } from '../models/filme';

@Component({
  selector: 'app-busca-filme',
  templateUrl: './busca-filme.component.html',
  styleUrl: './busca-filme.component.css'
})
export class BuscaFilmeComponent {
  formBusca: FormGroup;
  filme: Filme | undefined;

  constructor(private fb: FormBuilder, private fs: FilmeService) {
    this.formBusca = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(2)]]
    });

    this.filme = undefined;
  }

  buscar() {
    const titulo = this.formBusca.value.titulo
    this.fs.buscarFilmePorTitulo(titulo).subscribe(
      res => {
        this.filme = res
      })
  }
}

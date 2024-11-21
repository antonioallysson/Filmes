import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeputadoService } from '../Models/DeputadoService';
import { Deputado } from '../Models/Deputado';

@Component({
  selector: 'app-busca-deputado',
  templateUrl: './busca-deputado.component.html',
  styleUrls: ['./busca-deputado.component.css']
})
export class BuscaDeputadoComponent {
  formBusca: FormGroup;
  deputados: Deputado[] = [];

  constructor(private fb: FormBuilder, private deputadoService: DeputadoService) {
    this.formBusca = this.fb.group({
      nome: ['', Validators.minLength(2)],
      partido: ['', Validators.minLength(2)]
    });
  }

  buscar() {
    const { nome, partido } = this.formBusca.value;

    if (nome) {
      this.deputadoService.buscarDeputadosPorNome(nome).subscribe(
        res => this.deputados = res,
        err => console.error('Erro ao buscar deputados por nome:', err)
      );
    } 
    else if (partido) {
      this.deputadoService.buscarDeputadosPorPartido(partido).subscribe(
        res => this.deputados = res,
        err => console.error('Erro ao buscar deputados por partido:', err)
      );
    }
  }
}

import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-busca-filme',
  templateUrl: './busca-filme.component.html',
  styleUrl: './busca-filme.component.css'
})
export class BuscaFilmeComponent {
  formBusca: FormGroup

  constructor(private fb: FormBuilder) {
    this.formBusca = this.fb.group({
      titulo:['', [Validators.required, Validators.minLength(2)]]
    })
  }

  Buscar() {
    console.log(this.formBusca.value)
  }
}

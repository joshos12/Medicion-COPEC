import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styles:[
    `
    .img{
      background-image: url('../../../assets/img/descuentos-bencina-febrero.jpg');
      height: 969px;
      opacity: 0.8;
    }
    .form{
      background-color: white;
    }
    `
  ]
})
export class InicioSesionComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    usuario: ['', Validators.required],
    contraseña: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}

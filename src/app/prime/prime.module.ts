import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';


@NgModule({
  declarations: [],
  exports:[
    InputTextModule,
    ButtonModule,
    PasswordModule
  ]
  
})
export class PrimeModule { }

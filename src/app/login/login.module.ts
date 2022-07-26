import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PrimeModule } from '../prime/prime.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InicioSesionComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PrimeModule,
    ReactiveFormsModule
  ],
  exports:[
    InicioSesionComponent
  ]
})
export class LoginModule { }

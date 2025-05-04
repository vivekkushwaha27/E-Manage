import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ComponentsRoutingModule } from './components-routing.module';



@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,

  ],
  exports:[
    ErrorPageComponent
  ]
})
export class ComponentsModule { }

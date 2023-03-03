import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { SubuserleftbarComponent } from './subuserleftbar/subuserleftbar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LeftbarComponent,
    SubuserleftbarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[
    LeftbarComponent,
    SubuserleftbarComponent
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiginningPageRoutingModule } from './biginning-routing.module';

import { BiginningPage } from './biginning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiginningPageRoutingModule
  ],
  declarations: [BiginningPage]
})
export class BiginningPageModule {}

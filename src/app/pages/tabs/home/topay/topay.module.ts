import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopayPageRoutingModule } from './topay-routing.module';

import { TopayPage } from './topay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopayPageRoutingModule
  ],
  declarations: [TopayPage]
})
export class TopayPageModule {}

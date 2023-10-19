import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CelebritiesPage } from './celebrities.page';
import { CelebritiesPageRoutingModule } from './celebrities-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CelebritiesPageRoutingModule
  ],
  declarations: [CelebritiesPage]
})
export class CelebritiesPageModule {}

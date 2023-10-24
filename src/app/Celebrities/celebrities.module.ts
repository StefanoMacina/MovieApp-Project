import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CelebritiesPage } from './celebrities.page';
import { CelebritiesPageRoutingModule } from './celebrities-routing.module';
import { CelebritiesList } from './components/celebritiesList/CelebritiesList';
import { CelebrityDetails } from './components/celebrityDetails/CelebrityDetails';
import { EditCelebrity } from './components/editCelebrity/EditCelebrity';
import { addCelebrity } from './components/addCelebrity/addCelebrity';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CelebritiesPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CelebritiesPage, CelebritiesList, CelebrityDetails, EditCelebrity, addCelebrity]
})
export class CelebritiesPageModule {}

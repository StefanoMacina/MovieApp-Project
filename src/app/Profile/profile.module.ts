import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfilePage } from './profile.page';

import { userDetails } from './components/userDetails/userDetails';
import { ProfilePageRoutingModule } from './profile-routing.module';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ProfilePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProfilePage, userDetails, ManageProfileComponent]
})
export class ProfilePageModule {}

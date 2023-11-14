import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePage } from './profile.page';
import { ManageProfileComponent } from './components/manage-profile/manage-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
  },
  {
    path : 'manage-profile',
    component : ManageProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule {}

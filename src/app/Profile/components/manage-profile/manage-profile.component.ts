import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss'],
})
export class ManageProfileComponent {
  constructor(
    private _fb: FormBuilder,
    private _profileService: ProfileService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private toastController: ToastController
  ) {}
  profileForm = this._fb.group({
    userName: ['', Validators.required],
    email: ['', Validators.required],
  });

   updateProfile() {
    this._profileService.updateSubject(this.profileForm.value);

    
    setTimeout(() => {
      this._router.navigate(['../'], { relativeTo: this._activatedRoute });
    }, 1200);
    this._profileService.userData_Toast('bottom')
  }

  

}

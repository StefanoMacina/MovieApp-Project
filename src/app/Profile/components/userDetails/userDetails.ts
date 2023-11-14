import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ProfileService } from 'src/app/services/profile.service';
import { UserForm } from 'src/app/shared/interfaces/user-form';

@Component({
  selector: 'user-details',
  templateUrl: './userDetails.html',
  styleUrls: ['./userDetails.scss'],
})
export class userDetails implements OnInit {
  needSpace: boolean;
  imgSrc: any;
  defaultPic: string = 'https://ionicframework.com/docs/img/demos/avatar.svg';
  formValues : UserForm | undefined
  constructor(
    private readonly _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _profileService: ProfileService
  ) {
    this.imgSrc = this.defaultPic;
    this.needSpace = false;
  }

  ngOnInit(){
    this._profileService.subject.subscribe(x => this.formValues = x)
  }

  addProfilePic = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
    });
    this.needSpace = false;
    this.imgSrc = image.dataUrl;
  };

  removeProfilePic() {
    this.imgSrc = this.defaultPic;
    this.needSpace = false;
  }

  createSpace() {
    this.needSpace = !this.needSpace;
  }

  onEdit() {
    this._router.navigate(['manage-profile'], {
      relativeTo: this._activatedRoute,
    });
  }
}

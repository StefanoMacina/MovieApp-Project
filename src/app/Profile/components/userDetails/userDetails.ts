import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'user-details',
  templateUrl: './userDetails.html',
  styleUrls: ['./userDetails.scss'],
})
export class userDetails {

    needSpace : boolean
    imgSrc : any
    defaultPic : string = "https://ionicframework.com/docs/img/demos/avatar.svg" 
    constructor(
      private readonly _router: Router,
    private _activatedRoute: ActivatedRoute
    ){
        this.imgSrc = this.defaultPic
        this.needSpace = false
    }

   addProfilePic = async () => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source : CameraSource.Prompt
      });

      this.imgSrc = image.dataUrl
      
    };

    removeProfilePic(){
        this.imgSrc = this.defaultPic
    }

    createSpace(){
      this.needSpace = !this.needSpace
    }

    onEdit()
    {
      this._router.navigate(["manage-profile"], {relativeTo : this._activatedRoute})
    }

    
}

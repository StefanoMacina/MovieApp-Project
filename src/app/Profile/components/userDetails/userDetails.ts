import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'user-details',
  templateUrl: './userDetails.html',
  styleUrls: ['./userDetails.scss'],
})
export class userDetails {

    imgSrc : any
    defaultPic : string = "https://ionicframework.com/docs/img/demos/avatar.svg" 
    constructor(){
        this.imgSrc = this.defaultPic
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

    
}

import { Injectable } from '@angular/core';
import { UserForm } from '../shared/interfaces/user-form';
import { BehaviorSubject, Subject } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  subject = new BehaviorSubject<UserForm>({
    userName : 'Stefano Macina Leone',
    email : 's.macinaleone@gmail.com'
  });

  constructor(
    private toastController: ToastController
  ) {}

  updateSubject(formValues: UserForm) {
    this.subject.next(formValues);
  }

  async userData_Toast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Profile updated successfully',
      duration: 1200,
      position: position,
      icon : "cloud-done-outline",
      color : "primary"
    });

    await toast.present();
  }
  async addProfilePic_Toast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Profile pic updated',
      duration: 1200,
      position: position,
      icon : "cloud-done-outline",
      color : "primary"
    });

    await toast.present();
  }
  async removeProfilePic_Toast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Profile pic deleted',
      duration: 1200,
      position: position,
      icon : "cloud-done-outline",
      color : "primary"
    });

    await toast.present();
  }
}

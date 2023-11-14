import { Injectable } from '@angular/core';
import { UserForm } from '../shared/interfaces/user-form';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  subject = new Subject<UserForm>();

  constructor() {}

  updateSubject(formValues: UserForm) {
    this.subject.next(formValues);
  }
}

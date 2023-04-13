import { Pipe, PipeTransform } from '@angular/core';
import {User} from '../interfaces/user';
import {Observable} from 'rxjs';
import {Checkboxes} from './admindashboard.component';

/**
 * @Pipe
 * @param name - The name of the pipe.
 * @returns A new instance of the pipe.
 * @description This is a custom pipe that filters an array of users based on the checkboxes selected.
 */
@Pipe({
  name: 'checkFiler'
})
export class CheckFilerPipe implements PipeTransform {

  transform(value: User[], k: Checkboxes, c: boolean): unknown {


    return value.filter( u => {
      console.log('testawtasetastaer');
      //    is admin box                   is not admin
        if ((k.isAdminBox && u.adminLevel == 0) || (k.noAdmin && u.adminLevel >= 1) ||
        // has application checked but user doest have app
        (k.hasApplication && (u.application === null || !u.application.submitted)) ||
        // has no app checked and
        (k.noApplication && (u.application !== null && u.application.submitted)) ||
          // has been accepted but is not accpeted
          (k.acceptedToHack && !u.isRegisteredFor2020) ||
          // has not been accepted checked and user is accpeted
          (k.notAcceptedToHack && u.isRegisteredFor2020)) {
        return false;
        }
        return true;
    });
  }
}
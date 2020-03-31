import {Application} from './application';

export interface User {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  isRegistered: boolean;
  application: Application;
}

import {Application} from './application';

export interface User {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  isRegisteredFor2020: boolean;
  application: Application;
}

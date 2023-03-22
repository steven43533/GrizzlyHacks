import {Application} from './application';

export interface User {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  isRegisteredFor2020: boolean;
  pastHacks: string[];
  application: Application;
}

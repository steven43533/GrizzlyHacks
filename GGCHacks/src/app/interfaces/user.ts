import {Application} from './application';
import { Event } from '../EventCalendarStuff/event';
export interface User {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  adminLevel: number;
  registeredFor: number[];
  pastHacks: string[];
  application: Application;
}

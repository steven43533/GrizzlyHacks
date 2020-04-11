export class Event {

  public id: string;
  public title: string;
  public startTime: string;
  public endTime: string;
  public day: string;
  public dayPlace: number;

  constructor() {
    this.dayPlace = 0;
    this.id = '';
    this.title = '';
    this.startTime = '';
    this.endTime = '';
    this.day = '';
  }



}

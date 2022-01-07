export class Worker {
    id: number;
    name: string;
    date: Date;
    active: boolean;
  
    constructor(id: number = 0, name: string = "none", date: Date = new Date, active: boolean = false) {
      this.id = id;
      this.name = name;
      this.date = date;
      this.active = active;
    }

    getLink(): String {
      return "/worker/" + this.id.toString ;
    }
}

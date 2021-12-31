export class Worker {
    id: number;
    name: string;
    date: Date;
    active: boolean;
  
    constructor(id: number, name: string, date: Date, active: boolean) {
      this.id = id;
      this.name = name;
      this.date = date;
      this.active = active;
    }
}

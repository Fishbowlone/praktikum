export interface IEmployee {
  since: Date;
  id: number;
  name: string;
  birthday: Date;
  birthplace: string;
  residence: string;
  department: string;
  phone: string;
  interests: string;
  slogan: string;
  thing1: string;
  thing2: string;
  thing3: string;
  favbook: string;
  favfood: string;
  favmovie: string;
  favdrink: string;
  ilike1: string;
  ilike2: string;
  ilike3: string;
  dontlike1: string;
  dontlike2: string;
  dontlike3: string;
  imageurl: string;
  facebook: string;
  twitter: string;
  google: string;
}

export class Employee implements IEmployee {

  since: Date;
  id: number;
  name: string;
  birthday: Date;
  birthplace: string;
  residence: string;
  department: string;
  phone: string;
  interests: string;
  slogan: string;
  thing1: string;
  thing2: string;
  thing3: string;
  favbook: string;
  favfood: string;
  favmovie: string;
  favdrink: string;
  ilike1: string;
  ilike2: string;
  ilike3: string;
  dontlike1: string;
  dontlike2: string;
  dontlike3: string;
  imageurl: string;
  facebook: string;
  twitter: string;
  google: string;

  constructor(employeeData: IEmployee) {
    for (const key in employeeData) {
      if (employeeData.hasOwnProperty(key)) {
        this[key] = employeeData[key];
      }
    }
  }

  getAge(): number {
    const ageDifMs = Date.now() - this.birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getSince(): string {

    const countDownDate = this.since;

    const now = new Date().getTime();

    const distance = now - countDownDate.getTime();

    const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 30 * 12));
    const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30)) - (years * 12);
    const days = Math.floor(distance / (1000 * 60 * 60 * 24)) - (months * 30 + years * 30 * 12);

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    return years + ' Jahre, ' + months + ' Monate, ' + days + ' Tage, ' + hours + ' Stunden, ' + minutes + ' Minuten';
  }
}

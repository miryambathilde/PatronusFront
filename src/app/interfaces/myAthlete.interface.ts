export interface myAthlete {
  id: number;
  name: string;
  surname: string;
  age: number;
  country: string;
  sport: string;
  fk_athletes: number;
  quantitydemand: number;
  logo: string;
  participations: number;
  status: number;
  limitdate: Date;
}

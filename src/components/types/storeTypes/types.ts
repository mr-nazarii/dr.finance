export interface ProfileState {
  currency: string;
  uTocken: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  joinDate?: any;
  income?: Object;
  expenses?: Object;
  total?: Number;
}

export interface UserFinancesState {
  bills: number;
  car: number;
  clothes: number;
  comunication: number;
  eatingPlace: number;
  entertainment: number;
  food?: number;
  gifts?: number;
  health?: number;
  house?: number;
  pets?: number;
  sports?: number;
  taxi?: number;
  transport?: number;
}

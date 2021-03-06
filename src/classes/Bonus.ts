import { BonusAPIType } from '../interfaces/Api';

export default class Bonus {
  public id: number;
  public cinemaID: number | string;
  public price: number;
  public title: string;

  constructor(json: BonusAPIType) {
    this.id = json.id as number;
    this.title = json.title;
    this.cinemaID = json['cinema-id'];
    this.price = json.price;
  }
}

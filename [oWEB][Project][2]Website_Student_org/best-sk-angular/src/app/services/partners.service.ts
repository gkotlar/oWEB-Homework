import { Injectable } from '@angular/core';
import { Entity } from '../models/entity';
import { PARTNERS } from '../../assets/db/partners';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  protected partnerList: Entity[] = PARTNERS;

  constructor() { }

  getAllPartners(): Entity[] {
    return this.partnerList;
  }
}

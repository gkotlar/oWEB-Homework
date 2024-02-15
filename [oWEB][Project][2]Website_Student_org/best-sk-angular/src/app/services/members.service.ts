import { Injectable } from '@angular/core';
import { MEMBERS } from '../../assets/db/members';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  protected membersList: Person[] = MEMBERS;

  constructor() { }
  
  getAllMembers(): Person[] {
    return this.membersList;
  }
}

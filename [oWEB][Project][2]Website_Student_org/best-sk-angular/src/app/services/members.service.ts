import { Injectable, inject } from '@angular/core';
// import { MEMBERS } from '../../assets/db/members';
import { Person } from '../models/person';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  // protected membersList: Person[] = MEMBERS;

  firestore: Firestore = inject(Firestore);
  members$: Observable<Person[]>;

  constructor() {
    const aCollection = collection(this.firestore, 'members');
    this.members$ = collectionData(aCollection) as Observable<Person[]>;
  }
  
  // getAllMembers(): Person[] {
  //   return this.membersList;
  // }

  getAllMembersFirebase(){
    return this.members$;
  }
  
  
}

import { Component, inject } from '@angular/core';
import { CardPeopleComponent } from '../../cards/card-people/card-people.component';
import { Person } from '../../../models/person';
import { MembersService } from '../../../services/members.service';
import { Observable} from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CardPeopleComponent, AsyncPipe],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent {
    //old code for direct acess from local db
  // membersList : Person[] = [];
  membersList : Observable<Person[]>;
  membersService : MembersService = inject(MembersService);

  constructor(){
    //old code for direct acess from local db
    // this.membersList=this.membersService.getAllMembers();
    this.membersList = this.membersService.getAllMembersFirebase();
  }
}

import { Component, inject } from '@angular/core';
import { CardPeopleComponent } from '../../cards/card-people/card-people.component';
import { Person } from '../../../models/person';
import { MembersService } from '../../../services/members.service';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CardPeopleComponent],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent {
  membersList : Person[] = [];
  membersService : MembersService = inject(MembersService);

  constructor(){
    this.membersList=this.membersService.getAllMembers();
  }
}

import { Component } from '@angular/core';
import { CardPeopleComponent } from '../../cards/card-people/card-people.component';
import { MEMBERS } from '../../../../assets/db/members'; 

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CardPeopleComponent],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent {
  members_db = MEMBERS;
}

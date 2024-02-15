import { Component, inject } from '@angular/core';
import { Person } from '../../../models/person';
import { MembersService } from '../../../services/members.service';


@Component({
  selector: 'app-members-alumni',
  standalone: true,
  imports: [],
  templateUrl: './members-alumni.component.html',
  styleUrl: './members-alumni.component.css'
})
export class MembersAlumniComponent {
  membersList : Person[] = [];
  membersService : MembersService = inject(MembersService);

  constructor(){
    this.membersList=this.membersService.getAllMembers();
  }}

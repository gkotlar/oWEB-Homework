import { Component, inject } from '@angular/core';
import { Person } from '../../../models/person';
import { MembersService } from '../../../services/members.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-members-alumni',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './members-alumni.component.html',
  styleUrl: './members-alumni.component.css'
})
export class MembersAlumniComponent {
  membersList : Observable<Person[]>;
  membersService : MembersService = inject(MembersService);

  constructor(){
    this.membersList=this.membersService.getAllMembersFirebase();
  }}

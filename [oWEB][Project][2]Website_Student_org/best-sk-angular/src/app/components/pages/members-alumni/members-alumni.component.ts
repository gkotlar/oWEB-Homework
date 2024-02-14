import { Component } from '@angular/core';
import { MEMBERS } from '../../../../assets/db/members';


@Component({
  selector: 'app-members-alumni',
  standalone: true,
  imports: [],
  templateUrl: './members-alumni.component.html',
  styleUrl: './members-alumni.component.css'
})
export class MembersAlumniComponent {
  members_db = MEMBERS;
}

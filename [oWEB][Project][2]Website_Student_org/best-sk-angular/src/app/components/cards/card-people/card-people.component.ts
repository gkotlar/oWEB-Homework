import { Component, Input } from '@angular/core';
import { Person } from '../../../models/person';
import { CommonModule } from '@angular/common';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-people',
  standalone: true,
  imports: [CommonModule, NgbTooltipModule],
  templateUrl: './card-people.component.html',
  styleUrl: './card-people.component.css'
})
export class CardPeopleComponent {
  @Input({required:true})
  person!:Person;
}

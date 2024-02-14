import { Component } from '@angular/core';
import { CardEntetiesComponent } from '../../cards/card-enteties/card-enteties.component';
import { PARTNERS } from '../../../../assets/db/partners';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CardEntetiesComponent],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {
  partners_db = PARTNERS;
}

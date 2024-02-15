import { Component, inject } from '@angular/core';
import { CardEntetiesComponent } from '../../cards/card-enteties/card-enteties.component';
import { Entity } from '../../../models/entity';
import { PartnersService } from '../../../services/partners.service';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CardEntetiesComponent],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {
  partnerList : Entity[] = [];
  partnerService : PartnersService = inject(PartnersService);

  constructor(){
    this.partnerList=this.partnerService.getAllPartners();
  }
}

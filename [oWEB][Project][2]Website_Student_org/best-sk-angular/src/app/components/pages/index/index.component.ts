import { Component } from '@angular/core';
import { NgbCarouselModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CARAUSEL } from '../../../../assets/db/carausel';


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [NgbCarouselModule, NgbTooltipModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  photos = CARAUSEL;

}

import { Component } from '@angular/core';
import { SOCIALMEDIA } from '../../../../assets/db/social-media-list';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgbTooltipModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  socialmediadb = SOCIALMEDIA
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Entity } from '../../../models/entity';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-enteties',
  standalone: true,
  imports: [CommonModule, NgbTooltipModule],
  templateUrl: './card-enteties.component.html',
  styleUrl: './card-enteties.component.css'
})
export class CardEntetiesComponent {
  @Input({required:true})
  ent!:Entity;
}

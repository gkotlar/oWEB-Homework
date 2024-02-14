import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbDropdownModule, NgbNavConfig, NgbNavModule, NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbNavModule, NgbDropdownModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: [NgbNavConfig, NgbDropdownConfig],
})
export class NavbarComponent{
  constructor(config: NgbNavConfig) {
		// customize default values of navs used by this component tree
		config.destroyOnHide = false;
		config.roles = false;
  }
  collapsed = true;
}

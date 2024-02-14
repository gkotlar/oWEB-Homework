import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbModule, NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './components/pages/index/index.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { NavbarComponent } from './components/core/navbar/navbar.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgbModule, NgbProgressbar, IndexComponent, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'best-sk-angular';
}

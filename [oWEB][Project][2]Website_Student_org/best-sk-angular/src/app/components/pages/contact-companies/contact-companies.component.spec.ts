import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCompaniesComponent } from './contact-companies.component';

describe('ContactCompaniesComponent', () => {
  let component: ContactCompaniesComponent;
  let fixture: ComponentFixture<ContactCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactCompaniesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

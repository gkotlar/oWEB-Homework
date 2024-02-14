import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEntetiesComponent } from './card-enteties.component';

describe('CardEntetiesComponent', () => {
  let component: CardEntetiesComponent;
  let fixture: ComponentFixture<CardEntetiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEntetiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardEntetiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

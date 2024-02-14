import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPeopleComponent } from './card-people.component';

describe('CardPeopleComponent', () => {
  let component: CardPeopleComponent;
  let fixture: ComponentFixture<CardPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPeopleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

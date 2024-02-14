import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsLocalComponent } from './about-us-local.component';

describe('AboutUsLocalComponent', () => {
  let component: AboutUsLocalComponent;
  let fixture: ComponentFixture<AboutUsLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsLocalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutUsLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

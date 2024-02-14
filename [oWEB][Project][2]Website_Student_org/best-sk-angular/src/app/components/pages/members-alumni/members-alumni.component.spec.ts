import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersAlumniComponent } from './members-alumni.component';

describe('MembersAlumniComponent', () => {
  let component: MembersAlumniComponent;
  let fixture: ComponentFixture<MembersAlumniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembersAlumniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MembersAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

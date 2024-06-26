import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalProjectsComponent } from './total-projects.component';

describe('TotalProjectsComponent', () => {
  let component: TotalProjectsComponent;
  let fixture: ComponentFixture<TotalProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalProjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

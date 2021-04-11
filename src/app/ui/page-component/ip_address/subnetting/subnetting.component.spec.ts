import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnettingComponent } from './subnetting.component';

describe('SubnettingComponent', () => {
  let component: SubnettingComponent;
  let fixture: ComponentFixture<SubnettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubnettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubnettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

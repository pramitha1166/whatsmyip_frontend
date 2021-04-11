import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpAddressMainComponent } from './ip-address-main.component';

describe('IpAddressMainComponent', () => {
  let component: IpAddressMainComponent;
  let fixture: ComponentFixture<IpAddressMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpAddressMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpAddressMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

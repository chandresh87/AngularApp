import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageCpComponent } from './marriage-cp.component';

describe('MarriageCpComponent', () => {
  let component: MarriageCpComponent;
  let fixture: ComponentFixture<MarriageCpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarriageCpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriageCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

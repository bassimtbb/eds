import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdetailleComponent } from './sdetaille.component';

describe('SdetailleComponent', () => {
  let component: SdetailleComponent;
  let fixture: ComponentFixture<SdetailleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SdetailleComponent]
    });
    fixture = TestBed.createComponent(SdetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

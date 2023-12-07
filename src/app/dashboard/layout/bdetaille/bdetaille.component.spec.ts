import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdetailleComponent } from './bdetaille.component';

describe('BdetailleComponent', () => {
  let component: BdetailleComponent;
  let fixture: ComponentFixture<BdetailleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BdetailleComponent]
    });
    fixture = TestBed.createComponent(BdetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

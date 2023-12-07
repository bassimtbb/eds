import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdetailleComponent } from './idetaille.component';

describe('IdetailleComponent', () => {
  let component: IdetailleComponent;
  let fixture: ComponentFixture<IdetailleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdetailleComponent]
    });
    fixture = TestBed.createComponent(IdetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosteIComponent } from './poste-i.component';

describe('PosteIComponent', () => {
  let component: PosteIComponent;
  let fixture: ComponentFixture<PosteIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PosteIComponent]
    });
    fixture = TestBed.createComponent(PosteIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

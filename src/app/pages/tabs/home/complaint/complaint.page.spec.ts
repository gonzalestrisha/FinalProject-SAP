import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComplaintPage } from './complaint.page';

describe('ComplaintPage', () => {
  let component: ComplaintPage;
  let fixture: ComponentFixture<ComplaintPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComplaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

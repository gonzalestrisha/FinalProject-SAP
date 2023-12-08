import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopayPage } from './topay.page';

describe('TopayPage', () => {
  let component: TopayPage;
  let fixture: ComponentFixture<TopayPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TopayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

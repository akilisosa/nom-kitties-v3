import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FelineForumPage } from './feline-forum.page';

describe('FelineForumPage', () => {
  let component: FelineForumPage;
  let fixture: ComponentFixture<FelineForumPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FelineForumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

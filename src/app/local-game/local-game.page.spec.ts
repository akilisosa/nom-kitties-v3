import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalGamePage } from './local-game.page';

describe('LocalGamePage', () => {
  let component: LocalGamePage;
  let fixture: ComponentFixture<LocalGamePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

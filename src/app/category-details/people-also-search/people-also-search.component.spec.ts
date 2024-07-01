import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleAlsoSearchComponent } from './people-also-search.component';

describe('PeopleAlsoSearchComponent', () => {
  let component: PeopleAlsoSearchComponent;
  let fixture: ComponentFixture<PeopleAlsoSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleAlsoSearchComponent]
    });
    fixture = TestBed.createComponent(PeopleAlsoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcardComponentComponent } from './wildcard-component.component';

describe('WildcardComponentComponent', () => {
  let component: WildcardComponentComponent;
  let fixture: ComponentFixture<WildcardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildcardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildcardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpurecomponentComponent } from './impurecomponent.component';

describe('ImpurecomponentComponent', () => {
  let component: ImpurecomponentComponent;
  let fixture: ComponentFixture<ImpurecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpurecomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpurecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorwaresoftSuperadminComponent } from './valorwaresoft-superadmin.component';

describe('ValorwaresoftSuperadminComponent', () => {
  let component: ValorwaresoftSuperadminComponent;
  let fixture: ComponentFixture<ValorwaresoftSuperadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ValorwaresoftSuperadminComponent]
    });
    fixture = TestBed.createComponent(ValorwaresoftSuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

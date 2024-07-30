import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotreAgenceComponent } from './notre-agence.component';

describe('NotreAgenceComponent', () => {
  let component: NotreAgenceComponent;
  let fixture: ComponentFixture<NotreAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotreAgenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotreAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
